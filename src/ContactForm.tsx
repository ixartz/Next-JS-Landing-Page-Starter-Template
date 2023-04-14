import React, { useState } from "react";

import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "2K9HbgPn";

export const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [submitted, setSubmitted] = useState(false);

  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    await submit({ message });
  };

  return (
    <div className="min-h-[10vh]">
      {submitted ? (
        <span className="text-heliotrope-400 py-5">Thank you!</span>
      ) : (
        <form onSubmit={onSubmit} className=" h-full">
          <div className="relative ">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="email"
              id="email"
              className="w-full block rounded-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-white border-2 border-[#DBDBDB] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="email"
              className="p-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting || !message}
            className="btn-primary btn btn-base md:float-right my-5"
          >
            <p className="px-10 py-2 md:px-12">Daftar </p>
          </button>
          <style jsx>
            {`
              .btn {
                @apply inline-block  text-center rounded-full font-sans;
              }

              .btn-base {
                @apply text-[16px]  font-semibold;
              }

              .btn-xl {
                @apply font-extrabold text-xl py-4 px-6;
              }

              .btn-primary {
                @apply text-white bg-heliotrope-400;
              }

              .btn-primary:hover {
                @apply bg-heliotrope-500;
              }
            `}
          </style>
        </form>
      )}
    </div>
  );
};
