// components/Footer.js
"use client";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);

  const howtoRoute = (path) => `/howto/${path}`;

  return (
    <footer
      className={`scroll-to-bottom-footer z-60 ${
        showFooter ? "footer-visible" : ""
      }`}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="hanger">
        <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link href="/" className="text-lg font-bold tracking-tighter text-black transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
              Trenda Marketplace
              </Link>
              <Link
                className="text-black hover:cursor-pointer"
                href="tel:233262195121"
              >
                Contact Support or Chat : (+233) 262-195-121
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-black uppercase">
                    Solutions
                  </h4>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
 

                      <Link href={howtoRoute("marketing")} className="text-sm font-normal text-black hover:cursor-pointer">
                      Marketing
                      </Link>


                    </li>
                    <li>
                      <Link href={howtoRoute("analytics")} className="text-sm font-normal text-black hover:cursor-pointer">
                      Analytics
                      </Link>
                    </li>
                    <li>
                      <Link href={howtoRoute("commerce")}  className="text-sm font-normal text-black hover:cursor-pointer">
                      Commerce
                      </Link>
                    </li>
                    <li>
                      <Link href={howtoRoute("insights")} className="text-sm font-normal text-black hover:cursor-pointer">
                      Insights
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xs font-semibold tracking-wider text-black uppercase hover:cursor-pointer">
                    Support
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <Link href={howtoRoute("careers")}  className="text-sm font-normal text-black hover:cursor-pointer">
                      Careers
                      </Link>
                    </li>
                    <li>
                      <Link href={howtoRoute("privacy-policy")} className="text-sm font-normal text-black hover:cursor-pointer">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href={howtoRoute("how-to-sell")} >
                      How to sell on Trenda
                      </Link>
                    </li>
                    <li>
                      <p className="text-sm font-normal text-black hover:cursor-pointer">
                        API Status (Active)
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:justify-end md:grid md:grid-cols-1">
                <div className="w-full mt-12 md:mt-0">
                  <div className="mt-8 lg:justify-end xl:mt-0">
                    <h3 className="text-xs font-semibold tracking-wider text-black uppercase">
                      Subscribe to our newsletter
                    </h3>
                    <p className="mt-4 text-black text-md text-black-500 lg:ml-auto">
                      The latest trending ads, packages, and discount, sent to
                      your inbox weekly.
                    </p>
                    <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                      <form
                        id="revue-form"
                        name="revue-form"
                        className="mt-4 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-none sm:max-w-lg sm:flex"
                      >
                        <div className="flex-1 min-w-0 revue-form-group">
                          <label htmlFor="member_email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="cta-email"
                            type="email"
                            className="block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                          <button
                            type="submit"
                            value="Subscribe"
                            className="block w-full h-full px-3 text-base font-medium text-black bg-teal-700 border border-transparent rounded-none shadow hover:bg-teal-800 focus:outline-none sm:px-10"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
