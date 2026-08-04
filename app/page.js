import Link from 'next/link';
import Image from 'next/image';

const caseStudies = [
  {
    id: 'client-holdings',
    title: 'Client Holdings: Surfacing client data that supports financial health, tax, and risk exposure',
    image: '/clientholdings-image.png',
    tags: ['Fintech', 'Data Dashboard', 'B2B'],
    href: '/work/client-holdings',
    featured: true,
  },
  {
    id: 'restrictions',
    title: 'Restrictions: new features with a new streamlined flow',
    image: '/restrictions-image.png',
    tags: ['Workflow', 'B2B'],
    href: '/work/restrictions',
    featured: false,
  },
  {
    id: 'self-service-metrics',
    title: 'Providing clients with their ESPP metrics on a self-service platform',
    image: '/selfservicemetrics-image.png',
    tags: ['Data Dashboard', 'Fintech', 'B2B'],
    href: '/work/self-service-metrics',
    featured: false,
  },
];

const experience = [
  {
    role: 'Product Designer',
    company: '@ BNY (Bank of New York)',
    date: 'Present',
    tags: ['Fintech', 'Wealth Management'],
    bullets: [
      'Led design for high-stakes workflows including New Account Opening and Money Movement, streamlining processes critical to advisor and client trust',
      "Designed the client holdings, a high-traffic page, giving advisors a single view into a client's financial health, risk exposure, and tax planning needs",
      'Replacing fragmented, multi-system lookups with one streamlined page',
    ],
  },
  {
    role: 'Lead Product Designer',
    company: '@ Carver Edison',
    date: '2022 – 2024',
    tags: ['Fintech', 'ESPP', 'Equity'],
    bullets: [
      'Owned the enrollment experience end-to-end, building functional requirements to scale for a growing client base',
      'Increased conversion rates by revamping information architecture and content strategy, breaking through prospect confusion',
      'Built an enrollment metrics dashboard, increasing client satisfaction and reducing internal effort by giving public company finance teams the data points needed for their SEC financial reports; met with immediate positivity from stakeholders',
    ],
  },
  {
    role: 'UX Designer',
    company: '@ Tempus Technologies',
    date: '2020 – 2022',
    tags: ['Fintech', 'Payments', 'Health'],
    bullets: [
      'Led all product design initiatives across the firm, building white-label payment solutions across web, point-of-sale, and terminal mediums for healthcare, manufacturing, food & beverage, and other industries',
      'Designed a custom healthcare application for meal planning across health cohorts, integrating the payment system directly into the experience',
      'Partnered closely with the CEO and Head of Sales to create prototyped design proposals, increasing RFP win rates',
      'Conducted accessibility audits across the product suite',
    ],
  },
];

export default function Home() {
  const featuredCard = caseStudies.find((c) => c.featured);
  const secondaryCards = caseStudies.filter((c) => !c.featured);

  return (
    <>
      {/* ── Hero / Nav ── */}
      <section className="hero">
        <div className="hero-strings" aria-hidden="true">
          <img src="/strings.png" alt="" />
        </div>
        <div className="container">
          {/* Navbar */}
          <nav className="nav">
            <a href="/" className="nav-logo">xtina.wong</a>
            <div className="nav-links">
              <a href="#work" className="nav-link">Work</a>
              <a href="/about" className="nav-link">About</a>
            </div>
          </nav>

          {/* Hero copy */}
          <div className="hero-content">
            <h1 className="hero-title">
              I simplify complexity into solutions that feel{' '}
              <span className="gradient-word">effortless</span> to use.
            </h1>
            <div className="hero-meta">
              <p className="hero-subtitle">
                Senior Product Designer <span className="divider"> | </span> Currently at BNY (Bank of New York)
              </p>
              <div className="tags">
                <span className="tag">Fintech</span>
                <span className="tag">Health</span>
                <span className="tag">Systems</span>
                <span className="tag">B2B</span>
                <span className="tag">B2B2C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section id="work" className="work-section">
        <div className="container" style={{ paddingTop: '64px' }}>
          <p className="section-label">Featured Work</p>

          <div className="cards-grid">
            {/* Featured card */}
            <Link href={featuredCard.href} className="card card--featured">
              <div className="card-image">
                <img
                  className="card-image-bg"
                  src="/noisy-gradients.png"
                  alt=""
                  aria-hidden="true"
                />
                <img
                  className="card-image-main"
                  src={featuredCard.image}
                  alt={featuredCard.title}
                />
              </div>
              <div className="card-footer">
                <p className="card-title">{featuredCard.title}</p>
                {featuredCard.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </Link>

            {/* Secondary cards row */}
            <div className="cards-row">
              {secondaryCards.map((card) => (
                <Link key={card.id} href={card.href} className="card card--half">
                  <div className="card-image">
                    <img
                      className="card-image-bg"
                      src="/noisy-gradients.png"
                      alt=""
                      aria-hidden="true"
                    />
                    <img
                      className="card-image-main"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                  <div className="card-footer">
                    <p className="card-title">{card.title}</p>
                    {card.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="experience-section">
        <div className="container">
          <p className="section-label">Experience</p>
          <div className="experience-list">
            {experience.map((job, i) => (
              <div key={i} className="experience-item">
                <div className="experience-left">
                  <div className="experience-title-group">
                    <p className="experience-role">{job.role}</p>
                    <p className="experience-company">{job.company}</p>
                  </div>
                  <p className="experience-date">{job.date}</p>
                  <div className="tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="experience-right">
                  <ul className="experience-bullets">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <nav className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a
              href="https://www.linkedin.com/in/tina22"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:xtinalw@gmail.com"
              className="footer-link footer-link--button"
            >
              Email
            </a>
          </nav>
          <p className="footer-copy">Christina Wong 2026</p>
        </div>
      </footer>
    </>
  );
}
