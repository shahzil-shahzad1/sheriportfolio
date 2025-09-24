"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "@/lib/data";
import Image from "next/image"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill out all fields!");
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      );

      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#0E0E0F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#FF3B30] mx-auto mt-2 rounded-full" />
          <p className="text-[#B3B3B3] mt-4 text-base sm:text-lg">
            Let&apos;s discuss how we can work together on your next project
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FF3B30]">
              Contact Information
            </h3>
            <p className="text-[#B3B3B3] mb-6 text-sm">
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you have a question or just want to say hi, feel
              free to reach out!
            </p>

            <div className="space-y-4 text-sm">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111111fa] p-4 rounded-lg border border-[#222222] transition-all duration-200 hover:-translate-y-[2px]"
                >
                  <strong className="flex gap-2 mb-1 text-[#FF3B30]">
                    <Image src={`${item.icon}`} height={20} width={20} alt={`${item.icon}`} className="invert" />
                    {item.label}
                  </strong>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="ml-6 text-white hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="ml-6 text-white">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#111111fa] p-8 rounded-lg border border-[#222222]">
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-3 text-lg text-[#FF3B30]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#030303] text-white p-3 rounded-md border border-[#222222] focus:outline-none focus:ring-2 focus:ring-[#fc2f23] placeholder-gray-500"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-3 text-lg text-[#FF3B30]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#030303] text-white p-3 rounded-md border border-[#222222] focus:outline-none focus:ring-2 focus:ring-[#fc2f23] placeholder-gray-500"
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-3 text-lg text-[#FF3B30]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#030303] text-white p-3 rounded-md border border-[#222222] focus:outline-none focus:ring-2 focus:ring-[#fc2f23] placeholder-gray-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-3 text-lg text-[#FF3B30]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#030303] text-white p-3 rounded-md border border-[#222222] focus:outline-none focus:ring-2 focus:ring-[#fc2f23] placeholder-gray-500"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                className="bg-[#FF3B30] text-white font-medium px-6 py-2 rounded shadow-lg transition hover:bg-[#fc2f23] cursor-pointer"
              >
                ➤ SEND MESSAGE
              </button>

              {submitted && (
                <p className="text-green-400 mt-4 text-sm">
                  ✅ Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
