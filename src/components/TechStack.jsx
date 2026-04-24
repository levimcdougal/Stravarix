const techs = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS',
  'Framer Motion', 'Vercel', 'Shopify', 'WordPress', 'Webflow',
]

export default function TechStack() {
  return (
    <div className="tech-section">
      <span className="tech-label">Technologies We Master</span>
      <div className="tech-logos">
        {techs.map((t) => (
          <span key={t} className="tech-logo">{t}</span>
        ))}
      </div>
    </div>
  )
}
