// Base path: empty locally, "/portfolio2" when deployed (set by GitHub Actions)
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Helper: builds image paths from a numeric range (zero-padded to 3 digits)
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) =>
    `${BASE}/images/${String(start + i).padStart(3, "0")}.png`
  );

const PROJECTS = [
{
  id: "tgw", slug: "Tailblazing Dog Walking",
  name: "Tailblazing Dog Walking", category: "Business Project", year: "2026",
  image: `${BASE}/images/901.png`,
  images: range(903, 959),
  tags: ["Design", "Development", "Deployment"],
  link: "",
  outcome: "Customers pick a service, enter each dog's details, choose a day from a calendar showing live availability, and pay a £10 deposit through Stripe Checkout to confirm, with the balance paid on the day. Walks are booked into published set times and shared with other clients' dogs up to four in total. Walks are an hour but reserve an additional 30 minutes before and after for handovers. Day care is booked as a drop-off and pick-up pair, for up to eight hours. Boarding runs on nights set by admin with handovers chosen from available handover hours on respective days. Customer driven handovers run throughout admin set daycare availability ranges, or boarding handover hours. Admin driven handovers run when they are in the respective range for their service as well as a collection availability range. Collections reserve 15 minutes before and after. For each booking the customer chooses who performs handover from admin set availability. Postcodes are geocoded through postcodes.io to work out the distance, with collection free inside a 2 mile radius. Guests verify their email with a one-time code, and registered clients have their details pre-filled. Abandoned checkouts release their slot after thirty minutes. Emails are fired on respective triggers: Order confirmation, refund, appointment cancelation, reschedule, reminder, contact form submission, dormancy warning, admin booking notification and otp. The admin panel runs the business. A month is drafted and then published in one action, with tabs for walks, day care, boarding, and a read-only view of a whole day across every service. Availability can be added, closed, reopened, deleted or have its times edited. Availability slots with bookings can’t be deleted or edited to not cover any bookings but they can be closed. Each day shows what it contains: the dogs on each walk, who is arriving and leaving and when, who is driving each leg, and how many dogs are sleeping over. The admin can book clients in by hand with no deposit, which creates whatever availability the booking needs while still refusing anything that would clash. They can reschedule, cancel or refund any booking and read the full record of every answer a customer gave. They can edit the site's content, services, prices, gallery and contact details without touching code. Built with GDPR-compliant data handling: a full privacy notice, consent capture, self-serve account deletion, and automated retention that deletes bookings six years after the stay, purges unverified sign-ups after thirty days, and deletes dormant accounts after two years, never before their booking history has expired. Deployed serverlessly on Netlify with a Neon Postgres database.",
  desc: "A live booking website for dog walking, day care and boarding, where three services and a one-person collection round all compete for the same hours and none of them can be allowed to collide. It includes an admin panel to manage availability, bookings and site content.",
  overview: "By far the most complicated booking system I've built. Where a normal booking site checks whether a slot is free, this one has to resolve three services that coincide with each other, all provided by one person. Group and solo walks run at set published times; day care runs between an opening and closing time chosen per day; boarding runs across nights, with handover hours set per calendar day. Either leg of a booking can be driven by the admin or handled by the dog owner, so every booking also places up to two collection or drop-off jobs into the day. A collection must sit inside a published collection window. Each of those services reserves real time. A day care drop-off can't be booked over a walk, a walk can't be published over a booked collection, and two handovers can't be at the door at once. Capacity is layered on top and kept separate: a group walk caps at four dogs, the house caps at three at any moment across day care and boarding, and walk dogs never count against the house limit. Booking is race-safe. Every path runs inside a single database transaction that locks every day the booking touches, so two people booking at the same moment are handled one at a time. Overlapping handovers are refused by the database itself, so the same time can never be claimed twice even under true concurrent load. The whole engine is covered by an automated suite of over 200 assertions, including concurrency tests run against a real PostgreSQL instance with genuinely parallel transactions.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres, connection pooling), PostgreSQL advisory locks and GiST exclusion constraints (concurrency safety), Stripe (Checkout, webhooks, refunds), JWT auth (jose) with bcryptjs password hashing and OTP email verification, Brevo (transactional email, domain-verified sending), Cloudinary (image hosting), postcodes.io (UK postcode geocoding and distance calculation), Netlify (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), GitHub Actions (scheduled cron for reminder emails and data-retention sweep), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
},
{
  id: "sct", slug: "Stroud Complementary Therapies",
  name: "Stroud Complementary Therapies", category: "Business Project", year: "2026",
  desc: "A live appointment booking website for a complementary therapy practice, with deposit payments and an admin panel the owner uses to manage bookings, availability and site content.",
  image: `${BASE}/images/502.png`,
  images: range(502, 559),
  link: "https://www.stroudcomplementarytherapies.com/",
  outcome: "Live appointment booking website for a real massage and reflexology practice. Customers choose one or more treatments to run back-to-back as a single appointment, pick a slot from a monthly calendar showing live availability, and pay a deposit through Stripe Checkout (card or digital wallet) to confirm. Guests verify their email with a one-time code; registered clients have their details pre-filled for faster rebooking. Checkout itself is race-safe: the slot is held by a database-level exclusion constraint the instant checkout starts, before payment, and released automatically after 30 minutes if unpaid, so two people can never end up holding the same slot even under true concurrent load. Bookings automatically deleted 7 years after the appointment. Account deletion available on request as well as automatic 2 year dormancy deletion with 23 month reminder. Unverified accounts automatically purged after 30 days and stale unpaid bookings automatically cleared. Daily automated retention sweep runs via scheduled cron with no manual action needed. The admin panel runs the whole business: generate a month's schedule in one click, add or remove availability windows (overlapping ones merge automatically), book clients in manually with no deposit, and reschedule, cancel or refund any appointment, with the respective email sent automatically. The owner also edits the site's content from the panel, including treatments and prices, the photo gallery and contact details, without touching code. Built with GDPR-compliant data handling: a full privacy notice, ICO registration, consent capture and account deletion. Deployed serverlessly on Netlify with a Neon Postgres database.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres, connection pooling), Stripe (Checkout, webhooks, refunds), JWT auth (jose) with bcryptjs password hashing, react-datepicker, Brevo (transactional email, domain-verified sending), Netlify (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), GitHub Actions (scheduled cron for reminder emails and daily data-retention sweep), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
  overview: "A complete, live booking system handling a real practice's appointments end to end, from first enquiry through to refund, with no manual intervention needed for a normal booking. The owner runs scheduling, payments and the site's content from one admin panel without touching code, and the database-level booking protection means the system can be trusted with real money and real customers' time. ",
  tags: ["Design", "Development", "Deployment"],
},




{
  id: "red", slug: "red",
  name: "Red Shop and Archive", category: "Business Project", year: "2026",
  desc: "A live portfolio and shop for an artist selling original paintings and prints, with vast admin options so the site can grow with the business.",  image: `${BASE}/images/PLACEHOLDER.png`,   // TODO: replace with real screenshot range once images are taken, e.g. range(600, 640)
  image: `${BASE}/images/757.png`,
  images: range(700, 773),                              // TODO: range(START, END)
  link: "https://redartworks.co.uk/",
  overview: "Live portfolio and shop built to grow with the business, for an artist soon to start selling original paintings and prints. There are three site modes set in the admin panel: Portfolio (just a showcase, nothing for sale), Shop redirect (every shop link sends visitors to an external URL), and Full ecommerce (the complete in-site shop). Legal pages and shop-related features switch automatically with the chosen mode. There are multiple other features built to give the admin freedom in how they want to sell now and in the future.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres), Stripe (live account, Payment Intents, webhooks), custom JWT auth with bcryptjs and OTP email verification, Brevo (transactional email), Cloudinary (image hosting), postcodes.io (UK postcode and city validation), Netlify (serverless deployment, CI/CD), Cloudflare (domain, DNS), GitHub (version control, automatic deploys on push), GitHub Actions (scheduled cron for daily data-retention sweep), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
  outcome: "Customers browse and buy once the shop's switched on. Checkout reserves stock the moment it starts, not after payment, closing a race condition that could otherwise let two people buy the last unit of a one-of-a-kind piece at the same time. Guests verify their email with a one-time code before paying, and the postcode and city are checked against live UK data before an order goes through. Every form that collects data (contact, newsletter, registration, checkout) requires its own consent checkbox, checked on the server, not just the browser. Abandoned sign-ups delete themselves after 48 hours, unsubscribing from the newsletter is one click. Old orders past the 6-year retention period are anonymised automatically by a daily scheduled job. Dormant accounts with no order history are deleted after 2 years, accounts with real order history can be deleted manually by owner. The admin section has options: shop and archive content, products and stock, legal pages (update automatically with the site's mode; for full ecommerce changing legal pages has its own secondary switch), registration, contact form, newsletter, and business information (cascading-off fields depending on site mode) from one panel with no code changes needed. Built with GDPR-compliant data handling: a full privacy notice, consent capture at every point data is collected, self-serve password reset and account deletion. Deployed serverlessly on Netlify with a Neon Postgres database.",
  tags: ["Design", "Development", "Deployment"],
},

{
  id: "The Winning Post", slug: "WP",
  name: "The Winning Post", category: "Business Project", year: "2026",
  image: `${BASE}/images/801.png`,
  images: range(801, 820),
  tags: ["Design", "Development", "Deployment"],

desc: "A website for a Sutton pub, with an admin-managed events calendar.",   overview: "",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres), Netlify (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
  overview: "A website for a Sutton pub, covering opening hours, facilities, history and an admin-managed events calendar. ",
  outcome: "Multi-page informational pub website with a private admin panel for managing the events calendar and site-wide announcements without touching code. From the panel: add, edit or delete regular weekly events and one-off events, reset the calendar back to its default schedule, with expired events clearing themselves automatically, as well as set a site-wide banner message.",
},

{
  id: "kiwi-carpentry", slug: "kiwi-carpentry",
  name: "Quality Kiwi Carpentry", category: "Business Project", year: "2026",
  desc: "A live business website for a carpentry and construction company.",
  image: `${BASE}/images/298.png`,
  images: range(298, 327),
  link: "https://www.qualitykiwicarpentry.com/",
  overview: "Multi-page business website for a carpentry and construction company: twelve services each with its own detail page, a project gallery, company and legal pages (privacy, terms), and a contact form that sends enquiries by email through Resend with client-side image compression so customers can attach project photos.",
  software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, Resend (transactional email), client-side image compression, Netlify (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
  outcome: "A ready-to-trade website for a real carpentry business. Visitors can browse twelve services, view individual service pages and a project gallery, and read full legal pages. The contact form lets customers send an enquiry with their details, a preferred consultation date, and project photos, which are automatically resized in the browser before sending to stay within serverless payload limits, then delivered by email through Resend. All company details, services and contact information are structured to be updated easily. Built around real company information including registered company details and insurance, and deployed live on Netlify.",
  tags: ["Design", "Development", "Deployment"],
},

{
  id: "editportfolio", slug: "editportfolio",
  name: "Editable Portfolio", category: "Business Project", year: "2026",
  desc: "A fully editable portfolio platform with a hidden admin panel. Currently in use by a client.",
  image: `${BASE}/images/617.png`,  
  images: range(600, 633),
  link: "https://portfolio542.vercel.app",
  overview: "A fully editable portfolio platform with a hidden admin panel. Every section, page and project is managed through the panel. Currently in use by a client.",
  software: "TypeScript, Next.js 14 (Pages Router), React, Node.js, PostgreSQL, Neon (serverless Postgres), Cloudinary (image and file hosting), JWT auth (jose) with bcrypt-hashed access code, Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
  outcome: "A live portfolio that runs entirely off a private admin panel: site settings, home page sections and projects are all edited without touching code. Project pages can be laid out as tiles (case-study style, each with its own page) or as an image gallery with a lightbox. Deployed serverlessly on Vercel with a Neon Postgres database and Cloudinary-hosted media.",
  tags: ["Design", "Development", "Deployment"],
},

  { 
    id: "template-store", slug: "template-store",
    name: "Template Store", category: "Personal Project", year: "2026",
    desc: "A fully functional e-commerce platform set up in test mode.",
    image: `${BASE}/images/001.png`,
    images: range(1, 35
    ),
    link: "https://template-store-roan.vercel.app/",
    overview: "E-commerce platform: stock & orders database, admin control panel, order processing (cart → payment → fulfilment/refund), MFA, role-based auth, webhook-driven emails, race-safe atomic transactions, deployed serverlessly on Vercel with Neon Postgres, set up in test mode so on transaction users aren't charged and items aren't actually sold (account number: 4242 4242 4242 4242, expiry & CVC: any).",    
    software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, SQLite, Neon (serverless Postgres), Prisma ORM, SQL, Stripe (Payment Intents, webhooks, refunds), Clerk (custom sign-in, MFA, password reset, role-based admin), Resend (transactional email), Vercel, GitHub, HTML5, CSS3 Vercel (serverless deployment, CI/CD), Neon (serverless Postgres, connection pooling), GitHub (version control, automatic deploys on push), Stripe (Payment Intents, webhooks, refunds), Clerk (auth, MFA, role-based admin), Resend (transactional email), Prisma ORM (migrations, schema management), HTTPS/TLS, environment-based secret management",
    outcome: "A fully functional ecommerce site from browsing through to refund. Customers can sign up, sign in, browse and filter products by everything from price to colour, add to cart with live stock checks, and pay through Stripe checkout. Every order gets saved in the database, stock auto-decrements when payment clears, and confirmation emails go out automatically. The admin side lets me see every order, mark stuff as shipped, cancel and refund with one click (Stripe refund + stock restored automatically), and edit stock by hand. Cancelled orders trigger a refund email to the customer. Pending checkouts that never finish get cleaned up after 48 hours. Deployed live on Vercel with a serverless Postgres database. The only thing stopping it taking real money is the Stripe test keys, which is a two line swap when ready to go live.",
    tags: ["Design", "Development", "Deployment"],
  },
{
    id: "template-bookings", slug: "template-bookings",
    name: "Template Bookings", category: "Personal Project", year: "2026",
    desc: "A full appointment booking platform with payment processing and admin panels set up in test mode.",
    image: `${BASE}/images/201.png`,
    images: range(201, 229),
    link: "https://bookings-eta-pied.vercel.app/",
    overview: "Appointment booking platform: live availability calendar, Stripe deposit checkout, email verification, admin panel, one-click default schedule generator, add or remove availability windows, overlapping windows merged automatically, manual admin bookings with no deposit, refund or cancel, automated day-before reminders, deployed serverlessly on Vercel with Neon Postgres, set up in Stripe test mode so no real charges are taken (card: 4242 4242 4242 4242, expiry & CVC: any).",
    software: "TypeScript, Next.js 16 (App Router, Server Components), React 19, Node.js, PostgreSQL, Neon (serverless Postgres, connection pooling), Stripe (Checkout, webhooks, refunds), JWT auth with bcryptjs password hashing, Resend (transactional email), Vercel (serverless deployment, CI/CD), GitHub (version control, automatic deploys on push), GitHub Actions (free hourly cron for reminder email), HTML5, CSS3, HTTPS/TLS, environment-based secret management",
    outcome: "A complete booking site for service businesses. Customers register, verify their email, choose one or more services to be booked back-to-back as a single appointment, choose from a monthly calendar showing live availability slots, and pay a deposit. Confirmation, cancellation and day-before reminder emails fire automatically. The admin panel includes: option to generate a default monthly schedule in one click, add or remove individual availability windows (overlapping windows merge automatically), book clients in manually with no deposit, and refund or cancel any booking.",
    tags: ["Design", "Development", "Deployment"],
  },


  {
    id: "template", slug: "template",
    name: "Template", category: "Personal Project", year: "2026",
    desc: "A design template targeted towards service based businesses.",
    image: `${BASE}/images/101.png`,
    images: range(101, 115),
    link: "https://template-iota-topaz.vercel.app/",
    overview: "Multi-page website template built for service-based businesses.",
    software: "TypeScript, Next.js (App Router), React, Resend (transactional email), Vercel (serverless deployment, CI/CD), GitHub (version control), HTML5, CSS3",
    outcome: "A ready-to-deploy business website covering the  customer journey from browsing to enquiry. Visitors can browse services filtered by category, and submit a contact form that sends an email through Resend. All content (service titles, tags, gallery items, contact details) is structured to be swapped out with minimal effort, making it a practical starting point for any service based business.",
    tags: ["Design", "Development", "Deployment"],
  },
  ];
export default PROJECTS;