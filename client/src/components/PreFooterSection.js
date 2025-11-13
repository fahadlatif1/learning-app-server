import React, { useState } from 'react';

const PreFooterSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', { email, name });
    setEmail('');
    setName('');
  };

  return (
    <div className="w-full bg-secondary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 70% / 30% Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column - 70% Width - Newsletter */}
          <div className="w-full lg:w-[70%]">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm">
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="text-gray-600 mb-8 text-base md:text-lg">
                Stay updated with our latest projects, news, and exclusive property insights.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-white px-12 py-3 rounded-sm font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - 30% Width - Contact Info */}
          <div className="w-full lg:w-[30%]">
            <div className="bg-primary text-white p-8 md:p-10 rounded-sm h-full">
              <h3 className="text-2xl md:text-3xl font-light mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Sales Enquiries</p>
                  <a href="tel:1300028706" className="text-xl md:text-2xl font-light hover:text-gray-300 transition-colors">
                    1300 028 706
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Email</p>
                  <a href="mailto:info@regencyhouse.com.au" className="text-base md:text-lg font-light hover:text-gray-300 transition-colors break-words">
                    info@regencyhouse.com.au
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Office Hours</p>
                  <p className="text-base font-light">Monday - Friday</p>
                  <p className="text-base font-light">9:00 AM - 5:00 PM</p>
                </div>

                <div className="pt-4">
                  <button className="w-full border-2 border-white text-white px-6 py-3 rounded-sm font-medium hover:bg-white hover:text-primary transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PreFooterSection;
