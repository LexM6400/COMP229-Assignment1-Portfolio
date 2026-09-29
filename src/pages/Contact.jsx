import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  message: "",
};

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // The form data is captured here until a back-end service is connected.
    console.log("Portfolio contact form submission:", formData);
    window.alert("Thank you! Your message has been recorded.");
    setFormData(initialFormData);
    navigate("/");
  }

  return (
    <main className="page contact-page">
      <header className="page-header">
        <h1>Contact Me</h1>
        <p>In need of a 2D project collaboration or Video Editor? Contact Me</p>
      </header>

      <div className="contact-layout">
        <aside className="contact-panel" aria-label="Contact information">
          <h2>Contact Information</h2>
          {}
          <p><strong>Email:</strong>{" "}<a href="mailto:amoral20@my.centennialcollege.ca"></a>amoral20@my.centennialcollege.ca</p>
          <p><strong>Location:</strong> Scarborough, Ontario</p>
          <p><strong>Availability:</strong> 2D Projects and Video Editting Projects </p>
        </aside>

        <section className="contact-form-section">
          <h2>Send a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="firstName">
                First Name
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label htmlFor="lastName">
                Last Name
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>

            <label htmlFor="contactNumber">
              Contact Number
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="email">
              Email Address
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>

            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </label>

            <button className="button" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
