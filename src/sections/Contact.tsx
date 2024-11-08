import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  //

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_z5y406s",
        "template_58alf43",
        {
          from_name: form.name,
          to_name: "Minja",
          from_email: form.email,
          to_email: "cuculaminja@proton.me",
          message: form.message,
        },
        "RSuGwcoqr0Zx0xhvA",
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
    }
  }

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 h-full w-full"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="mt-1 text-sm text-white-600">
            Whether you're looking to build a new website or improve your
            exisiting platform, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col space-y-2"
          >
            <label className="space-y-1">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-1">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-1">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input"
                placeholder="Hi, I wanna give you a job..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
