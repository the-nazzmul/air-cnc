import React from "react";
import Container from "../../Container";
import Logo from "./Logo";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="w-full fixed z-10 bg-white">
      <div className="border-b-[1px] py-2">
        <Container>
          <div className="flex items-center justify-between gap-4 md:gap-0">
            <Logo></Logo>
            <Search></Search>
            <MenuDropdown></MenuDropdown>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
