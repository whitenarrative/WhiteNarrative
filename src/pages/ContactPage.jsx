import useReveal from '../hooks/useReveal.js'
import { contactPage, site } from '../data/content.js'
import Icon from '../components/Icon.jsx'
import './ContactPage.css'

export default function ContactPage() {
  useReveal()

  return (
    <section className="contact-page" aria-label="Contact us">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{contactPage.eyebrow}</p>
          <h1 className="display">
            {contactPage.title[0]}
            <br />
            <em>{contactPage.title[1]}</em>
          </h1>
          <p className="section-sub">{contactPage.sub}</p>
        </div>

        <aside className="contact-page__details reveal" style={{ '--d': '0.08s' }}>
          <h2>{contactPage.detailsTitle}</h2>

          <ul>
            <li>
              <Icon name="whatsapp" size={17} strokeWidth={1.4} />
              <div>
                <span>WhatsApp</span>
                <a href={site.whatsappLink} target="_blank" rel="noreferrer">
                  {site.phone}
                </a>
              </div>
            </li>
            <li>
              <Icon name="mail" size={17} strokeWidth={1.4} />
              <div>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </li>
            <li>
              <Icon name="phone" size={17} strokeWidth={1.4} />
              <div>
                <span>Phone</span>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </div>
            </li>
            <li>
              <Icon name="pin" size={17} strokeWidth={1.4} />
              <div>
                <span>Studio</span>
                <p>{site.location}</p>
              </div>
            </li>
          </ul>

          <div className="contact-page__socials">
            <span>Follow Us</span>
            <div>
              {site.socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
