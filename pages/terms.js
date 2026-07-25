const SECTION = { marginBottom: "2rem" };
const H2 = { fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, marginBottom: "0.6rem" };
const P = { fontSize: "0.92rem", lineHeight: 1.7, color: "var(--muted)" };

export default function Terms() {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Terms of Use
      </h1>
      <p style={{ ...P, marginBottom: "3rem" }}>Last updated: 2026</p>

      <div style={SECTION}>
        <h2 style={H2}>About this site</h2>
        <p style={P}>
          This website is a personal portfolio belonging to Harry Miller, used to showcase development
          and design work. It is not a commercial service and does not sell anything or process payments
          directly on this site.
        </p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Ownership and use of content</h2>
        <p style={P}>
          All code, designs, text, and project write-ups on this site are my own work and remain my
          property unless stated otherwise. You&rsquo;re welcome to view and reference this site for
          personal or professional interest, but please don&rsquo;t copy, republish, or reuse the content,
          code, or project write-ups without asking first. Get in touch if you&rsquo;d like to use or
          discuss anything shown here.
        </p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Client and third-party projects</h2>
        <p style={P}>
          Some projects shown here were built for real clients or businesses. Screenshots, descriptions,
          and outcomes are shared to demonstrate my work and are accurate to the best of my knowledge at
          the time of writing. Any business names, logos, or trademarks shown belong to their respective
          owners. Links to live third-party sites are provided for reference; I&rsquo;m not responsible for
          their content or availability, and a link doesn&rsquo;t imply their ongoing endorsement of this
          portfolio.
        </p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>No warranty</h2>
        <p style={P}>
          This site and its content are provided &ldquo;as is&rdquo;, without any warranty of accuracy,
          completeness, or fitness for a particular purpose. Project outcomes described here reflect what
          was built at the time; live linked projects may have changed since.
        </p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Liability</h2>
        <p style={P}>
          To the extent permitted by law, I&rsquo;m not liable for any loss or damage arising from your
          use of this site or reliance on anything it contains. Nothing here limits liability that
          cannot be excluded under UK law.
        </p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Changes to these terms</h2>
        <p style={P}>
          These terms may be updated from time to time as the site changes. Continued use of the site
          after changes means you accept the updated terms.
        </p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Cookies</h2>
        <p style={P}>
          This site doesn&rsquo;t use cookies. The only thing saved on your device is your light/dark
          theme preference, stored using your browser&rsquo;s local storage rather than a cookie. This is
          used solely to remember your choice for your next visit and isn&rsquo;t shared with anyone or
          used for tracking. You can clear it at any time by clearing your browser&rsquo;s site data.
        </p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Governing law</h2>
        <p style={P}>These terms are governed by the laws of England and Wales.</p>
      </div>

      <div>
        <h2 style={H2}>Contact</h2>
        <p style={P}>
          Questions about these terms, or about anything shown on this site? Email me at{" "}
          <a
            href="mailto:harrytmiller42@gmail.com"
            style={{ color: "var(--text)", textDecoration: "underline" }}
          >
            harrytmiller42@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}
