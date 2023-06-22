import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="mx-auto max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:py-20 lg:pb-0 md:pb-0 bg-fifth">
    <div className="w-full pt-5 text-white bg-fifth">
      <div className="mx-auto w-11/12 max-w-screen">
        <div className="grid gap-7 lg:gap-16 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-16">
          <div className="sm:col-span-2">
            <Link
              to="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-200 uppercase">
                Paropakaaree Foundation
              </span>
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-200">
                <span className="font-semibold underline">
                  Registered Address
                </span>
                : 1/4, F/F Madanpur Khadar Opp Gate No.-2. Near Pocket-C Sarita
                Vihar, Delhi-110076.
                <br /> <br />
                <span className="font-semibold underline">Head Office</span>:
                House no. 22/634, Ground Floor. Lane-22, Madangir DDA Flats,
                South Delhi-11062, India
              </p>
              <p className="mt-4 text-sm text-gray-200">
                +(91) 9654035922
                <br />
                Support@paropakaarefoundation.org
              </p>
              <p className="mt-4 text-md text-gray-200">Contact Us</p>
              <div className="flex items-center mt-1 space-x-7">
                <FaFacebook />
                <FaYoutube />
                <FaInstagram />
              </div>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-200">
              Registered Address
            </span>
            <div className="flex items-center mt-1">
              <iframe
                title="Registered Address"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112171.04123491645!2d77.295121!3d28.529347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce79f0e2bbd21%3A0xfb373c351f620dda!2sHealthood%20Treatment%20Services!5e0!3m2!1sen!2sus!4v1685023942805!5m2!1sen!2sus"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-200">
              Head Office
            </span>
            <div className="flex items-center mt-1 space-x-7">
              <iframe
                title="Head Office"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56091.24062653054!2d77.228255!3d28.518596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce15d8308379f%3A0x7c47a6eeb923b66a!2sDDA%20Flat%20Madangir!5e0!3m2!1sen!2sus!4v1685023754557!5m2!1sen!2sus"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-400">
            © Copyright 2023 paropakaareefoundation.org All rights reserved
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                to="/faqs"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-n-conditions"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
