"use client";

import React from "react";
import { navmenu } from "../data/navmenu";
import Button from "../ui/Button";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="flex justify-center gap-7">
      {navmenu?.map((el, idx) => (
        <Link href={el.link} key={idx}>
          <Button>{el.label}</Button>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
