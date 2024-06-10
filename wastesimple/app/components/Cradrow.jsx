import React from 'react';
import Image from 'next/image';
import { getBlogs } from "../lib/data";
import Link from 'next/link';
import Toblog from './Toblog';
const Card = ({ image, title, text, link }) => (
  <div className="bg-[#d7d7d7] h-[25rem] max-h-[25rem] rounded-3xl max-w-[22rem] shadow-md overflow-hidden w-full sm:w-1/3 m-4">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-3xl shadow-md shadow-gray-300/50" />
    {/* <div className="w-full h-48 object-cover" >
      <Image src={image} alt={title} fill/>
    </div> */}
    <div className="p-4 flex flex-col justify-between h-[40%]">
      <div>
        <h2 className="text-lg text-start text-black font-semibold">{title}</h2>
      </div>
    </div>
    <div className="flex flex-row justify-between items-center self-end px-8">
      <p className="text-gray-600 mt-1">{text}</p>
      <Link href={`/Blog/${link}`} className="text-blue-500 hover:underline justify-center items-center  "> Read More</Link>
    </div>
  </div>
);

const CardRow = async () => {
  const blogs = await getBlogs();
  
  const sortedBlogs = blogs.sort((a,b) => new Date(b.date) - new Date(a.date));

  const firstThreeBlogs = sortedBlogs.slice(0, 3);
  // console.log(firstThreeBlogs);

  return (
    <div>
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center items-center p-6">
        {firstThreeBlogs.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.date}
            link={card.id}
          />
        ))}
      </div>
      <div className='pt-[4rem]'>
        <Toblog className=""/>
      </div>
    </div>
  );
};

export default CardRow;
