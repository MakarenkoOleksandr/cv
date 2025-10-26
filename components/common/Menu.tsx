"use client";

import React, { useState } from "react";
import { navmenu } from "../data/navmenu";
import Button from "../ui/Button";
import Link from "next/link";
import ManagedDrawer from "./Drawer";

const Menu = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <nav className="flex justify-center gap-7">
        {navmenu?.map((el, idx) =>
          el.label === "Contacts" ? (
            <div key={idx} onClick={() => setShow(true)}>
              <Button>{el.label}</Button>
            </div>
          ) : (
            <Link href={el.link} key={idx}>
              <Button>{el.label}</Button>
            </Link>
          )
        )}
      </nav>
      <ManagedDrawer show={show} close={() => setShow(false)} />
    </>
  );
};

export default Menu;
