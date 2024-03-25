
import React from 'react';
import Image from "next/image"
import SectionHeaders from '../../components/Layout/SectionHeaders';


const AboutPage = () => {
  return (
    <>
    <section className="relative mt-4">
    <div className="py-8">
        <p className="my-7 text-2xl text-white z-10 relative">
            FIND IT | BUY IT | SHIP IT
        </p>
    </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={'/sat.jpg'} layout={'fill'} objectFit={'cover'} alt={'about'} />
      </div>
    </section>
    <section className="text-center mt-4">
       <div className=" px-8 py-2 bg-primary rounded-lg mb-4">
         <SectionHeaders 
          mainHeader={'About Us'}
         />
       </div> 
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2"> <span className='text-primary'>Our History</span></h2>
            <p className="text-gray-600">
              Logistics Co. has been in the business of transportation and logistics for over two decades. We started as a small trucking company and have grown into a global logistics provider, specializing in shipping, air transportation, and road transportation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2"><span className='text-primary'>Our Mission</span></h2>
            <p className="text-gray-600">
              Our mission is to provide efficient, reliable, and cost-effective transportation solutions to our customers worldwide. We strive to exceed customer expectations by delivering exceptional service, ensuring the safe and timely delivery of their goods.
            </p>
          </div>
        </div>

      
      
    </section>
    <section>
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4">
       <p >
       Welcome to United States Diplomat, where logistics, shipping, and air freight solutions converge to propel your business towards unparalleled success. With a commitment to excellence and a passion for seamless operations, we are your trusted partner in navigating the intricate world of global transportation.

       At United States Diplomat, we understand the critical role logistics plays in the success of your business. Whether you're a small-scale enterprise or a multinational corporation, efficient supply chain management is the backbone of your operations. That's where we come in. With years of industry expertise and a dedicated team of professionals, we streamline your logistical challenges, allowing you to focus on what you do best  growing your business.

       Our comprehensive suite of services encompasses every aspect of logistics, from strategic planning to execution. Leveraging cutting-edge technology and industry-leading practices, we optimize your supply chain for maximum efficiency and cost-effectiveness. From warehousing and distribution to freight forwarding and customs clearance, we tailor our solutions to meet your unique needs.

       One of our core strengths lies in our air freight services. In today's fast-paced global marketplace, timely delivery is non-negotiable. With our extensive network of carriers and strategic partnerships, we ensure your goods reach their destination swiftly and securely. Whether it's a small parcel or oversized cargo, we have the resources and expertise to handle it with precision and care.


       </p>
       <p >
       But our commitment doesn't end with delivery. We believe in building long-lasting relationships with our clients, founded on trust, transparency, and reliability. Our dedicated team works tirelessly to anticipate your needs and exceed your expectations at every turn. Your success is our success, and we're with you every step of the way.

        At United States Diplomat, we're more than just a logistics provider  we're your strategic ally in the pursuit of excellence. Join hands with us today, and experience the difference firsthand. Let's embark on a journey towards unparalleled efficiency, unrivaled service, and unparalleled success. Together, the sky's the limit.

       Thank you for considering United States Diplomat for your logistical needs. We look forward to the opportunity to serve you and exceed your expectations.
       </p>
       </div>
        
      
      </div>
    </section>
    </>
  );
};

export default AboutPage;