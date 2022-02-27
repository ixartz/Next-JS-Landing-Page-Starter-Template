import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { init } from '@emailjs/browser'
init('XGfVtQ6Q9tWVL-FP1')

console.log( process.env.SERVICE_ID);
console.log( process.env.NEXT_PUBLIC_SERVICE_ID);
 console.log(process.env.NEXT_PUBLIC_TEMPLATE_ID)
 console.log(process.env.NEXT_PUBLIC_USER_ID)
 

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent! Thanks for contacting us', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    })
  }

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    console.log('data', data);
    
    const { name, email, subject, message } = data
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      }
      console.log('sending', templateParams);

      
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID,
      )
      console.log('sent');
      

      reset()
      toastifySuccess()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="container">
      <div className="">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">
          Contact us
        </h1>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className="col">
            <input
              type="text"
              name="name"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name',
                },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              })}
              className=" form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Name"
            ></input>
            {errors.name && (
              <span className="errorMessage">{errors.name.message}</span>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="form-control 
                       block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            ></input>
            {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )}
          </div>

          <div className="col">
            <input
              type="text"
              name="subject"
              {...register('subject', {
                required: {
                  value: true,
                  message: 'Please enter a subject',
                },
                maxLength: {
                  value: 75,
                  message: 'Subject cannot exceed 75 characters',
                },
              })}
              className="form-control 
                       block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Subject"
            ></input>
            {errors.subject && (
              <span className="errorMessage">{errors.subject.message}</span>
            )}
          </div>

          <div className="col">
            <textarea
              rows={3}
              name="message"
              {...register('message', {
                required: true,
              })}
              className="form-control 
                       block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
          </div>
          <button
            className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ContactForm

