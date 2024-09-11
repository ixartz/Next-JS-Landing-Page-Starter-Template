import React, { useState } from 'react';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

interface ContactFormValues {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  message: string;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormValues>({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(`${formData.firstName} ${formData.lastName}`),
      email: String(formData.email),
      message: String(formData.message),
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Message sent successfully');
      setLoading(false);
      // reset the form
      setFormData({
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        message: '',
      });
    }
    if (!response.ok) {
      console.log('Error sending message');
      setLoading(false);
    }
  }

  return (
    <Background color="bg-primary-100">
      <Section>
        <form
          className="container rounded-lg bg-gray-900 px-10 py-8 text-white shadow-md"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-4 text-center text-2xl font-bold">
            Get a Free Quote
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex w-full items-center justify-center gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="frm-first"
                  className="mb-1 block text-sm font-medium"
                >
                  First Name (required)
                </label>
                <input
                  id="frm-first"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="frm-last"
                  className="mb-1 block text-sm font-medium"
                >
                  Last Name (required)
                </label>
                <input
                  id="frm-last"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-email"
                className="mb-1 block text-sm font-medium"
              >
                Email (required)
              </label>
              <input
                id="frm-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-phone"
                className="mb-1 block text-sm font-medium"
              >
                Phone
              </label>
              <input
                id="frm-phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="frm-message"
                className="mb-1 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="frm-message"
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex w-full justify-center">
              <button
                type="submit"
                disabled={loading}
                className="rounded-md bg-primary-600 p-3 font-semibold text-white hover:bg-primary-700"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Section>
    </Background>
  );
};

export default Contact;
