// Base path: empty locally, "/portfolio2" when deployed (set by GitHub Actions)
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Helper: builds image paths from a numeric range (zero-padded to 3 digits)
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) =>
    `${BASE}/images/${String(start + i).padStart(3, "0")}.png`
  );

const PROJECTS = [
  {
    id: "kiwi-carpentry", slug: "kiwi-carpentry",
    name: "Quality Kiwi Carpentry", category: "Business Project", year: "2026",
    desc: "A live business website for a carpentry and construction company.",
    image: `${BASE}/images/301.png`,
    images: range(301, 315),
    link: "https://kiwi-h55oz7l8i-s-projects14.vercel.app/",
    overview: "Multi-page business website for a carpentry and construction company: services browsable by category, individual service pages, project gallery, company and legal pages (privacy, terms), and a contact form that sends enquiries by email through Resend with client-side image compression so customers can attach project photos.",
    software: "TypeScript, Next.js 16 (App Router, Server Components, Turbopack), React 19, Node.js, Resend (transactional email), client-side image compression, Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), HTML5, CSS3, HTTPS/TLS, environment-based secret management.",
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
    link: "https://template-store-fwvwxdohv-s-projects14.vercel.app/",
    overview: "E-commerce platform: stock & orders database, admin control panel, order processing (cart → payment → fulfilment/refund), MFA, role-based auth, webhook-driven emails, race-safe atomic transactions, deployed serverlessly on Vercel with Neon Postgres, set up in test mode so on transaction users aren't charged and items aren't actually sold (account number: 4242 4242 4242 4242, expiry & CVC: any)",    
    software: "TypeScript, Next.js 16 (App Router, Server Components, Turbopack), React 19, Node.js, PostgreSQL, SQLite, Neon (serverless Postgres), Prisma ORM, SQL, Stripe (Payment Intents, webhooks, refunds), Clerk (custom sign-in, MFA, password reset, role-based admin), Resend (transactional email), Vercel, GitHub, HTML5, CSS3 Vercel (serverless deployment, CI/CD), Neon (serverless Postgres, connection pooling), GitHub (version control, automatic deploys on push), Stripe (Payment Intents, webhooks, refunds), Clerk (auth, MFA, role-based admin), Resend (transactional email), Prisma ORM (migrations, schema management), HTTPS/TLS, environment-based secret management",
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
    software: "TypeScript, Next.js 16 (App Router, Server Components, Turbopack), React 19, Node.js, PostgreSQL, Neon (serverless Postgres, connection pooling), Stripe (Checkout, webhooks, refunds), JWT auth with bcryptjs password hashing, Resend (transactional email), Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), GitHub Actions (free hourly cron for reminder email), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
    outcome: "A complete booking site for service businesses. Customers register, verify their email, choose one or more services to be booked back-to-back as a single appointment, choose from a monthly calendar showing live availability slots, and pay a deposit. Confirmation, cancellation and day-before reminder emails fire automatically. The admin panel includes: option to generate a default monthly schedule in one click, add or remove individual availability windows (overlapping windows merge automatically), book clients in manually with no deposit, and refund or cancel any booking.",
    tags: ["Design", "Development", "Deployment"],
  },
];

export default PROJECTS;