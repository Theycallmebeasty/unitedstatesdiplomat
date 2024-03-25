
import React from 'react';
import Image from "next/image";

const ServicesPage = () => {
  return (
    <section>
        <div className="relative mt-4">
          <div className="absolute inset-0 flex justify-center items-center">
             <Image src={'/aone.jpg'} layout={'fill'} objectFit={'cover'} alt={'about'} />
          </div>
          <div className="py-8 relative z-10">
            <h1 className="text-6xl text-white font-semibold text-center"><span     className="text-primary">Navigating Logistics with</span> Precision!</h1>
            <p className="my-7 text-2xl text-white text-center">
            FIND IT | BUY IT | SHIP IT
            </p>
         </div>
        </div>
        <div className="mt-8">
        <h1 className="bg-primary text-3xl text-white italic border rounded-lg font-bold mb-4 px-8 py-2 w-1/3">Our Services</h1>
          <p className="text-gray-600">
            We offer a comprehensive range of transportation services to meet the diverse needs of our customers.
          </p>
          <p className="text-gray-600 mt-4">
            Whether you need to transport goods locally or internationally, we have the expertise and resources to handle your shipment with care and efficiency.
          </p>
        </div>
      <div className="container mx-auto p-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Shipping Service */}
          <ServiceCard
            title="Shipping"
            description="We offer comprehensive shipping services for your cargo, ensuring timely delivery to destinations worldwide. Whether it's small parcels or large containers, we handle it all with care."
            icon="🚢"
          />

          {/* Air Transportation Service */}
          <ServiceCard
            title="Air Transportation"
            description="With our air transportation services, we guarantee fast and efficient delivery of your goods via air freight. Our network spans across major airports, providing global coverage for your shipments."
            icon="✈️"
          />

          {/* Road Transportation Service */}
          <ServiceCard
            title="Road Transportation"
            description="Our road transportation services utilize a fleet of modern trucks to deliver your goods safely and securely to their destination. Whether it's local or long-distance, we ensure reliable transportation every time."
            icon="🚚"
          />
        </div>
      </div>
   
    </section>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    

    <div className="border border-red-600 rounded-lg p-4 flex flex-col justify-between">
      <div>
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl text-red-700 italic font-semibold mt-2">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800">
        Learn More
      </button>
    </div>
  );
};

export default ServicesPage;