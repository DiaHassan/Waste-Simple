import React from 'react';

const BlogPage = ({ title, text, date, imageUrl }) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg shadow-md" />
      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-lg text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default BlogPage;
