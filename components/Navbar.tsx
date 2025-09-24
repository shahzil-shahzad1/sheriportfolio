import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { PageDef } from "@/lib/data";

type NavbarProps = {
  activeSectionId: string;
  pages: PageDef[];
};

const Navbar = ({ activeSectionId, pages }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-3 -translate-x-1/2 z-50 bg-[#18181B] shadow-md rounded-full w-fit navbarleft">
      {/* Desktop Menu */}
      <ul className="hidden nav-show justify-center items-center gap-2 px-2 py-4">
        {pages.map((page, index) => (
          <li key={index}>
            <a
              href={`#${page.id}`}
              className={`text-sm sm:text-base font-semibold transition-colors rounded-full px-4 py-2 duration-200 hover:bg-[#fc2f23] hover:text-white ${
                activeSectionId === page.id
                  ? "bg-[#fc2f23] text-white border border-[#fc2f23]"
                  : "text-gray-100 hover:text-black"
              }`}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="nav-hide items-center px-4 py-3">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-100 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown #FF3B30 -left-[70%]*/}
      {menuOpen && (
        <div className="absolute top-full left-0 w-fit bg-[#18181B] rounded-lg shadow-md mt-2 nav-hide">
          <ul className="flex flex-col items-center gap-2 py-4">
            {pages.map((page, index) => (
              <li key={index} className="w-full">
                <a
                  href={`#${page.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full text-center text-sm font-semibold transition-colors px-4 py-2 rounded-md hover:bg-[#fc2f23] hover:text-white ${
                    activeSectionId === page.id
                      ? "bg-[#fc2f23] text-white border border-[#fc2f23]"
                      : "text-gray-100 hover:text-black"
                  }`}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
