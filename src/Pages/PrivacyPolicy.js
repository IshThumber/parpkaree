import React from "react";
import NavbarTop from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-primary">
        <nav>
          <NavbarTop />
        </nav>

        <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:p-0 lg:pb-10 md:pb-0 mt-3">
          <div className="mx-auto sm:text-center p-1 align-top mb-10">
            <h1 className=" mb-6 font-serif text-3xl font-bold mx-auto text-center sm:text-left text-gray-900 sm:text-4xl md:mx-auto">
              Privacy Policy
            </h1>
          </div>
          <div className="flex justify-center gap-3 w-full mx-auto sm:flex-row flex-col">
            <div className="w-full p-4 flex">
              <div className="flex flex-col items-left justify-start ">
                <div className="max-w rounded-md text-start p-2">
                  <p className="text-gray-700 w-full leading-relaxed">
                    At Paropakaaree Foundation, accessible from{" "}
                    <Link
                      to="/"
                      className="underline cursor-pointer text-brown-400"
                    >
                      https://paropakaareefoundation.org/
                    </Link>
                    , one of our main priorities is the privacy of our visitors.
                    This Privacy Policy document contains types of information
                    that is collected and recorded by Paropakaaree Foundation
                    and how we use it.
                  </p>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    This Privacy Policy applies only to our online activities
                    and is valid for visitors to our website with regards to the
                    information that they shared and/or collect in Paropakaaree
                    Foundation. This policy is not applicable to any information
                    collected offline or via channels other than this website.
                  </p>
                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    Consent
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    By using our website, you hereby consent to our Privacy
                    Policy and agree to its terms.
                  </p>

                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    Information we collect
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    The personal information that you are asked to provide, and
                    the reasons why you are asked to provide it, will be made
                    clear to you at the point we ask you to provide your
                    personal information.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    If you contact us directly, we may receive additional
                    information about you such as your name, email address,
                    phone number, the contents of the message and/or attachments
                    you may send us, and any other information you may choose to
                    provide.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    When you register for an Account, we may ask for your
                    contact information, including items such as name, company
                    name, address, email address, and telephone number.
                  </p>

                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    How we use your information
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    We use the information we collect in various ways, including
                    to:
                    <ul className="list-disc indent-4 ml-8 py-2">
                      <li>Provide, operate, and maintain our website</li>
                      <li>Improve, personalize, and expand our website</li>
                      <li>Understand and analyze how you use our website</li>
                      <li>
                        Develop new products, services, features, and
                        functionality
                      </li>
                      <li>
                        Communicate with you, either directly or through one of
                        our partners, including for customer service, to provide
                        you with updates and other information relating to the
                        website, and for marketing and promotional purposes
                      </li>
                      <li>Send you emails</li>
                      <li>Find and prevent fraud</li>
                    </ul>
                  </p>
                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    Log Files
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    {" "}
                    Paropakaaree Foundation follows a standard procedure of
                    using log files. These files log visitors when they visit
                    websites. All hosting companies do this and a part of
                    hosting services' analytics. The information collected by
                    log files include internet protocol (IP) addresses, browser
                    type, Internet Service Provider (ISP), date and time stamp,
                    referring/exit pages, and possibly the number of clicks.
                    These are not linked to any information that is personally
                    identifiable. The purpose of the information is for
                    analyzing trends, administering the site, tracking users'
                    movement on the website, and gathering demographic
                    information.
                  </p>

                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    Advertising Partners Privacy Policies
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    You may consult this list to find the Privacy Policy for
                    each of the advertising partners of Paropakaaree Foundation.
                  </p>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    Third-party ad servers or ad networks uses technologies like
                    cookies, JavaScript, or Web Beacons that are used in their
                    respective advertisements and links that appear on
                    Paropakaaree Foundation, which are sent directly to users'
                    browser. They automatically receive your IP address when
                    this occurs. These technologies are used to measure the
                    effectiveness of their advertising campaigns and/or to
                    personalize the advertising content that you see on websites
                    that you visit.
                  </p>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    Note that Paropakaaree Foundation has no access to or
                    control over these cookies that are used by third-party
                    advertisers.
                  </p>

                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    Third Party Privacy Policies
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    {" "}
                    Paropakaaree Foundation's Privacy Policy does not apply to
                    other advertisers or websites. Thus, we are advising you to
                    consult the respective Privacy Policies of these third-party
                    ad servers for more detailed information. It may include
                    their practices and instructions about how to opt-out of
                    certain options.{" "}
                  </p>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    You can choose to disable cookies through your individual
                    browser options. To know more detailed information about
                    cookie management with specific web browsers, it can be
                    found at the browsers' respective websites.
                  </p>

                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    GDPR Data Protection Rights
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    We would like to make sure you are fully aware of all of
                    your data protection rights. Every user is entitled to the
                    following:
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    The right to access - You have the right to request copies
                    of your personal data. We may charge you a small fee for
                    this service.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    The right to rectification - You have the right to request
                    that we correct any information you believe is inaccurate.
                    You also have the right to request that we complete the
                    information you believe is incomplete.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    The right to erasure - You have the right to request that we
                    erase your personal data, under certain conditions.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    The right to restrict processing - You have the right to
                    request that we restrict the processing of your personal
                    data, under certain conditions.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    The right to object to processing - You have the right to
                    object to our processing of your personal data, under
                    certain conditions.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    The right to data portability - You have the right to
                    request that we transfer the data that we have collected to
                    another organization, or directly to you, under certain
                    conditions.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    If you make a request, we have one month to respond to you.
                    If you would like to exercise any of these rights, please
                    contact us.
                  </p>

                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    Children's Information
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    Another part of our priority is adding protection for
                    children while using the internet. We encourage parents and
                    guardians to observe, participate in, and/or monitor and
                    guide their online activity.
                  </p>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    {" "}
                    Paropakaaree Foundation does not knowingly collect any
                    Personal Identifiable Information from children under the
                    age of 13. If you think that your child provided this kind
                    of information on our website, we strongly encourage you to
                    contact us immediately and we will do our best efforts to
                    promptly remove such information from our records.
                  </p>

                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    Changes to This Privacy Policy
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    We may update our Privacy Policy from time to time. Thus, we
                    advise you to review this page periodically for any changes.
                    We will notify you of any changes by posting the new Privacy
                    Policy on this page. These changes are effective
                    immediately, after they are posted on this page.
                  </p>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    Our Privacy Policy was created with the help of the{" "}
                    <a href="https://www.privacypolicygenerator.info">
                      Privacy Policy Generator
                    </a>
                    .
                  </p>

                  <h2 className="text-gray-700 w-full leading-relaxed mt-8 text-2xl underline font-bold">
                    Contact Us
                  </h2>

                  <p className="text-gray-700 w-full leading-relaxed mt-3">
                    If you have any questions or suggestions about our Privacy
                    Policy, do not hesitate to{" "}
                    <Link
                      to="/contact-us"
                      className="underline cursor-pointer text-brown-400"
                    >
                      {" "}
                      contact us
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;
