import React, { useState } from "react";

import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "v69Swj83";

export const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [submitted, setSubmitted] = useState(false);

  const [eamil, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    await submit({ eamil, subject, message });
  };

  return (
    <div className="py-8 px-4 lg:py-16 md:p-16  mx-auto max-w-screen-md border rounded-3xl border-slate-200">
      {submitted ? (
        <span className="text-heliotrope-400 py-5">Thank you!</span>
      ) : (
        <form className="space-y-12" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              value={eamil}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@playard.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Note
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            />
          </div>
          <button
            type="submit"
            disabled={submitting || !message || !subject || !eamil}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
};
