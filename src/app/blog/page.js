import React from 'react';
import BlogPostCard from '../../components/Layout/BlogPostCard';
import Image from "next/image";
const BlogPage = () => {
  // Dummy blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Efficient Shipping Processes',
      date: 'March 10, 2024',
      excerpt: 'Efficient shipping processes are essential for any logistics company...',
      category: 'Shipping',
      slug: 'importance-of-efficient-shipping',
    },
    {
      id: 2,
      title: 'Advantages of Air Transportation for Freight Forwarding',
      date: 'March 15, 2024',
      excerpt: 'Air transportation offers several advantages for freight forwarding...',
      category: 'Air Transportation',
      slug: 'advantages-of-air-transportation',
    },
    {
      id: 3,
      title: 'The Role of Trucks in Road Transportation',
      date: 'March 20, 2024',
      excerpt: 'Trucks play a crucial role in road transportation, providing...',
      category: 'Road Transportation',
      slug: 'role-of-trucks-in-road-transportation',
    },
  ];

  return (
    <>
    <section>
      <div className="container mx-auto p-4">
        <h1 className="bg-primary text-3xl text-white italic border rounded-lg font-bold mb-4 px-8 py-2 w-1/3">Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
    <section className="relative">
     <div className="absolute inset-0 flex justify-center items-center">
        <Image src={'/ct22.jpg'} layout={'fill'} objectFit={'cover'} alt={'about'} />
     </div>
     <div className="py-8 relative z-10">
        <h1 className="text-6xl text-white font-semibold text-center">Efficiency in Motion  . Navigating Logistics with <span className="text-primary">Precision!</span></h1>
        <p className="my-7 text-2xl text-white text-center">
            FIND IT | BUY IT | SHIP IT
        </p>
      </div>
    </section>
    </>
  );
};

export default BlogPage;