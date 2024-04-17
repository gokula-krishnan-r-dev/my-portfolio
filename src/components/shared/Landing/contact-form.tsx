import { useCurser } from "@/components/provider/curserProvider";
import React, { useEffect, useRef } from "react";

const ContactForm = () => {
  const { isActive, setIsActive } = useCurser();
  return (
    <div
      onMouseLeave={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
      className="flex-1"
    >
      <div className="">
        <div className="flex items-center gap-8">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-700 rounded-full text-base px-6 py-4 w-full outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-700 rounded-full text-base px-6 py-4 w-full outline-none"
          />
        </div>
        <textarea
          className="border rounded-3xl border-gray-700 mt-8 text-base px-6 py-4 w-full outline-none"
          placeholder="Enter a message"
          name="message"
          id="message"
          rows={8}
        />
      </div>
      <button className="border pt-6 hover:bg-white duration-500 hover:text-black font-medium hover:scale-105 border-gray-700 rounded-full text-xl px-6 py-4 w-full outline-none">
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
