const items = [
  'Web Design', 'Web Hosting', 'Google Ads', 'Facebook Ads', 'Instagram Ads',
  'Google Business Profile', 'Booking Services', 'Performance', 'Development', 'Branding',
  'Web Design', 'Web Hosting', 'Google Ads', 'Facebook Ads', 'Instagram Ads',
  'Google Business Profile', 'Booking Services', 'Performance', 'Development', 'Branding',
]

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            <span>✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
