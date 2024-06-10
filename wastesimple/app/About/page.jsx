import React from "react";
import "../globals.css";

export default function About() {
  return (
    <div className="bg-white">
      <div className="spacer2 layer2 flex flex-col items-center justify-center">
          <h1 className="text-6xl pb-8 font-bold text-[#494949]">About Us</h1>

      </div>
      <section className="flex flex-col  bg-[#00a258] items-center justify-center ">
        <div className="flex flex-col items-center py-40">
          <div className="p-4">
            <h3 className="text-4xl text-white font-bold text-center mb-4">Our Company</h3>
            <p className="text-white text-xl lg:px-60 text-center">Our company, Wastemanagement Inc., is a leading waste management solution that aims to reduce waste and minimize waste disposal across the globe. We are a team of dedicated individuals who are passionate about sustainability and protecting our planet. Our expertise lies in developing innovative waste management strategies that not only reduce waste but also create economic benefits for communities and businesses. With our comprehensive waste management services, we work closely with our clients to identify and address waste reduction opportunities, ensuring a sustainable future for all.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-32">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#494949]">Our Team</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col mx-6 my-4 p-4">
              <img src="https://picsum.photos/200" alt="Profile Picture" className="rounded-full mb-4" />
              <h3 className="text-2xl font-bold text-[#494949]">CEO / CTO</h3>
              <p className="text-[#494949]">John Doe</p>
              <p className="text-[#494949]">Email: john.doe@example.com</p>
            </div>
            <div className="flex flex-col mx-6 my-4 p-4">
              <img src="https://picsum.photos/200" alt="Profile Picture" className="rounded-full mb-4" />
              <h3 className="text-2xl font-bold text-[#494949]">CTO</h3>
              <p className="text-[#494949]">Jane Smith</p>
              <p className="text-[#494949]">Email: jane.smith@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


