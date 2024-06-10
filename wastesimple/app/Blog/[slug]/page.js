import { getBlog } from '@/app/lib/data';
import React from 'react';

const BlogPage = async ({ params: { slug } }) => {
  const blog = await getBlog(slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg text-gray-500 mb-4">{blog.date}</p>
          <img src={blog.image} alt={blog.title} className="w-full max-w-6xl h-auto mb-8" />
          <div className="prose prose-xl max-w-none mb-8">
            <p>{blog.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

