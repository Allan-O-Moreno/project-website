export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>Have a project in mind? Let’s chat.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label>
          Message
          <textarea placeholder="Tell us about your idea" rows={5} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

