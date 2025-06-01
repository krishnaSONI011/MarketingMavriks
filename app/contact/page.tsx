import React from 'react';
import { FaPhone, FaEnvelope, FaFax, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white font-[Montserrat]">
      {/* Section Title */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-[#c20000] uppercase mb-4 font-[Poppins]">
          Get in Touch With Us
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We're here to answer any questions you may have and provide the services your business needs.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8 bg-gray-50 p-8 rounded-xl shadow-xl">
          <div className="flex items-start gap-4">
            <div className="text-white bg-[#c20000] p-3 rounded-lg text-xl">
              <FaPhone />
            </div>
            <div>
              <h4 className="font-semibold text-lg font-[Poppins]">Phone Number</h4>
              <p className="text-gray-600">+1234 567 789</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-white bg-[#c20000] p-3 rounded-lg text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold text-lg font-[Poppins]">Email Address</h4>
              <p className="text-gray-600">name@example.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-white bg-[#c20000] p-3 rounded-lg text-xl">
              <FaFax />
            </div>
            <div>
              <h4 className="font-semibold text-lg font-[Poppins]">Fax Address</h4>
              <p className="text-gray-600">+1234 1234 789</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-white bg-[#c20000] p-3 rounded-lg text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold text-lg font-[Poppins]">Location</h4>
              <p className="text-gray-600">123 Business Avenue, NYC</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-gray-50 p-10 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-[#c20000] font-[Poppins]">Send Message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#c20000]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#c20000]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#c20000]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#c20000]"
              />
            </div>

            {/* Services Checkboxes */}
            <div>
              <label className="block mb-2 text-gray-700 font-semibold font-[Poppins]">Select Services</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#c20000]" />
                  Content Creation
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#c20000]" />
                  Digital Marketing
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#c20000]" />
                  E-Commerce Solutions
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#c20000]" />
                  Advertising
                </label>
              </div>
            </div>

            <textarea
              placeholder="Message"
            //   rows="5"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#c20000]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#c20000] text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#c20000] font-[Poppins]">Find Us on Google Maps</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="max-w-6xl mx-auto h-96 rounded-xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.168107376894!2d-122.42067968468268!3d37.778519279758894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c13f2b69b%3A0x1f3fcad1f1fc74a!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1615815551790!5m2!1sen!2sus"
            // allowFullScreen=""
            loading="lazy"
            title="Business Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
