import React from "react";
import "../globals.css";

export default function About() {
  return (
    <div className="bg-white">
      <div className="spacer2 layer2 flex flex-col items-center h-[60vh] justify-center">
          <h1 className="text-6xl pb-8 font-bold text-[#494949]">About Us</h1>

      </div>
      <section className="flex flex-col  bg-[#00a258] items-center justify-center ">
        <div className="flex flex-col items-center py-4">
          <div className="md:p-4 lg:p-4">
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center px-4 lg:px-40">
              <div className=" text-white md:w-[50%] lg:w-[50%]">
                <h3 className="text-2xl lg:text-4xl text-white font-bold text-center md:text-left lg:text-left mb-5">Our Company</h3>
                <div className=" text-center md:text-left lg:text-left text-md md:text-md lg:text-xl md:pr-20 lg:pr-">

                  {"Our company, Wastemanagement Inc., is a leading waste management solution that aims to reduce waste and minimize waste disposal across the globe. We are a team of dedicated individuals who are passionate about sustainability and protecting our planet. Our expertise lies in developing innovative waste management strategies that not only reduce waste but also create economic benefits for communities and businesses.\n\n Our company, Wastemanagement Inc., is a leading waste management solution that aims to reduce waste and minimize waste disposal across the globe. We are a team of dedicated individuals who are passionate about sustainability and protecting our planet. Our expertise lies in developing innovative waste management strategies that not only reduce waste but also create economic benefits for communities and businesses."}
                  
                </div>
              </div>
              <div className=" hidden md:flex lg:flex py-8 md:w-[50%] lg:w-[50%] items-center justify-center">
                <img src="https://images.pexels.com/photos/3010250/pexels-photo-3010250.jpeg" alt="Profile Picture"
                 className=" h-[32rem] w-[40rem] object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="spacer layer4 flex flex-col items-center justify-center" >
      <h1 className="text-6xl pb-8 font-bold invisible">About Us</h1>
        </div>
      <section className="flex flex-col items-center justify-center pt-32">
        <div className="flex flex-col items-center justify-center spacer3 layer3">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col text-center mx-auto my-4 p-4">
              <h3 className="text-lg lg:text-2xl font-bold text-[#494949]">Our Team</h3>
              <img src="https://media.licdn.com/dms/image/C4E12AQHacFEG1m53Eg/article-inline_image-shrink_1000_1488/0/1584523396130?e=1720051200&v=beta&t=zxcQES48FPDtQpY7Uy-unb-6ABIbR35Gy-V4usVIWMk" alt="Profile Picture" 
              className="mx-auto rounded-full h-32 w-32 md:h-46 md:w-46 lg:h-80 lg:w-80 mb-4" />
              <h3 className="text-lg lg:text-2xl font-bold text-[#494949]">CEO</h3>
              <p className="text-sm lg:text-lg text-[#494949]">Anas Idriss</p>
              <a href="mailto:anasidriss@hotmail.com" className="text-sm lg:text-lg text-[#494949] hover:underline">anasidriss@hotmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


