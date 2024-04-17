import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export function ContactForm() {
  const [state, handleSubmit] = useForm("xwkzgaog");
  if (state.succeeded) {
      return <p className='text-2xl '>Thanks, Your message has been sent to the Developer</p>;
  }
  return (
      <form className='form-control w-full bg-base-300 p-3 rounded m-auto' onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input className='input input-primary m-3'
        id="email"
        type="email" 
        name="email"
        placeholder='Enter your Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
      className='textarea textarea-primary m-3'
      placeholder='Enter Your Message here'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn btn-secondary w-56 m-auto' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
