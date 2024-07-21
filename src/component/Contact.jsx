import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

const Contact = () => {

  const [state, handleSubmit] = useForm("xeojqone")
  if (state.succeeded) {
    return(
      <div className='flex flex-col justify-center items-center h-[80%] w-full'>
        <h1 className='font-dinasti-regular font-semibold text-6xl'>Thanks for messaging me!</h1>
      </div>
    )
  }

  return (
    <div className='content flex justify-center items-center h-full'>
      {/* <h1 className=' content-title pb-16'>Contact Me</h1> */}
      <div className='flex justify-center max-w-xl w-full'>
        <div className='max-w-xl w-[100%] p-6 bg-gray-600 rounded-lg drop-shadow-black-3xl'>
          <form onSubmit={handleSubmit} method='POST'>
            <div className='mb-4' >
              <label className='block text-white text-xl font-dinasti-regular font-semibold mb-2' htmlFor="">Your Name</label>
              <input placeholder='Jjay' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-slate-200 ' required type="text" />
            </div>
            <div className='mb-4'>
                <label className='block text-white text-xl font-dinasti-regular font-semibold mb-2' htmlFor="email" id='email' name='email'>Your Email</label>
              <input placeholder='Jjay@example.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-slate-200' required id='email' name='email' type="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className='mb-4'>
                <label className='block text-white text-xl font-dinasti-regular font-semibold mb-2' htmlFor="">Your Message</label>
              <textarea rows='6' placeholder='Type your message....' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-slate-200 ' required id='message' name='message' type="text" />
              <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
              />
            </div>
            <div className='flex justify-center'>
              <button className='bg-slate-800 font-semibold font-dinasti-bold px-4 py-2 rounded-lg hover:bg-slate-400 hover:text-black focus:outline-white  text-white' type='submit' disabled={state.submitting}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
