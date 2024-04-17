// Footer.js
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Line from "./shared/line";

const Footer = ({ companyName, year, socialLinks }: any) => {
  const backToTopHref = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="">
      <div className="container mx-auto px-4 py-20">
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="mb-10 md:mb-0 text-xl text-center md:text-left">
              © {companyName} {year}.
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link: any) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="nofollow noopener"
                  className="hover:text-gray-300 text-xl transition duration-150 ease-in-out"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <div className="text-center text-xl  md:text-right">
              <button
                onClick={backToTopHref}
                className="hover:text-gray-300 border px-6 py-4 rounded-full border-gray-700 gap-6 flex items-center transition duration-150 ease-in-out"
              >
                <span className="p-4 rounded-full border border-gray-700">
                  <ArrowUpIcon />
                </span>
                Back to top
              </button>
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="text-center text-lg mt-5 pb-5">
          Made with love for great people.
          <div className="text-sm">
            Read{" "}
            <Link href="#" className="hover:text-gray-300">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
