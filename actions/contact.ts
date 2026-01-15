"use server";

import { z } from "zod";

// 1. Define the Strict Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// 2. Define the Return Type
export type ContactState = {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
};

// 3. The Server Action
export async function sendContactEmail(prevState: ContactState, formData: FormData): Promise<ContactState> {
  // Simulate network delay (remove this in production)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Extract data
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // Validate
  const validatedFields = contactSchema.safeParse(rawData);

  // If validation fails, return errors to the UI
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  // ✅ SUCCESS: Here you would actually send the email (e.g., via Resend or SendGrid)
  console.log("SERVER ACTION: Email sent!", validatedFields.data);

  return {
    success: true,
    message: "Message sent successfully! We will be in touch.",
  };
}