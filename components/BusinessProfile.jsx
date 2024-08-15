import Image from "next/image";
import Link from "next/link";
import "@/assets/styles/components/BusinessProfile.scss";

const IMAGES = {
  slider2: "/../assets/images/hero-bg/slider2.jpg",
  slider4: "/../assets/images/hero-bg/slider4.jpg",
};

const BusinessProfilePage = () => {
  return (
    <div className="business-cover-page">
      {/* First section */}
      <div className="grid md:grid-cols-2 md:min-h-[calc(80vh-25vh)] bg-teal-800">
        <div className="relative aspect-video md:aspect-auto">
          <Link href="#">
            <Image
              alt="Trenda marketplace virtual stores"
              className="object-cover"
              src={IMAGES.slider2}
              width={0}
              height={0}
              sizes="100vw"
              layout="fill"
              
            />
          </Link>
        </div>
        <div className="self-center px-5 pb-10">
          <Link href="#">
            <div className="max-w-2xl">
              <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-white lg:text-5xl">
                Africa's Largest Social Marketplace with Verified Network of
                Businesses
              </h1>

              <div className="flex flex-col mt-4 text-gray-500 md:mt-8">
                <div className="flex flex-col gap-3 md:items-center md:flex-row">
                  <div className="flex flex-col gap-3">
                    <div className="block text-white font-sans text-lg">
                      <p className="inline-block mb-3">
                        Propel Your Business into the Digital Frontier with
                        Trenda
                        <br />
                        The Rapidly Expanding Marketplace for Individuals,
                        Entrepreneurs, and Businesses!
                      </p>
                      <p>
                        Ready to make your mark in the online world? Seize the
                        opportunity to transition your business seamlessly with
                        Trenda. Today is the day to embrace the digital era and
                        watch your business thrive on Trenda!
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="inline-block w-40 bg-white px-2 py-3 text-center font-medium text-black focus:outline-none"
                    >
                      Become a Partner
                    </Link>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Second section */}
      <div className="grid md:grid-cols-2 md:min-h-[calc(80vh-25vh)] bg-teal-50">
        <div className="self-center px-5 pb-10">
          <Link href="#">
            <div className="max-w-2xl">
              <h1 className="mt-2 mb-3 text-3xl font-semibold text-teal-700 lg:text-5xl">
                Unlock the Potential for Growth on Trenda!
              </h1>
              <div className="flex flex-col mt-4 text-gray-500 md:mt-8">
                <div className="flex flex-col gap-3 md:items-center md:flex-row">
                  <div className="flex flex-col gap-3">
                    <div className="block text-teal font-normal text-lg">
                      <ul>
                        <li className="flex items-center">
                          <span className="text-green-600 material-icons">
                            radio_button_checked
                          </span>
                          <p>Get seller protection</p>
                        </li>
                        <li className="flex items-center my-2">
                          <span className="text-green-600 material-icons">
                            radio_button_checked
                          </span>
                          <p>100% Verified Network of Businesses</p>
                        </li>
                        <li className="flex items-center my-2">
                          <span className="text-green-600 material-icons">
                            radio_button_checked
                          </span>
                          <p>Fastest Growing Marketplace</p>
                        </li>
                        <li className="flex items-center my-2">
                          <span className="text-green-600 material-icons">
                            radio_button_checked
                          </span>
                          <p>Reach the Right People</p>
                        </li>
                        <li className="flex items-center my-2">
                          <span className="text-green-600 material-icons">
                            radio_button_checked
                          </span>
                          <p>Unmatched Growth</p>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="#"
                      className="inline-block w-30 bg-teal-700 px-2 py-2 text-center font-medium text-white hover:bg-teal-700 focus:outline-none"
                    >
                      Contact us
                    </Link>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative aspect-video md:aspect-auto">
          <Link href="#">
            <Image
              alt="Trenda marketplace hero image"
              className="object-cover"
              src={IMAGES.slider4}
              width={0}
              height={0}
              sizes="100vw"
              layout="fill"
            
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfilePage;
