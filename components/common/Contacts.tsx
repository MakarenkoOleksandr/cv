"use client";

import React from "react";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

interface Props {
  close: () => void;
}

const Contacts = ({ close }: Props) => {
  return (
    <div className="bg-black h-full border border-main relative">
      <div
        className="absolute top-2 right-2 transition-all hover:scale-125 cursor-pointer"
        onClick={close}
      >
        <FiX size={24} color="currentColor" />
      </div>
      <div className="p-5">
        <div className="w-full flex justify-center pb-10">
          <Image
            className="rounded-md shadow-image"
            src={"/assets/images/photo.jpg"}
            width={250}
            height={100}
            alt="photo"
          />
        </div>
        <div className="flex flex-col gap-3 pl-5 items-center">
          <div className="flex items-center gap-4">
            <FiPhone />
            <p className="text-xl">+34604469813</p>
          </div>
          <Link
            href={"mailto:majop11111@gmail.com"}
            className="flex items-center gap-4 cursor-pointer"
          >
            <FiMail />
            <p className="text-xl">majop11111@gmail.com</p>
          </Link>
          <div className="flex w-full justify-center">
            <Link
              href={"https://t.me/Sm911"}
              className="cursor-pointer mr-5"
              target="_blank"
            >
              <FaTelegramPlane
                className="transition-all hover:scale-125"
                size={22}
              />
              <p className="text-xl"></p>
            </Link>
            <Link
              href={"https://wa.me/+34604469813"}
              className="cursor-pointer mr-5"
              target="_blank"
            >
              <FaWhatsapp
                className="transition-all hover:scale-125"
                size={22}
              />
              <p className="text-xl"></p>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/oleksandr-makarenko-8a15b8245/"
              }
              target="_blank"
              className="cursor-pointer"
            >
              <FaLinkedinIn
                className="transition-all hover:scale-125"
                size={22}
              />
              <p className="text-xl"></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
