import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const validateField = (name: string, value: string): boolean => {
    switch (name) {
      case "name":
        return /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(value); // Valid name
      case "phone":
        return /^\+?[0-9\s\-]+$/.test(value); // Valid phone number
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Valid email
      case "message":
        return value.length >= 20; // Valid message length
      default:
        return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isValid = validateField(name, value);
    setErrors({ ...errors, [name]: !isValid });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-xl shadow-yellow-500/50">
        <form
          className="flex flex-wrap justify-between gap-4 mb-4"
          onSubmit={handleSubmit}
        >
          {/* Input Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex-grow px-6 py-3 bg-gray-300 text-black rounded focus:outline-none hover:bg-gray-400 ${
              errors.name ? "border-2 border-red-500" : ""
            }`}
            required
          />

          {/* Input Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex-grow px-6 py-3 bg-gray-300 text-black rounded focus:outline-none hover:bg-gray-400 ${
              errors.phone ? "border-2 border-red-500" : ""
            }`}
            required
          />

          {/* Input Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex-grow px-6 py-3 bg-gray-300 text-black rounded focus:outline-none hover:bg-gray-400 ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
            required
          />

          {/* Input Message */}
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex-grow px-6 py-3 bg-gray-300 text-black rounded focus:outline-none hover:bg-gray-400 ${
              errors.message ? "border-2 border-red-500" : ""
            }`}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 self-stretch"
          >
            CONTACT US
          </button>
        </form>

        {/* Contact Information with image */}
        <div className="flex items-start justify-between">
          <ul className="text-left text-black text-xl font-normal">
            <li className="mb-2">
              Email:{" "}
              <a href="mailto:sansaniva357@gmail.com" className="text-blue-600">
              sansaniva357@gmail.com
              </a>
            </li>
            <li className="mb-2">Phone: +34 123 456 789</li>
            <li className="mb-2">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/IvánSánchezSánchez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                https://www.linkedin.com/IvánSánchezSánchez
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default ContactForm;
