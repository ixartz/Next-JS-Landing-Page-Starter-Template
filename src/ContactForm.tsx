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
        <input
          className="bg-[#F3F4F5]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <textarea
          className="bg-[#F3F4F5]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={submitting}>
          Send
        </button>
      </form>
    </Background>
  );
};
