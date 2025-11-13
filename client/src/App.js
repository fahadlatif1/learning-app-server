import React from 'react';
import HeroVideo from './components/HeroVideo';
import PreFooterSection from './components/PreFooterSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section with Video */}
      <HeroVideo />

      {/* Main Content Area - Add your content sections here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
            Project Details
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Regency House represents the pinnacle of contemporary residential design. 
            Each residence has been meticulously crafted to offer an unparalleled living 
            experience, combining sophisticated architecture with premium finishes and 
            state-of-the-art amenities.
          </p>
        </div>
      </section>

      {/* Site Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-light text-primary mb-2">1,470m²</p>
              <p className="text-sm text-gray-600 uppercase tracking-wide">Land Size</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-light text-primary mb-2">420m²</p>
              <p className="text-sm text-gray-600 uppercase tracking-wide">Landscaped Area</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-light text-primary mb-2">250m</p>
              <p className="text-sm text-gray-600 uppercase tracking-wide">Distance to Waterfront</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-12">
            Nearby Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-sm">
              <h3 className="text-xl font-medium mb-3">500m Radius</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Macleay Street Cafes</li>
                <li>• Elizabeth Bay Marina</li>
                <li>• Local Parks</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-sm">
              <h3 className="text-xl font-medium mb-3">1km Radius</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kings Cross Station</li>
                <li>• Royal Botanic Gardens</li>
                <li>• Woolworths Metro</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-sm">
              <h3 className="text-xl font-medium mb-3">2km Radius</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Sydney CBD</li>
                <li>• Sydney Opera House</li>
                <li>• Circular Quay</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Section (70% / 30% Layout) */}
      <PreFooterSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
