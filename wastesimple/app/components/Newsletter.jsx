

export default function Newsletter() {
    return  (
        <section>
      
        <div className="bg-white">
          <div className="relative isolate px-6 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >

            </div>
            <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-50">
              <div className="text-center">
                <h1 className="text-4xl m-4 font-bold tracking-tight text-gray-900 sm:text-7xl">
                Do not miss an update! 
                </h1>
                <div className="mx-auto max-w-lg ">
                  <p className="mt-6 text-md leading-8 text-gray-600 sm:text-lg">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo..
                  </p>

                </div>
                <div className="mt-10 flex flex-col items-center justify-center">
                 <form className="mt-6 flex items-center ">
                    <input
                      aria-label="Your email"
                      type="email"
                      className="block w-full sm:w-[30rem] rounded-tl-md rounded-bl-md  border-0 bg-gray-100 p-3 text-gray-900 placeholder:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 focus:ring-opacity-50 h-10"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center text-center sm:w-[7rem] h-10 rounded-tr-md rounded-br-md  bg-[#99FF97] px-4 py-3 text-sm font-semibold text-[#494949] shadow-sm hover:bg-[#88de86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99FF97]"
                    >
                        Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
            {/* <div
                className="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-b from-[#ffffff] to-[#90ee90] opacity-30 sm:left-[calc(50%)] sm:w-[72.1875rem]"
                style={{
                  filter: 'blur(3rem)',
                  transform: 'translateY(50%)'
                }}
              /> */}
            </div>
          </div>
        </div>
      </section>
    )
}
