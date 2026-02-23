import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* College & Department Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-black mb-2">
              Global Academy of Technology
            </h3>
            <p className="text-lg text-gray-700 font-semibold">
              Department of AIML
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Aditya Layout, Rajarajeshwari Nagar,
              <br />
              Bengaluru, Karnataka 560098
            </p>
          </div>

          {/* Map Link */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-3">Location</h3>
            <Link
              href="https://maps.app.goo.gl/your-location-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border-2 border-black rounded-lg bg-white text-black font-semibold shadow-[3px_3px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
            >
              View on Map
            </Link>
          </div>

          {/* Technical Coordinator Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-black mb-2">
              Technical Coordinators
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-lg text-gray-700 font-semibold">
                  Bhuvan A R
                </p>
                {/* <p className="text-md text-gray-700">📞 +91 8317462097</p> */}
                {/* <p className="text-md text-gray-700">
                  ✉️ bhuvan.ar0101@gmail.com
                </p> */}
              </div>
              <div>
                <p className="text-lg text-gray-700 font-semibold">
                  Vinayaka S
                </p>
                {/* <p className="text-md text-gray-700">📞 +91 9000000000</p> */}
              </div>
              <div>
                <p className="text-md text-gray-700">
                  ✉️{" "}
                  <a href="mailto:aifiesta3o.tech@gmail.com">
                    aifiesta3o.tech@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-4 border-t-2 border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            © 2026 AIfiesta 3.0 - Department of AIML, Global Academy of
            Technology. All rights reserved.
          </p>
          {/* <div className="mt-8 text-center text-sm text-gray-500">
          Made with ❤️ by Bhuvan A R
        </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
