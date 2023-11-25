'use client';

import { useState } from 'react';

export default function ContactComponent() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const listId = 'landinghub';
  const url = `https://us3.api.mailchimp.com/3.0/lists/${listId}/members`;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex =
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

  async function handleSubmit() {
    if (email === '') {
      setErrorMessage('Email é obrigatório.');
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('formato de email inválido.');
      return;
    }

    if (name === '') {
      setErrorMessage('Campo Nome é obrigatório.');
      return;
    }

    if (name.length < 2) {
      setErrorMessage('Campo Nome deve ter mais de 2 caracteres.');
      return;
    }

    if (message.length < 2) {
      setErrorMessage('Campo mensagem deve ter mais de 2 caracteres.');
      return;
    }

    if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage('formato de telefone inválido.');
      return;
    }

    console.log(url);
    const res = await fetch(url, {
      // Change this to mailchimp validation
      body: JSON.stringify({
        body: JSON.stringify({ data: { email } }),
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });

    if (!res.ok) {
      setErrorMessage('Email failed to submit.');
      return;
    }
    setErrorMessage('');
    setSuccessMessage('Email successfully submitted!');
    setEmail('');
    setName('');
    setMessage('');
    setPhoneNumber('');
  }

  return (
    <div className={`m-auto mt-10 w-1/2`}>
      <div id="login-box" className={`mb-4 text-center`}>
        <span className={`mx-auto`}>
          Entre em contato pelo e-mail
          <span className={`mx-1 font-medium text-cyan-600 underline`}>
            <a href={`mailto:souza.marcusv@outlook.com`}>
              souza.marcusv@outlook.com{' '}
            </a>
          </span>
          ou envie sua mensagem no
        </span>
        <div
          id="login-box-caption"
          className={`text-2xl font-bold text-cyan-500`}
        >
          Formulário de contato
        </div>
      </div>
      {successMessage ? (
        <p className="rounded-lg bg-green-300 px-4 py-2 text-green-700">
          {successMessage}
        </p>
      ) : (
        <>
          <div className={`mb-3 mt-10`}>
            <label
              className={`mb-2 block text-sm font-bold text-gray-700`}
              htmlFor="username"
            >
              Email*
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              id="username"
              name="username"
              onChange={(e) => setEmail(e.target.value)}
              className="focus:shadow-outline w-full appearance-none rounded border p-4 px-3 py-2 leading-tight
                          text-gray-700 shadow focus:outline-none"
            />
            <div
              id={'username-required'}
              className={`mt-1 text-sm italic text-red-500`}
            />
          </div>

          <div className={`mb-3 mt-10`}>
            <label
              className={`mb-2 block text-sm font-bold text-gray-700`}
              htmlFor="message"
            >
              Nome*
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              id="full-name"
              name="fullname"
              onChange={(e) => setName(e.target.value)}
              className="focus:shadow-outline w-full appearance-none rounded border p-4 px-3 py-2 leading-tight
                          text-gray-700 shadow focus:outline-none"
            />
            <div
              id={`fullname-required`}
              className={`mt-1 text-sm italic text-red-500`}
            />
          </div>

          <div className={`mb-3 mt-10`}>
            <label
              className={`mb-2 block text-sm font-bold text-gray-700`}
              htmlFor="message"
            >
              Telefone de contato
            </label>
            <input
              type="text"
              placeholder="Digite seu númenro de telefone..."
              id="message"
              name="message"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="focus:shadow-outline w-full appearance-none rounded border p-4 px-3 py-2 leading-tight
                          text-gray-700 shadow focus:outline-none"
            />
            <div
              id={`phoneNumber`}
              className={`mt-1 text-sm italic text-red-500`}
            />
          </div>

          <div className={`mb-3 mt-10`}>
            <label
              className={`mb-2 block text-sm font-bold text-gray-700`}
              htmlFor="message"
            >
              Mensagem
            </label>
            <textarea
              placeholder="Digite sua mensagem..."
              id="message"
              name="message"
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              className="focus:shadow-outline w-full appearance-none rounded border p-4 px-3 py-2 leading-tight
                          text-gray-700 shadow focus:outline-none"
            />
            <div
              id={`message`}
              className={`mt-1 text-sm italic text-red-500`}
            />
          </div>

          <button
            type="button"
            className="w-2/5 rounded-r-lg p-3 font-semibold dark:bg-violet-400 dark:text-gray-900 sm:w-1/3"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </>
      )}
      <div />
      {errorMessage && (
        <p className="my-2 rounded-lg bg-red-200 px-4 py-2 text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
