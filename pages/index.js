import Link from "next/link";
import PROJECTS from "../data/projects";
import s from "../styles/Home.module.css";

const ARCHIVE_URL = "https://harrytmiller.github.io/portfolio/";

const CERTS = [
  { name: "Azure Fundamentals", code: "AZ-900", issuer: "Microsoft", year: "2025", file: "/portfolio2/certificates/AZ-900.pdf" },
  { name: "Azure Administrator", code: "AZ-104", issuer: "Microsoft", year: "2025", file: "/portfolio2/certificates/AZ-104.pdf" },
  { name: "AWS Cloud Practitioner", code: "CLF-C02", issuer: "Amazon Web Services", year: "2025", file: "/portfolio2/certificates/CLF-C02.pdf" },
];

const Y2_MODULES = [
  ["User Experience Design and Implementation", "70%"],
  ["Software Engineering Theory and Practice",  "78%"],
  ["3D Computer Graphics and Animation",        "78%"],
  ["Operating Systems and Internetworking",     "81%"],
  ["Database Principles",                       "70%"],
  ["Business Information Systems Security",     "70%"],
];

const Y3_MODULES = [
  ["Artificial Intelligence",          "75%"],
  ["Advanced Networks",                "75%"],
  ["Security and Cryptography",        "80%"],
  ["Usability Testing",                "64%"],
  ["Individual Project (Engineering)", "65%"],
];

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.wrap}>

        {/* ── HERO ── */}
        <div className={s.hero}>
          <h1 className={s.name}>Harry<br />Miller</h1>
          <div className={s.side}>
            <p className={s.bio}>
              Designer and developer building considered digital products.
              Currently based in London — open to freelance.
            </p>
            <div className={s.details}>
              <div className={s.detail}><span className={s.detailLabel}>Status</span><span className={s.detailVal}>Available for freelance</span></div>
              <div className={s.detail}><span className={s.detailLabel}>Location</span><span className={s.detailVal}>London, UK</span></div>
              <div className={s.detail}><span className={s.detailLabel}>Studying</span><span className={s.detailVal}>MSc Applied AI, Warwick — Sep 2026</span></div>
              <div className={s.detail}>
                <span className={s.detailLabel}>GitHub</span>
                <a href="https://github.com/harrytmiller" target="_blank" rel="noopener noreferrer" className={s.detailLink}>harrytmiller</a>
              </div>
            </div>
            <a href="/portfolio2/CV.pdf" target="_blank" rel="noopener noreferrer" className={s.cvBtn}>
              View CV
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
          </div>
        </div>

        {/* ── ABOUT ── */}
        <div>
          <div className={s.sectionHeader}><span className={s.sectionLabel}>About</span><div className={s.sectionLine} /></div>
          <div className={s.aboutGrid}>
            <div className={s.aboutText}>
              <p className={s.aboutP}>My name is Harry Tiger Miller, I am 22 years old, and I recently graduated with First Class Honours in Computing from the University of Portsmouth. I&rsquo;m passionate about computing and expressing creativity through developing projects. I like turning ideas into reality by combining technical skills with creative thinking. I also enjoy complex problem solving as it allows for critical thinking, as well as the satisfaction of finding a solution. I believe in continuous learning and personal development. I like to challenge myself both academically and personally to reach my full potential.</p>
              <p className={s.aboutP}>My degree is broad and covers different topics such as: usability, user interface design, security, software engineering, 3D design and animation, artificial intelligence, networks and databases (some of which are covered in this portfolio). I can use programming languages: Python, Java, JavaScript, TypeScript, Dart, HTML, CSS, and SQL. I have made multiple applications, the most relevant of which are accessible through this portfolio. It has been a goal of mine to achieve as highly as I am capable of at university. This includes both learning and understanding academic knowledge to score highly in exams, and applying what I know to produce high quality courseworks.</p>
              <p className={s.aboutP}>My academic success reflects my commitment to excellence. I&rsquo;m excited to apply both my technical skills and creative perspective to meaningful projects that challenge me to grow.</p>
              <p className={s.aboutNote}>Please note: I have visible tattoos including on my face, neck, and hands, which are part of my personal expression and authentic identity.</p>
            </div>
            <div className={s.photoWrap}>
              <img src="/portfolio2/images/83.jpg" alt="Harry Miller" style={{ width:"100%", height:"auto", display:"block", borderRadius:"4px" }} />
            </div>
          </div>
        </div>

        {/* ── ACADEMICS ── */}
        <div>
          <div className={s.sectionHeader}><span className={s.sectionLabel}>Academics</span><div className={s.sectionLine} /></div>
          <div className={s.acadDegree}>BSc Computing — University of Portsmouth</div>
          <div className={s.acadSummary}>
            {[["1st","Degree Class"],["4.00","Overall GPA"],["74.4%","Year 2 Average"],["70.0%","Year 3 Average"]].map(([val, label]) => (
              <div key={label} className={s.acadStat}>
                <div className={s.acadStatVal}>{val}</div>
                <div className={s.acadStatLabel}>{label}</div>
              </div>
            ))}
          </div>
          <div className={s.acadTables}>
            <div className={s.acadTable}>
              <div className={s.acadTableTitle}>Year 2 Modules</div>
              {Y2_MODULES.map(([mod, grade]) => (
                <div key={mod} className={s.acadRow}>
                  <span className={s.acadMod}>{mod}</span>
                  <span className={s.acadGrade}>{grade}</span>
                </div>
              ))}
            </div>
            <div className={s.acadTable}>
              <div className={s.acadTableTitle}>Year 3 Modules</div>
              {Y3_MODULES.map(([mod, grade]) => (
                <div key={mod} className={s.acadRow}>
                  <span className={s.acadMod}>{mod}</span>
                  <span className={s.acadGrade}>{grade}</span>
                </div>
              ))}
            </div>
          </div>
          <a href="/portfolio2/Transcript.pdf" target="_blank" rel="noopener noreferrer" className={`${s.cvBtn} ${s.cvBtnOutline}`}>
            View Transcript
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
        </div>

        {/* ── CERTIFICATIONS ── */}
        <div>
          <div className={s.sectionHeader}><span className={s.sectionLabel}>Certifications</span><div className={s.sectionLine} /></div>
          <div className={s.certGrid}>
            {CERTS.map((cert) => (
              <div key={cert.code} className={s.certCard}>
                <div className={s.certCode}>{cert.code}</div>
                <div className={s.certName}>{cert.name}</div>
                <div className={s.certIssuer}>{cert.issuer} · {cert.year}</div>
                <div className={s.certNote}>Completed on first attempt</div>
                <a href={cert.file} target="_blank" rel="noopener noreferrer" className={s.certBtn}>
                  View Certificate
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── PORTFOLIO OVERVIEW ── */}
        <div>
          <div className={s.sectionHeader}><span className={s.sectionLabel}>Portfolio</span><div className={s.sectionLine} /></div>
          <div className={s.overviewGrid}>
            <div className={s.overviewCard}>
              <Link href="/business" className={s.overviewCardHead}>
                Business <span className={s.overviewArrow}>→</span>
              </Link>
              <div className={s.overviewSub}>Client work</div>
              <div className={s.overviewYear}>Projects</div>
              {PROJECTS.filter((p) => p.category === "Business Project").map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`} className={s.overviewItemLink}>
                  {p.name} <span className={s.overviewItemArrow}>→</span>
                </Link>
              ))}
            </div>
            <div className={s.overviewCard}>
              <Link href="/masters" className={s.overviewCardHead}>
                Masters <span className={s.overviewArrow}>→</span>
              </Link>
              <div className={s.overviewSub}>MSc Applied AI, Warwick — Sep 2026</div>
              <div className={s.overviewYear}>Projects</div>
              <div className={`${s.overviewItem} ${s.overviewItemDim}`}>Added as completed</div>
            </div>
            <div className={s.overviewCard}>
              <Link href="/personal" className={s.overviewCardHead}>
                Personal <span className={s.overviewArrow}>→</span>
              </Link>
              <div className={s.overviewSub}>Outside of client work</div>
              <div className={s.overviewYear}>Projects</div>
              {PROJECTS.filter((p) => p.category === "Personal Project").map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`} className={s.overviewItemLink}>
                  {p.name} <span className={s.overviewItemArrow}>→</span>
                </Link>
              ))}
            </div>
            <div className={s.overviewCard}>
              <a href={ARCHIVE_URL} target="_blank" rel="noopener noreferrer" className={s.overviewCardHead}>
                Archive <span className={s.overviewArrow}>↗</span>
              </a>
              <div className={s.overviewSub}>University &amp; post-uni work</div>
              <div className={s.overviewYear}>Year 2</div>
              <a href="https://harrytmiller.github.io/portfolio/#/Design" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>3D Design &amp; Animation <span className={s.overviewItemArrow}>↗</span></a>
              <a href="https://harrytmiller.github.io/portfolio/#/Setup" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>Software Engineering <span className={s.overviewItemArrow}>↗</span></a>
              <div className={s.overviewYear}>Year 3</div>
              <a href="https://harrytmiller.github.io/portfolio/#/Dissertation" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>Dissertation <span className={s.overviewItemArrow}>↗</span></a>
              <a href="https://harrytmiller.github.io/portfolio/#/Ai" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>Artificial Intelligence <span className={s.overviewItemArrow}>↗</span></a>
              <div className={s.overviewYear}>Reports</div>
              <a href="https://harrytmiller.github.io/portfolio/#/WriteUps" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>Academic write-ups &amp; studies <span className={s.overviewItemArrow}>↗</span></a>
              <div className={s.overviewYear}>Post Uni</div>
              <a href="https://harrytmiller.github.io/portfolio/#/AiImageGen" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>AI Image Generator <span className={s.overviewItemArrow}>↗</span></a>
              <a href="https://harrytmiller.github.io/portfolio/#/AiModelGen" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>AI Model Generator <span className={s.overviewItemArrow}>↗</span></a>
              <a href="https://harrytmiller.github.io/portfolio/#/Chess" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>AI Chess Game <span className={s.overviewItemArrow}>↗</span></a>
              <a href="https://harrytmiller.github.io/portfolio/#/Project1" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>Task Manager <span className={s.overviewItemArrow}>↗</span></a>
              <a href="https://harrytmiller.github.io/portfolio/#/Project2" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>Application Tracker <span className={s.overviewItemArrow}>↗</span></a>
              <a href="https://harrytmiller.github.io/portfolio/#/Project3" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>API Intel <span className={s.overviewItemArrow}>↗</span></a>
              <a href="https://harrytmiller.github.io/portfolio/#/MessageApp" target="_blank" rel="noopener noreferrer" className={s.overviewItemLink}>Message App <span className={s.overviewItemArrow}>↗</span></a>
            </div>
          </div>
          <p style={{fontSize:"0.75rem",color:"var(--muted)",fontWeight:300,lineHeight:1.7,marginTop:"1.5rem",letterSpacing:"0.02em"}}>I built a new portfolio as my recent work was better than my portfolio. Switching from Flutter to Next.js helped me to grow as a developer, and with a Masters and a pipeline of projects ahead, now felt like the right time for a cleaner foundation. I still believe the projects in my archive hold value and demonstrate my journey.</p>
        </div>

        {/* ── SELECTED WORK ── */}
        <div className={s.work}>
          <div className={s.sectionHeader}><span className={s.sectionLabel}>Selected Work</span><div className={s.sectionLine} /></div>
          <div className={s.grid}>
            {PROJECTS.filter((p) => p.id !== "template").slice(0, 6).map((p) => (
              <Link key={p.id} href={`/projects/${p.slug}`} className={s.card}>
                <div className={s.cardThumb}>
                  {p.image ? <img src={p.image} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} /> : "Image Placeholder"}
                </div>
                <div className={s.cardBody}>
                  <div className={s.cardCat}>{p.category} · {p.year}</div>
                  <div className={s.cardName}>{p.name}</div>
                  <div className={s.cardDesc}>{p.desc}</div>
                </div>
                <div className={s.cardFoot}>
                  <span>{p.tags.join(" · ")}</span>
                  <span className={s.cardLink}>View project →</span>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}