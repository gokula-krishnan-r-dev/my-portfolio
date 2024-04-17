import React from "react";
import ContactForm from "./contact-form";
import Link from "next/link";
import { useCurser } from "@/components/provider/curserProvider";

const ContactUs = () => {
  const { isActive, setIsActive } = useCurser();
  return (
    <div id="contact" className="px-24 py-12">
      <div className="">
        <h1 className="text-8xl font-semibold">
          <span>LET’S WORK</span>
          <br />
          <span className="pl-96">
            TOGETHER <br />
          </span>
        </h1>
      </div>
      <div className="flex pt-12">
        <div className="flex gap-12">
          <div className="flex-1">
            <p className="text-xl">
              WE’RE OPEN TO TALK TO GOOD PEOPLE. JUST SAY HELLO AND WE’LL START
              A PRODUCTIVE COOPERATION.
            </p>
            <br />
            <br />
            <p className="text-xl uppercase">
              Call us:{" "}
              <Link href="tel:+918608990584" className="text-link">
                +91 8608990584
              </Link>
              <br />
              Say hi:{" "}
              <Link
                href="mailto:gokulakrishnanr812@gmail.com"
                className="text-link"
              >
                gokulakrishnanr812@gmail.com
              </Link>
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default ContactUs;
