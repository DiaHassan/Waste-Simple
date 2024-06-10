import CardRow from "./components/Cradrow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Toblog from "./components/Toblog";
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
      
        <div className="bg-white h-screen bg-gradient">
          <header className="absolute inset-x-0 top-0 z-50">
          {/* <Navbar/> */}

          </header>

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
                 <Toblog/>

                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="bg-white">
          <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-20 sm:py-48 lg:py-50">
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
      <section className="w-full bg-white py-20 text-center">
        <hr className="border-t-4 border-black my-0"/>
        <div id="scroll-container" className=" overflow-hidden w-full flex items-center justify-center py-6">
          <div id="scroll-text" className="whitespace-nowrap text-black text-6xl">
          Stay ahead with the latest in waste technology – it's essential.
          </div>
        </div>
        <hr className="border-t-4 border-black my-0"/>
      </section>
      <Newsletter/>
      {/* <Footer/> */}
    </main>

    
  );
}
