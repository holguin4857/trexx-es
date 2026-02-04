"use server";

import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with the API Key you generated
const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Your existing Strict Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// 2. Your existing Return Type
export type ContactState = {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
};

// 3. The Server Action (renamed to match your component's import)
export async function sendContactEmail(prevState: ContactState, formData: FormData): Promise<ContactState> {
  // Extract data from the form
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // Validate with Zod
  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  try {
    const { name, email, message } = validatedFields.data;

    // ✅ THE HANDSHAKE: Sending via your verified trexx.es domain
    const { error } = await resend.emails.send({
      from: "Trexx Digital <notifications@trexx.es>", 
      to: "info@trexx.es",                             
      replyTo: email,                                  
      subject: `New Lead: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        success: false,
        message: "Could not send email. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };

  } catch (err) {
    console.error("Server Action Error:", err);
    return {
      success: false,
      message: "A technical error occurred.",
    };
  }
}