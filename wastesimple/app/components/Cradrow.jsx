import React from 'react';
import Image from 'next/image';

const Card = ({ image, title, text, link }) => (
  <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full sm:w-1/3 m-3">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    {/* <div className="w-full h-48 object-cover" >
      <Image src={image} alt={title} fill/>
    </div> */}
    <div className="p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
      <a href={link} className="text-blue-500 hover:underline self-start mt-4">
        Read More
      </a>
    </div>
  </div>
);

const CardRow = () => {
  const cards = [
    {
      image: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png',
      title: 'Card Title 1',
      text: 'This is a bit of text under the title for the first card.',
      link: '#'
    },
    {
      image: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png',
      title: 'Card Title 2',
      text: 'This is a bit of text under the title for the second card.',
      link: '#'
    },
    {
      image: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png',
      title: 'Card Title 3',
      text: 'This is a bit of text under the title for the third card.',
      link: '#'
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center p-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardRow;
