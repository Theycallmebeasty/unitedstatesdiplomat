import React from 'react';
import Link from 'next/link';


const BlogPostCard = ({ post }) => {
  return (
    <>
    <div className="border border-red-700 rounded-lg p-4">
      <h2 className="text-xl text-red-700 italic font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-2">{post.date}</p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <div className="text-blue-500">
        <Link href={`/blog/${post.slug}`}>
          <span className='text-red-700' >Read more</span>
        </Link>
      </div>
    </div>
   

    </>
  );
};

export default BlogPostCard;