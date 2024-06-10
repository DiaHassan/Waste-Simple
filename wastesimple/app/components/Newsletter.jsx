'use client'
import React, { useState } from 'react';
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";
import '../firebase.config';

export default function Newsletter() {
  const db = getFirestore();
  
  const [email, setEmail] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMail = async (e) => {
      e.preventDefault();

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }else{
        // console.log('Form submitted:', { email });
        const docRef = await addDoc(collection(db, 'maillist'), {
            email: email
          });
        setEmail('');
        setSubmitted(true);
      }
    };
  return  (
        <section>
      
        <div className="bg-white">
          <div className="relative flex flex-col items-center justify-center h-[70vh] isolate px-6 lg:px-8">
      
            <div className="mx-auto flex flex-col items-center justify-center max-w-5xl py-20 sm:pb-20 sm:pt-48 lg:py-50">
              <div className="text-center">
                {!submitted && (
                  <div>
                    <h1 className="text-4xl m-4 font-bold tracking-tight text-gray-900 sm:text-7xl">
                    Do not miss an update!
                    </h1>
                    <div className="mx-auto max-w-lg ">
                      <p className="mt-6 text-md leading-8 text-gray-600 sm:text-lg">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo..
                      </p>
                    </div>
                  </div>
                )}
                {submitted && (
                  <div>
                    <h1 className="text-4xl m-4 font-bold tracking-tight text-gray-900 sm:text-7xl">
                    Thank you for subscribing!
                    </h1>
                    <div className="mx-auto max-w-lg ">
                      <p className="mt-6 text-md leading-8 text-gray-600 sm:text-lg">
                        You will receive updates of new blogs and other updates.
                      </p>
                    </div>
                  </div>
                )}

                {!submitted &&(<div className="mt-10 flex flex-col items-center justify-center">
                 <form className="mt-6 flex items-center ">
                    <input
                      aria-label="Your email"
                      type="email"
                      className="block w-full sm:w-[30rem] rounded-tl-md rounded-bl-md  border-0 bg-gray-100 p-3 text-gray-900 placeholder:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 focus:ring-opacity-50 h-10"
                      placeholder="Your email"
                      onChange={handleEmailChange}
                      required
                    />
                    <button
                      type="submit"
                      onClick={handleMail}
                      className="inline-flex items-center justify-center text-center sm:w-[7rem] h-10 rounded-tr-md rounded-br-md  bg-[#99FF97] min-w-24 px-4 py-2 text-sm font-semibold text-[#494949] shadow-sm hover:bg-[#88de86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99FF97]"
                    >
                        Sign up
                    </button>
                  </form>
                </div>)}
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}
