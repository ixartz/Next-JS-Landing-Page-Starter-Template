import React, { useState } from 'react';

import { Background } from '@/background/Background';
import { Modal } from '@/feature/Modal';
import { Section } from '@/layout/Section';

interface ContactFormValues {
  communityName: string;
  communityPhone: string;
  communityAddress: string;
  numberOfUnits: string;
  propertyMgmtCompanyName: string;
  propertyMgrName: string;
  propertyMgrEmail: string;
  expectedStartDate: string;
  additionalComments: string;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormValues>({
    communityName: '',
    communityPhone: '',
    communityAddress: '',
    numberOfUnits: '',
    propertyMgmtCompanyName: '',
    propertyMgrName: '',
    propertyMgrEmail: '',
    expectedStartDate: '',
    additionalComments: '',
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
      ...formData,
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
      // Show modal upon successful form submission
      setIsModalOpen(true);
      // reset the form
      setFormData({
        communityName: '',
        communityPhone: '',
        communityAddress: '',
        numberOfUnits: '',
        propertyMgmtCompanyName: '',
        propertyMgrName: '',
        propertyMgrEmail: '',
        expectedStartDate: '',
        additionalComments: '',
      });
    }
    if (!response.ok) {
      console.log('Error sending message');
      setLoading(false);
    }
  }

  return (
    <Background color="bg-primary-100">
      <Section id="contact">
        <form
          className="container rounded-lg bg-gray-900 px-10 py-8 text-white shadow-md"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-4 text-center text-2xl font-bold">
            Get a Free Quote
          </h1>
          <p className="mb-4 text-center text-sm">
            Fields marked with <span className="text-red-500">*</span> are
            required.
          </p>
          <div className="flex flex-wrap gap-4 py-4">
            <div className="w-full">
              <label
                htmlFor="frm-community-name"
                className="mb-1 block text-sm font-medium"
              >
                Community Name <span className="text-red-500">*</span>
              </label>
              <input
                id="frm-community-name"
                type="text"
                name="communityName"
                value={formData.communityName}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-community-phone"
                className="mb-1 block text-sm font-medium"
              >
                Community Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="frm-community-phone"
                type="text"
                name="communityPhone"
                value={formData.communityPhone}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-community-address"
                className="mb-1 block text-sm font-medium"
              >
                Community Address <span className="text-red-500">*</span>
              </label>
              <input
                id="frm-community-address"
                type="text"
                name="communityAddress"
                value={formData.communityAddress}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-number-units"
                className="mb-1 block text-sm font-medium"
              >
                Number of Units <span className="text-red-500">*</span>
              </label>
              <input
                id="frm-number-units"
                type="number"
                name="numberOfUnits"
                value={formData.numberOfUnits}
                onChange={handleChange}
                required
                min={0} // Ensures non-negative values
                step={1} // Allows only integer increments
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-property-mgmt-company-name"
                className="mb-1 block text-sm font-medium"
              >
                Property Management Company Name{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="frm-property-mgmt-company-name"
                type="text"
                name="propertyMgmtCompanyName"
                value={formData.propertyMgmtCompanyName}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-property-mgr-name"
                className="mb-1 block text-sm font-medium"
              >
                Property Manager Name <span className="text-red-500">*</span>
              </label>
              <input
                id="frm-property-mgr-name"
                type="text"
                name="propertyMgrName"
                value={formData.propertyMgrName}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-property-mgr-email"
                className="mb-1 block text-sm font-medium"
              >
                Property Manager Email <span className="text-red-500">*</span>
              </label>
              <input
                id="frm-property-mgr-email"
                type="email"
                name="propertyMgrEmail"
                value={formData.propertyMgrEmail}
                onChange={handleChange}
                onBlur={(e) => {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(e.target.value)) {
                    alert('Please enter a valid email address.');
                  }
                }}
                required
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-expected-start-date"
                className="mb-1 block text-sm font-medium"
              >
                Expected Start Date <span className="text-red-500">*</span>
              </label>
              <input
                id="frm-expected-start-date"
                type="date"
                name="expectedStartDate"
                value={formData.expectedStartDate}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="frm-additional-comments"
                className="mb-1 block text-sm font-medium"
              >
                Additional Comments
              </label>
              <textarea
                id="frm-additional-comments"
                rows={4}
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
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
        </form>

        {/* Modal Component */}
        <Modal
          isOpen={isModalOpen}
          message="Your message has been successfully sent!"
          onClose={() => setIsModalOpen(false)} // Close the modal when the user clicks close
        />
      </Section>
    </Background>
  );
};

export default Contact;
