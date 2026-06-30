import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <p className="contact-text">
          We'd love to hear from you! If you have any questions, feedback, or
          suggestions, feel free to get in touch with us.
        </p>

        <div className="contact-info">
          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Karachi, Pakistan</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@reactshop.com</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+92 300 1234567</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="5"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}