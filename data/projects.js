const PROJECTS = [
  {
    id: "template", slug: "template",
    name: "Template", category: "Business Project", year: "2026",
    desc: "A design template targeted towards service based businesses.",
    image: "/portfolio2/images/101.png",
    link: "https://template-pdi19gjek-s-projects14.vercel.app/",
    overview: "Multi-page website template built for service-based businesses.",
    software: "TypeScript, Next.js (App Router), React, Resend (transactional email), Vercel (serverless deployment, CI/CD), GitHub (version control), HTML5, CSS3",
    outcome: "A ready-to-deploy business website covering the  customer journey from browsing to enquiry. Visitors can browse services filtered by category, and submit a contact form that sends an email through Resend. All content (service titles, tags, gallery items, contact details) is structured to be swapped out with minimal effort, making it a practical starting point for any service based business.",
    tags: ["Design", "Development", "Deployment"],
  },
  {
    id: "template-store", slug: "template-store",
    name: "Template Store", category: "Business Project", year: "2026",
    desc: "A fully functional e-commerce platform set up in test mode.",
    image: "/portfolio2/images/001.png",
    link: "https://template-store-roan.vercel.app/",
    overview: "E-commerce platform: stock & orders database, admin control panel, order processing (cart → payment → fulfilment/refund), MFA, role-based auth, webhook-driven emails, race-safe atomic transactions, deployed serverlessly on Vercel with Neon Postgres, set up in test mode so on transaction users aren't charged and items aren't actually sold (account number: 4242 4242 4242 4242, cvs & date: any)",
    software: "TypeScript, Next.js 16 (App Router, Server Components, Turbopack), React 19, Node.js, PostgreSQL, SQLite, Neon (serverless Postgres), Prisma ORM, SQL, Stripe (Payment Intents, webhooks, refunds), Clerk (custom sign-in, MFA, password reset, role-based admin), Resend (transactional email), Vercel, GitHub, HTML5, CSS3 Vercel (serverless deployment, CI/CD), Neon (serverless Postgres, connection pooling), GitHub (version control, automatic deploys on push), Stripe (Payment Intents, webhooks, refunds), Clerk (auth, MFA, role-based admin), Resend (transactional email), Prisma ORM (migrations, schema management), HTTPS/TLS, environment-based secret management",
    outcome: "A fully functional ecommerce site from browsing through to refund. Customers can sign up, sign in, browse and filter products by everything from price to colour, add to cart with live stock checks, and pay through Stripe checkout. Every order gets saved in the database, stock auto-decrements when payment clears, and confirmation emails go out automatically. The admin side lets me see every order, mark stuff as shipped, cancel and refund with one click (Stripe refund + stock restored automatically), and edit stock by hand. Cancelled orders trigger a refund email to the customer. Pending checkouts that never finish get cleaned up after 48 hours. Deployed live on Vercel with a serverless Postgres database. The only thing stopping it taking real money is the Stripe test keys, which is a two line swap when ready to go live.",
    tags: ["Design", "Development", "Deployment"],
  },
];

export default PROJECTS;