import { getBlog } from '@/app/lib/data';
import React from 'react';

const BlogPage = async ({ params: { slug } }) => {
  const blog = await getBlog(slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="bg-white w-full flex flex-col pt-10 px-20 items-center justify-center">
      <div className="max-w-screen-lg w-full flex flex-col items-center justify-center">
        <div className="w-full">
          <img src={blog.image} alt={blog.title} className="w-full h-auto shadow-md" />
        </div>
        <div className="mt-6">
          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
          <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
          <p className="text-lg text-gray-700">{blog.text}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

