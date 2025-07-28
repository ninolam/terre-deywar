import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { headerLinks } from "@/utils/data";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__container">
        <Link href="/">
          <Image
            className="Header__logo"
            src="/logo.jpeg"
            alt="Logo"
            width={90}
            height={90}
          />
        </Link>
        <nav className="Header__nav">
          <ul className="Header__links">
            {headerLinks.map((link) => (
              <li key={link.label}>
                <Link className="Header__link" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button text="Réserver" classNameModifier="primary" />
      </div>
    </header>
  );
};

export default Header;
