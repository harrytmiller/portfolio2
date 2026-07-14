// Base path: empty locally, "/portfolio2" when deployed (set by GitHub Actions)
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Helper: builds image paths from a numeric range (zero-padded to 3 digits)
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) =>
    `${BASE}/images/${String(start + i).padStart(3, "0")}.png`
  );

const PROJECTS = [

{
  id: "sct", slug: "Stroud Complementary Therapies",
  name: "Stroud Complementary Therapies", category: "Business Project", year: "2026",
  desc: "A live appointment booking website for a complementary therapy practice, with deposit payments and an admin panel the owner uses to manage bookings, availability and site content.",
  image: `${BASE}/images/502.png`,
  images: range(502, 559),
  link: "https://www.stroudcomplementarytherapies.com/",
  outcome: "Live appointment booking website for a real massage and reflexology practice. Customers choose one or more treatments to run back-to-back as a single appointment, pick a slot from a monthly calendar showing live availability, and pay a deposit through Stripe Checkout (card or digital wallet) to confirm. Guests verify their email with a one-time code; registered clients have their details pre-filled for faster rebooking. Double-booking is made impossible by a database-level exclusion constraint, so two people can never hold the same slot even under true concurrent load. Bookings automatically deleted 7 years after the appointment. Account deletion available on request as well as automatic 2 year dormancy deletion with 23 month reminder. Unverified accounts automatically purged after 30 days and stale unpaid bookings automatically cleared. Daily automated retention sweep runs via scheduled cron with no manual action needed. The admin panel runs the whole business: generate a month's schedule in one click, add or remove availability windows (overlapping ones merge automatically), book clients in manually with no deposit, and reschedule, cancel or refund any appointment, with the matching email sent automatically each time. The owner also edits the site's own content from the panel, including treatments and prices, the photo gallery and contact details, without touching code. Built with GDPR-compliant data handling: a full privacy notice, ICO registration, consent capture and account deletion. Deployed serverlessly on Vercel with a Neon Postgres database.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres, connection pooling), Stripe (Checkout, webhooks, refunds), JWT auth (jose) with bcryptjs password hashing, Brevo (transactional email, domain-verified sending), Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), GitHub Actions (scheduled cron for reminder emails), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
  overview: "A complete, live booking system handling a real practice's appointments end to end, from first enquiry through to refund, with no manual intervention needed for a normal booking. The owner runs scheduling, payments and the site's content from one admin panel without touching code, and the database-level booking protection means the system can be trusted with real money and real customers' time. ",
  tags: ["Design", "Development", "Deployment"],
},


{
  id: "red", slug: "red",
  name: "Red", category: "Business Project", year: "2026",
  desc: "A live portfolio and shop for an artist selling original paintings and prints, with vast admin options so the site can grow with the business.",  image: `${BASE}/images/PLACEHOLDER.png`,   // TODO: replace with real screenshot range once images are taken, e.g. range(600, 640)
  images: [],                                 // TODO: range(START, END)
  link: "https://redartworks.co.uk/",
  overview: "Live portfolio and shop built to grow with the buisness, for an artist selling original paintings and prints. The site launches as a portfolio with no purchasing live, and an admin toggle switches the whole site into a full e-commerce shop or a shop redirect when the owner's ready to trade. For portfolio and shop redirect modes legal pages update automatically to refelect the state of the site. For full ecommerse legal pages must be updated manually with a switch. Other full ecommerse switches include: Registration, the contact form, the newsletter signup, product category header buttons, as well as a secondary manual switch for the shop itself.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres), Stripe (live account, Payment Intents, webhooks), custom JWT auth with bcryptjs and OTP email verification, Brevo (transactional email), Cloudinary (image hosting), postcodes.io (UK postcode validation), Netlify (serverless deployment, CI/CD), Cloudflare (domain, DNS), GitHub (version control, automatic deploys on push), HTML5, CSS3, HTTPS/TLS, environment-based secret management.",
  outcome: "Customers browse and buy once the shop's switched on. Checkout reserves stock the moment it starts, not after payment, closing a race condition that could otherwise let two people buy the last unit of a one-of-a-kind piece at the same time. Guests verify their email with a one-time code before paying, and the postcode is checked against live UK postcode data before an order goes through. Every form that collects data (contact, newsletter, registration, checkout) requires its own consent checkbox, checked on the server, not just the browser. Abandoned sign-ups delete themselves after 48 hours, unsubscribing from the newsletter is one click, old orders past the 6-year retention period can be anonymised from the admin panel. The owner runs all of it: shop and archive content, products and stock, legal pages, registration, contact form, newsletter, from one panel with no code changes needed.",
  tags: ["Design", "Development", "Deployment"],
},

{
  id: "kiwi-carpentry", slug: "kiwi-carpentry",
  name: "Quality Kiwi Carpentry", category: "Business Project", year: "2026",
  desc: "A live business website for a carpentry and construction company.",
  image: `${BASE}/images/298.png`,
  images: range(298, 327),
  link: "https://www.qualitykiwicarpentry.com/",
  overview: "Multi-page business website for a carpentry and construction company: twelve services each with its own detail page, a project gallery, company and legal pages (privacy, terms), and a contact form that sends enquiries by email through Resend with client-side image compression so customers can attach project photos.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, Resend (transactional email), client-side image compression, Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), HTML5, CSS3, HTTPS/TLS, environment-based secret management.",
  outcome: "A ready-to-trade website for a real carpentry business. Visitors can browse twelve services, view individual service pages and a project gallery, and read full legal pages. The contact form lets customers send an enquiry with their details, a preferred consultation date, and project photos, which are automatically resized in the browser before sending to stay within serverless payload limits, then delivered by email through Resend. All company details, services and contact information are structured to be updated easily. Built around real company information including registered company details and insurance, and deployed live on Vercel.",
  tags: ["Design", "Development", "Deployment"],
},
  {
    id: "template", slug: "template",
    name: "Template", category: "Business Project", year: "2026",
    desc: "A design template targeted towards service based businesses.",
    image: `${BASE}/images/101.png`,
    images: range(101, 115),
    link: "https://template-iota-topaz.vercel.app/",
    overview: "Multi-page website template built for service-based businesses.",
    software: "TypeScript, Next.js (App Router), React, Resend (transactional email), Vercel (serverless deployment, CI/CD), GitHub (version control), HTML5, CSS3",
    outcome: "A ready-to-deploy business website covering the  customer journey from browsing to enquiry. Visitors can browse services filtered by category, and submit a contact form that sends an email through Resend. All content (service titles, tags, gallery items, contact details) is structured to be swapped out with minimal effort, making it a practical starting point for any service based business.",
    tags: ["Design", "Development", "Deployment"],
  },
  {
    id: "template-store", slug: "template-store",
    name: "Template Store", category: "Business Project", year: "2026",
    desc: "A fully functional e-commerce platform set up in test mode.",
    image: `${BASE}/images/001.png`,
    images: range(1, 35
    ),
    link: "https://template-store-roan.vercel.app/",
    overview: "E-commerce platform: stock & orders database, admin control panel, order processing (cart → payment → fulfilment/refund), MFA, role-based auth, webhook-driven emails, race-safe atomic transactions, deployed serverlessly on Vercel with Neon Postgres, set up in test mode so on transaction users aren't charged and items aren't actually sold (account number: 4242 4242 4242 4242, expiry & CVC: any)",    
    software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, SQLite, Neon (serverless Postgres), Prisma ORM, SQL, Stripe (Payment Intents, webhooks, refunds), Clerk (custom sign-in, MFA, password reset, role-based admin), Resend (transactional email), Vercel, GitHub, HTML5, CSS3 Vercel (serverless deployment, CI/CD), Neon (serverless Postgres, connection pooling), GitHub (version control, automatic deploys on push), Stripe (Payment Intents, webhooks, refunds), Clerk (auth, MFA, role-based admin), Resend (transactional email), Prisma ORM (migrations, schema management), HTTPS/TLS, environment-based secret management",
    outcome: "A fully functional ecommerce site from browsing through to refund. Customers can sign up, sign in, browse and filter products by everything from price to colour, add to cart with live stock checks, and pay through Stripe checkout. Every order gets saved in the database, stock auto-decrements when payment clears, and confirmation emails go out automatically. The admin side lets me see every order, mark stuff as shipped, cancel and refund with one click (Stripe refund + stock restored automatically), and edit stock by hand. Cancelled orders trigger a refund email to the customer. Pending checkouts that never finish get cleaned up after 48 hours. Deployed live on Vercel with a serverless Postgres database. The only thing stopping it taking real money is the Stripe test keys, which is a two line swap when ready to go live.",
    tags: ["Design", "Development", "Deployment"],
  },
{
    id: "template-bookings", slug: "template-bookings",
    name: "Template Bookings", category: "Business Project", year: "2026",
    desc: "A full appointment booking platform with payment processing and admin panels set up in test mode.",
    image: `${BASE}/images/201.png`,
    images: range(201, 229),
    link: "https://bookings-eta-pied.vercel.app/",
    overview: "Appointment booking platform: live availability calendar, Stripe deposit checkout, email verification, admin panel, one-click default schedule generator, add or remove availability windows, overlapping windows merged automatically, manual admin bookings with no deposit, refund or cancel, automated day-before reminders, deployed serverlessly on Vercel with Neon Postgres, set up in Stripe test mode so no real charges are taken (card: 4242 4242 4242 4242, expiry & CVC: any)",
    software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres, connection pooling), Stripe (Checkout, webhooks, refunds), JWT auth with bcryptjs password hashing, Resend (transactional email), Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), GitHub Actions (free hourly cron for reminder email), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
    outcome: "A complete booking site for service businesses. Customers register, verify their email, choose one or more services to be booked back-to-back as a single appointment, choose from a monthly calendar showing live availability slots, and pay a deposit. Confirmation, cancellation and day-before reminder emails fire automatically. The admin panel includes: option to generate a default monthly schedule in one click, add or remove individual availability windows (overlapping windows merge automatically), book clients in manually with no deposit, and refund or cancel any booking.",
    tags: ["Design", "Development", "Deployment"],
  },
];

export default PROJECTS;