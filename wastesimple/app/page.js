import CardRow from "./components/Cradrow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css"


export default function Home() {
  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  return (
    <main>
      <section className="bg-white">
      
        <div className="bg-white">
          <header className="absolute inset-x-0 top-0 z-50">
          {/* <Navbar/> */}

          </header>
          {/* <div className="absolute inset-0 select-none z-[-1] overflow-visible" style={{
            background: `
              radial-gradient(at 53% 78%, rgba(255, 255, 0, 0.3) 0px, transparent 50%),
              radial-gradient(at 71% 91%, rgba(51, 255, 0, 0.3) 0px, transparent 50%),
              radial-gradient(at 31% 91%, rgba(255, 128, 0, 0.17) 0px, transparent 50%)
            `
          }}>
          </div> */}
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >

            </div>
            <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-50">
              {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
              <div className="text-center">
                <h1 className="text-4xl m-4 font-bold tracking-tight text-gray-900 sm:text-7xl">
                  Latest on the waste technology around the world! 
                </h1>
                <div className="mx-auto max-w-lg ">
                  <p className="mt-6 text-md leading-8 text-gray-600 sm:text-lg">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                  </p>

                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="https://www.google.com"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
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
      {/* <div className="min-h-40" style={{
      background: 'linear-gradient(0deg, rgba(81, 81, 81, 0.26) 0%, rgba(255, 255, 255, 0.24) 31%, rgba(255, 255, 255, 1) 100%)'
      }}>

      </div> */}
      <section>
      <div className="bg-white">
          <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-50">
              <div className="text-center">
                <h1 className="text-2xl m-4 font-bold tracking-tight text-gray-900 sm:text-5xl">
                          Latest on the waste technology around the world! 
                </h1>
                <CardRow/>    
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="min-h-40" style={{
      background: 'linear-gradient(180deg, rgba(81, 81, 81, 0.48) 0%, rgba(255, 255, 255, 1) 66%, rgba(255, 255, 255, 1) 100%)'
      }}>

      </div>
      
        <div className="bg-white">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >

            </div>
            <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-50">
              <div className="text-center">
                <h1 className="text-4xl m-4 font-bold tracking-tight text-gray-900 sm:text-7xl">
                  Latest on the waste technology around the world! 
                </h1>
                <div className="mx-auto max-w-lg ">
                  <p className="mt-6 text-md leading-8 text-gray-600 sm:text-lg">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                  </p>

                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="https://www.google.com"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
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
      {/* <Footer/> */}
    </main>

    
  );
}
