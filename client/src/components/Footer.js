import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Office Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Sydney Office */}
          <div>
            <h4 className="text-lg font-medium mb-4">Sydney</h4>
            <address className="not-italic text-sm font-light text-gray-300 leading-relaxed">
              Level 5, 45 Clarence Street<br />
              Sydney NSW 2000<br />
              Australia
            </address>
            <p className="text-sm font-light text-gray-300 mt-3">
              <a href="tel:+61292999000" className="hover:text-white transition-colors">
                +61 2 9299 9000
              </a>
            </p>
          </div>

          {/* Melbourne Office */}
          <div>
            <h4 className="text-lg font-medium mb-4">Melbourne</h4>
            <address className="not-italic text-sm font-light text-gray-300 leading-relaxed">
              Level 3, 520 Collins Street<br />
              Melbourne VIC 3000<br />
              Australia
            </address>
            <p className="text-sm font-light text-gray-300 mt-3">
              <a href="tel:+61396141000" className="hover:text-white transition-colors">
                +61 3 9614 1000
              </a>
            </p>
          </div>

          {/* Brisbane Office */}
          <div>
            <h4 className="text-lg font-medium mb-4">Brisbane</h4>
            <address className="not-italic text-sm font-light text-gray-300 leading-relaxed">
              Level 12, 111 Eagle Street<br />
              Brisbane QLD 4000<br />
              Australia
            </address>
            <p className="text-sm font-light text-gray-300 mt-3">
              <a href="tel:+61732211000" className="hover:text-white transition-colors">
                +61 7 3221 1000
              </a>
            </p>
          </div>

          {/* Adelaide Office */}
          <div>
            <h4 className="text-lg font-medium mb-4">Adelaide</h4>
            <address className="not-italic text-sm font-light text-gray-300 leading-relaxed">
              Level 8, 85 Grenfell Street<br />
              Adelaide SA 5000<br />
              Australia
            </address>
            <p className="text-sm font-light text-gray-300 mt-3">
              <a href="tel:+61882121000" className="hover:text-white transition-colors">
                +61 8 8212 1000
              </a>
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social Media Links */}
          <div className="flex gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-sm font-light"
            >
              Instagram
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-sm font-light"
            >
              Facebook
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-sm font-light"
            >
              LinkedIn
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-light text-gray-300">
            <span>© 2024 Regency House</span>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
