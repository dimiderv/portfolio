"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import logo from "../icon.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { title: "About", href: "#about" },
  { title: "Work", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  function handleEscape(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  function navigate(event, href) {
    setIsOpen(false);
    // Move keyboard focus out of the menu before its links are hidden.
    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start" });
      window.history.replaceState(null, "", href);
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#121212]/95 backdrop-blur-sm">
      <nav aria-label="Main navigation" className="page-container" onKeyDown={handleEscape}>
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#about" onClick={(event) => navigate(event, "#about")} className="text-lg font-semibold tracking-tight text-white">
            <Image src={logo} alt="Dejvi Dervishi — home" width={62} height={62} className="brand-logo" sizes="62px" />
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(event) => navigate(event, link.href)} className="py-3 text-sm text-gray-300 transition-colors hover:text-purple-300">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
          >
            {isOpen ? <XMarkIcon aria-hidden="true" className="h-5 w-5" /> : <Bars3Icon aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
        <ul id="mobile-navigation" className={`${isOpen ? "flex" : "hidden"} flex-col gap-1 border-t border-white/10 pb-5 pt-3 md:hidden`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(event) => navigate(event, link.href)} className="block rounded-lg px-3 py-3 text-gray-200 hover:bg-white/5">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
