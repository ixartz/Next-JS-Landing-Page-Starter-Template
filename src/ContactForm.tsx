import React, { useState } from "react";

import { useFormspark } from "@formspark/use-formspark";

import { Background } from "./background/Background";

const FORMSPARK_FORM_ID = "2K9HbgPn";

export const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await submit({ message });
    alert("Form submitted");
  };

  return (
    <Background color="bg-white">
      <form
        onSubmit={onSubmit}
        className="p-10 text-center flex items-center mx-auto	"
      >
        <input
          className="bg-[#F3F4F5] mx-auto text-center"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />{" "}
        <button
          type="submit"
          disabled={submitting || !message}
          className="mx-auto btn-primary btn btn-xl "
        >
          Send
        </button>
        <style jsx>
          {`
            .btn {
              @apply inline-block  text-center rounded-full font-sans;
            }

            .btn-base {
              @apply text-[16px] md:text-[20px] font-semibold;
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
    </Background>
  );
};
