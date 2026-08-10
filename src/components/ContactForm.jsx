import { useState } from 'react'
import { contactPage, site } from '../data/content.js'
import Icon from './Icon.jsx'
import './ContactForm.css'

const initial = { name: '', email: '', phone: '', type: contactPage.projectTypes[0], message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initial)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `New enquiry — ${form.type}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      `Project type: ${form.type}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label>
          Name
          <input type="text" required value={form.name} onChange={update('name')} placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" required value={form.email} onChange={update('email')} placeholder="you@studio.com" />
        </label>
      </div>

      <div className="contact-form__row">
        <label>
          Phone <span>(optional)</span>
          <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 00000 00000" />
        </label>
        <label>
          Project Type
          <select value={form.type} onChange={update('type')}>
            {contactPage.projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your project — timeline, budget, references, anything that helps."
        />
      </label>

      <button type="submit" className="btn btn--gold">
        Send Message
        <Icon name="arrowUpRight" size={15} strokeWidth={2} />
      </button>
      <p className="contact-form__note">Opens your email client with this message pre-filled.</p>
    </form>
  )
}
