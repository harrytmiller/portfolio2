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
  image: `${BASE}/images/298.png`,
  images: range(298, 327),
  link: "https://www.qualitykiwicarpentry.com/",
  overview: "Multi-page business website for a carpentry and construction company: twelve services each with its own detail page, a project gallery, company and legal pages (privacy, terms), and a contact form that sends enquiries by email through Resend with client-side image compression so customers can attach project photos.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, Resend (transactional email), client-side image compression, Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), HTML5, CSS3, HTTPS/TLS, environment-based secret management.",
  outcome: "A ready-to-trade website for a real carpentry business. Visitors can browse twelve services, view individual service pages and a project gallery, and read full legal pages. The contact form lets customers send an enquiry with their details, a preferred consultation date, and project photos, which are automatically resized in the browser before sending to stay within serverless payload limits, then delivered by email through Resend. All company details, services and contact information are structured to be updated easily. Built around real company information including registered company details and insurance, and deployed live on Vercel.",
  tags: ["Design", "Development", "Deployment"],
},
{
  id: "sct", slug: "Stroud Complementary Therapies",
  name: "Stroud Complementary Therapies", category: "Business Project", year: "2026",
  desc: "A live appointment booking website for a complementary therapy practice, with deposit payments and an admin panel the owner uses to manage bookings, availability and site content.",
  image: `${BASE}/images/502.png`,
  images: range(502, 559),
  link: "https://www.stroudcomplementarytherapies.com/",
  overview: "Live appointment booking website for a real massage and reflexology practice. Customers choose one or more treatments to run back-to-back as a single appointment, pick a slot from a monthly calendar showing live availability, and pay a deposit through Stripe Checkout (card or digital wallet) to confirm. Guests verify their email with a one-time code; registered clients have their details pre-filled for faster rebooking. Double-booking is made impossible by a database-level exclusion constraint, so two people can never hold the same slot even if they pay at the same moment, and an adults-only age check is enforced from date of birth. The admin panel runs the whole business: generate a month's schedule in one click, add or remove availability windows (overlapping ones merge automatically), book clients in manually with no deposit, and reschedule, cancel or refund any appointment, with the matching email sent automatically each time. The owner also edits the site's own content from the panel, including treatments and prices, the photo gallery and contact details, without touching code. Built with GDPR-compliant data handling: a full privacy notice, ICO registration, consent capture and account deletion. Deployed serverlessly on Vercel with a Neon Postgres database.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres, connection pooling), Stripe (Checkout, webhooks, refunds), JWT auth (jose) with bcryptjs password hashing, Brevo (transactional email, domain-verified sending), Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), GitHub Actions (scheduled cron for reminder emails), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
  outcome: "A complete, live booking system handling a real practice's appointments end to end, from first enquiry through to refund, with no manual intervention needed for a normal booking. The owner runs scheduling, payments and the site's content from one admin panel without touching code, and the database-level booking protection means the system can be trusted with real money and real customers' time.",
  tags: ["Design", "Development", "Deployment"],
},

{
  id: "red", slug: "red",
  name: "Red", category: "Business Project", year: "2026",
  desc: "A live artist portfolio built to grow into a full e-commerce store the moment its owner is ready, with every stage of that transition controlled from one admin panel.",
  image: `${BASE}/images/PLACEHOLDER.png`,   // TODO: replace with real screenshot range once images are taken, e.g. range(600, 640)
  images: [],                                 // TODO: range(START, END)
  link: "https://redartworks.co.uk/",
  overview: "Website built for an artist who's about to start selling their work, designed so the site itself doesn't need rebuilding as the business grows. It launches as a pure portfolio — gallery, about page, contact — with zero purchasing surface live. When its owner is ready to start trading, a single admin toggle switches the entire site, sitewide, into a fully transactional shop: stock, checkout, orders, tracking, all of it. Every field that conversion needs — trader identity, business address, VAT status — is already built into the admin panel from day one, sitting ready to fill in whenever, rather than needing new development work later. The site's legal pages follow the same philosophy but deliberately don't flip automatically with the shop: Terms & Privacy show a simplified, portfolio-appropriate version by default, and switching to the full trading version (covering orders, payment, and cancellation rights) is its own separate, manual toggle — because going live with real trading is a considered decision, not something that should happen as a side-effect of an unrelated setting. Past that core shop/portfolio switch, individual features — account registration, the contact form, the newsletter signup, product-category browsing — can each be turned on independently through the same panel, so the site only ever exposes what the business is actually ready for at any given stage, right up to full scale.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres, HTTP driver), Stripe (live KYC-verified account, Payment Intents, webhooks), custom JWT auth (jose) with bcryptjs password hashing and OTP email verification, Brevo (transactional email, verified sender), Cloudinary (image hosting/CDN), postcodes.io (free UK postcode/address validation against live ONS data), Netlify (serverless deployment, CI/CD, managed TLS), Cloudflare (domain registration, DNS), GitHub (version control, automatic deploys on push), HTML5, CSS3, HTTPS/TLS, environment-based secret management.",
  outcome: "A site that runs as a portfolio today and as a full store the day its owner decides, with no development work in between. In shop mode: a full product catalogue with per-size stock; checkout that reserves stock the instant it starts (not at payment) using an atomic, race-condition-safe database transaction, so two people can never both buy the last unit of a one-of-a-kind piece; guest checkout that verifies the customer's email with a one-time code before payment; UK postcode and town cross-checked against live ONS postcode data to catch typo'd addresses before they ship; and order confirmation, shipped, and cancelled emails firing automatically. Every genuine data-collection point — the contact form, newsletter sign-up, registration, and checkout — requires its own explicit, GDPR-appropriate consent checkbox, enforced server-side rather than trusted to the browser, and structured so no processing (not even sending a verification code) can happen before consent is given. Data retention is handled automatically rather than left as manual admin upkeep: abandoned, never-verified registrations delete themselves after 48 hours; unsubscribing from the newsletter is one click via a signed link, no login needed; and old order records past the legally-required 6-year retention window can be anonymised (name, address and email redacted, the order itself kept for accounting) with one admin-triggered action. Accounts include self-serve password reset and account deletion, and login is deliberately never gated by any admin toggle, so the site's owner can never lock themselves out of their own account. The admin panel controls all of it — shop on/off, registration on/off, contact form on/off, newsletter sign-up on/off, product-category browsing on/off, trading vs. portfolio legal pages, and full trader/business/VAT identity — with every change applying sitewide immediately, no redeploy required.",
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