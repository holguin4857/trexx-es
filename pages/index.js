import Head from "next/head";
import Link from "next/link";

import hero from "../styles/hero.module.css";
import features from "../styles/features.module.css";
import testimonials from "../styles/testimonials.module.css";
import milestones from "../styles/milestones.module.css";
import why from "../styles/why.module.css";
import services from "../styles/services.module.css";
import buttons from "../styles/buttons.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>trexx adventure tours</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={hero.container}>
        <div className={hero.content}>
          <h1>Your team&apos;s next adventure</h1>

          <p>
            At trexx, we offer three distinct e-bike experiences, each
            meticulously designed to foster teamwork, create lasting memories,
            and reward your efforts with world-class culinary excellence.
            Whether you crave cultural discovery, mountain thrills, or an epic
            journey, we have the perfect tour for your team.
          </p>
          <Link href="book" className={buttons.button}>
            Get started
          </Link>
          <Link href="contact" className={buttons.button1}>
            Talk to an expert
          </Link>
        </div>
      </div>

      <section className={services.columns}>
        <article className={services.column}>
          <h2>Valencia City Tours</h2>
          <p>
            <strong>Unlock the Soul of the City:</strong> Discover
            Valencia&apos;s soul on a guided bike tour through 2,000 years of
            history. Glide from the futuristic City of Arts and Sciences to the
            historic Old Town, exploring the Turia Gardens and vibrant Central
            Market. This sophisticated journey is perfect for teams to connect
            with the city&apos;s culture in a fun and relaxed way.
          </p>
          <ul className={services.tourFeatures}>
            <li>
              <strong>Best For:</strong> All fitness levels, cultural
              enthusiasts, and teams seeking a sophisticated urban experience.
            </li>
            <li>
              <strong>Key Sights:</strong> City of Arts & Sciences, El Carmen,
              Central Market, Turia Gardens.
            </li>
            <li>
              <strong>The Reward:</strong> A unique, private dining experience
              with cuisine inspired by Michelin-starred kitchens, curated by our
              expert chef partner.
            </li>
          </ul>
          <Link href="services" className={buttons.readMore}>
            Find your city tours
          </Link>
        </article>

        <article className={services.column}>
          <h2>MTB Sierra Calderona</h2>
          <p>
            <strong>Ride Above the Ordinary:</strong> Escape to the Sierra
            Calderona&apos;s rugged trails just outside Valencia. On our guided
            e-MTB tour, your team will conquer scenic climbs and enjoy thrilling
            descents tailored to all skill levels. Experience breathtaking
            panoramic views of the mountains, rewarded by a spectacular
            culinary experience.
          </p>
          <ul className={services.tourFeatures}>
            <li>
              <strong>Best For:</strong> Teams seeking adventure, stunning
              nature, and a true sense of accomplishment.
            </li>
            <li>
              <strong>Key Sights:</strong> Garbí viewpoint, Serra Castle,
              natural springs, and panoramic vistas.
            </li>
            <li>
              <strong>The Reward:</strong> An unforgettable meal of world-class
              quality, prepared exclusively for your team by our expert chef
              partner.
            </li>
          </ul>
          <Link href="services" className={buttons.readMore}>
            Find your mountain tours
          </Link>
        </article>

        <article className={services.column}>
          <h2>Adventure Tours</h2>
          <p>
            <strong>Forge Bonds on the Open Road:</strong> Embark on an epic
            journey along Spain&apos;s famous Vías Verdes (Greenways). These
            historic railway routes offer a shared challenge, building
            camaraderie as you pedal through stunning remote landscapes. This
            full or multi-day adventure forges deep team bonds.
          </p>
          <ul className={services.tourFeatures}>
            <li>
              <strong>Best For:</strong> Teams looking for a unique, challenging
              objective and the ultimate bonding experience.
            </li>
            <li>
              <strong>Key Sights:</strong> The Ojos Negros Vía Verde, historic
              railway tunnels, viaducts, and changing landscapes.
            </li>
            <li>
              <strong>The Reward:</strong> A remarkable culinary celebration of
              your team&apos;s incredible achievement.
            </li>
          </ul>
          <Link href="services" className={buttons.readMore}>
            Find your adventure tours
          </Link>
        </article>
      </section>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Ride. Bond. Indulge.</h2>
          <p>
            Forge stronger connections on our guided e-bike adventures through
            Valencia&apos;s stunning landscapes, crowned with a world-class culinary finale.
          </p>
        </div>
      </div>

      <div className={milestones.cards}>
        <div className={milestones.card}>
          <h3>907m+</h3>
          <p>Metres of Panoramic Views</p>
        </div>
        <div className={milestones.card}>
          <h3>1</h3>
          <p>Private Chef Experience</p>
        </div>
        <div className={milestones.card}>
          <h3>200km+</h3>
          <p>Of Epic Trails to Explore</p>
        </div>
      </div>

      <div className={why.container}>
        <div className={why.content}>
          <h2>Why choose trexx?</h2>
          <p>
            At trexx, we believe the strongest team bonds are forged through
            shared challenges and exceptional rewards. We don&apos;t just offer
            e-bike tours; we design immersive adventures that unite your team
            and create lasting memories. Here&apos;s why a trexx experience is
            unlike any other:
          </p>
        </div>
      </div>

      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            <strong>1. An Unforgettable Gastronomic Finale:</strong> Anyone can
            offer a bike ride. We offer a culinary event. The pinnacle of every
            Trexx tour is a spectacular meal designed by our exclusive partner,
            Chef Oliver Sharpe. With a background forged in the acclaimed
            kitchens of Michelin-starred chefs like Jean Luis Neichel and Jean
            Luc Figueras, he brings a world-class, fine-dining experience to the
            most stunning locations. It&apos;s an authentic and exclusive reward
            that elevates a great day into a legendary one.
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            <strong>2. Shared Adventure, No One Left Behind:</strong> Our
            state-of-the-art e-bikes are the ultimate equalisers. They empower
            every member of your team, regardless of their fitness level or
            cycling experience, to conquer scenic climbs and enjoy the journey
            together. The focus is on the shared experience—the views, the
            laughter, and the sense of accomplishment—ensuring no one gets left
            behind.
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            <strong>3. True Local Expertise:</strong> Our roots are in Valencia.
            We guide you through our backyard, from the hidden, rugged trails of
            the Sierra Calderona to the secret historical gems within the city.
            We don&apos;t follow generic routes; we curate authentic adventures
            that reveal the true soul of the region, sharing stories and
            viewpoints that only a local would know
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            <strong>4. Seamless, All-Inclusive Service:</strong> Your
            team&apos;s only focus should be the adventure. We handle every
            single detail with precision and care. From door-to-door transport
            in premium vehicles to perfectly maintained e-bikes and safety gear,
            your experience is completely seamless. We provide everything, so
            you can simply show up and ride.
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            <strong>5. Designed to Forge Bonds:</strong> Our tours are more than
            just a route on a map; they are team-building expeditions. The
            shared challenge of a mountain ascent or the collective discovery of
            a new city path is intentionally designed to spark communication,
            build trust, and foster a powerful sense of camaraderie that extends
            far beyond the trail.
          </p>
        </div>
      </div>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Ready to Build Your Perfect Team Adventure?</h2>
          <p>
            Every great team has a story. Let us help you write the next
            chapter. We will work directly with you to tailor the perfect blend
            of adventure and culinary excellence for your group&apos;s specific
            goals and size. Planning is simple, and the experience is
            unforgettable.
          </p>
          <Link href="book" className={buttons.button}>
            Book now
          </Link>
        </div>
      </div>
    </>
  );
}
