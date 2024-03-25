
import React from 'react';

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto p-4">
        <h1 className="bg-primary text-3xl text-white italic border rounded-lg font-bold mb-4 px-8 py-2 w-1/3">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-red-700 italic">Contact Information</h2>
            <p className="text-gray-600">
              Feel free to reach out to us with any inquiries or questions you may have. Our team is here to assist you.
            </p>
            <ul className="mt-4">
              <li className="flex items-center text-gray-700 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 00-8 8c0 3.982 4.132 7.18 7.55 7.934a1 1 0 00.9 0c3.418-.754 7.55-3.952 7.55-7.934a8 8 0 00-8-8zm0 14.289c-2.03-.438-5.545-2.515-7-5.917C4.454 7.227 6.62 4.506 10 4.506s5.546 2.721 7 6.866c-1.455 3.402-4.97 5.479-7 5.917zm1-8.289a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
                123 Shipping Blvd, City, Country
              </li>
              <li className="flex items-center text-gray-700 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 00-8 8c0 3.982 4.132 7.18 7.55 7.934a1 1 0 00.9 0c3.418-.754 7.55-3.952 7.55-7.934a8 8 0 00-8-8zm0 14.289c-2.03-.438-5.545-2.515-7-5.917C4.454 7.227 6.62 4.506 10 4.506s5.546 2.721 7 6.866c-1.455 3.402-4.97 5.479-7 5.917zm1-8.289a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
                +123 456 7890
              </li>
              <li className="flex items-center text-gray-700 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 00-8 8c0 3.982 4.132 7.18 7.55 7.934a1 1 0 00.9 0c3.418-.754 7.55-3.952 7.55-7.934a8 8 0 00-8-8zm0 14.289c-2.03-.438-5.545-2.515-7-5.917C4.454 7.227 6.62 4.506 10 4.506s5.546 2.721 7 6.866c-1.455 3.402-4.97 5.479-7 5.917zm1-8.289a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
                info@logisticsco.com
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-red-700 italic">Send Us a Message</h2>
            <form className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Name" className="p-2 border rounded-md" />
              <input type="email" placeholder="Email" className="p-2 border rounded-md" />
              <textarea rows="5" placeholder="Message" className="p-2 border border-red-700 rounded-md" />
              <button
                type="submit"
                className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;