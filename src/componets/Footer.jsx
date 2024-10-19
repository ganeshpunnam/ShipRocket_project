import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ChevronDown, ChevronRight, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    products: false,
    features: false,
    resources: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="bg-indigo-900 text-gray-700">
      <div className="w-full rounded-b-[80px] p-8 bg-white container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Left Section: Logo and Reach Us */}
        <div className="space-y-6">
          <div className="space-y-4">
            <img src="https://sr-website.shiprocket.in/wp-content/uploads/2023/01/shiprocket_logo.svg" alt="Logo" className="w-32" /> {/* Add your logo */}
            <div className="flex space-x-4 text-violet-500">
              <a href="#"><Facebook className="text-violet-500" /></a>
              <a href="#"><Twitter className="text-violet-500" /></a>
              <a href="#"><Instagram className="text-violet-500" /></a>
              <a href="#"><Youtube className="text-violet-500" /></a>
              <a href="#"><Linkedin className="text-violet-500" /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Reach Us At</h3>

            <p className="flex items-center">
              <Mail className="mr-2 text-violet-500" />
              <a href="mailto:support@shiprocket.com" className="hover:underline">support@shiprocket.com</a>
            </p>

            <p className="flex items-center">
              <Mail className="mr-2 text-violet-500" />
              <a href="mailto:sales@shiprocket.com" className="hover:underline">sales@shiprocket.com</a>
            </p>

            <div>
              <h4 className="font-semibold flex items-center">
                <MapPin className="mr-2 text-violet-500" />
                Registered Office Address:
              </h4>
              <p>
                Plot No. B, Khasra No. 360, M.G. Road, Sultanpur, Gadaipur, Mehrauli, South Delhi, 110030
              </p>
            </div>

            <div>
              <h4 className="font-semibold flex items-center">
                <MapPin className="mr-2 text-violet-500" />
                Corporate Office Address:
              </h4>
              <p>
                Shiprocket 416, Udyog Vihar III, Sector 20, Gurugram, Haryana 122008
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="font-semibold text-gray-900 cursor-pointer flex mr-5" onClick={() => toggleSection('products')}>
            Products {isMobile && (expandedSections.products ? <ChevronDown className="text-violet-500" /> : <ChevronRight className="text-violet-500" />)}
          </h3>
          {(isMobile ? expandedSections.products : true) && (
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Shiprocket Shipping</a></li>
              <li><a href="#" className="hover:underline">ShiprocketX</a></li>
              <li><a href="#" className="hover:underline">Shiprocket Fulfillment</a></li>
              <li><a href="#" className="hover:underline">Shiprocket Engage 360</a></li>
              <li><a href="#" className="hover:underline">Shiprocket Capital</a></li>
            </ul>
          )}
        </div>

        {/* Features Section */}
        <div>
          <h3 className="font-semibold text-gray-900 cursor-pointer flex mr-3" onClick={() => toggleSection('features')}>
            Features {isMobile && (expandedSections.features ? <ChevronDown className="text-violet-500" /> : <ChevronRight className="text-violet-500" />)}
          </h3>
          {(isMobile ? expandedSections.features : true) && (
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Cash on Delivery</a></li>
              <li><a href="#" className="hover:underline">Serviceable Pin Codes</a></li>
              <li><a href="#" className="hover:underline">API Integration</a></li>
              <li><a href="#" className="hover:underline">Multiple Pickup Locations</a></li>
              <li><a href="#" className="hover:underline">Print Shipping Labels</a></li>
            </ul>
          )}
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold text-gray-900 cursor-pointer flex mr-5" onClick={() => toggleSection('resources')}>
            Resources {isMobile && (expandedSections.resources ? <ChevronDown className="text-violet-500" /> : <ChevronRight className="text-violet-500" />)}
          </h3>
          {(isMobile ? expandedSections.resources : true) && (
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Shipping Rate Calculator</a></li>
              <li><a href="#" className="hover:underline">Volumetric Weight Calculator</a></li>
              <li><a href="#" className="hover:underline">Free eCommerce Tools</a></li>
              <li><a href="#" className="hover:underline">Knowledge Base</a></li>
              <li><a href="#" className="hover:underline">Coupons</a></li>
            </ul>
          )}
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-gray-900">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto py-10 text-sm text-white px-7 flex flex-col md:flex-row justify-between items-center">
        <div>&copy; 2024 Shiprocket Private Limited. All rights reserved.</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Compliance</a>
          <a href="#" className="hover:underline">Refund & Cancellation Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
