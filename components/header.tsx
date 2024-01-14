import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  return (
    <Navbar rounded>
      <NavbarBrand as={Link} href="/">
        <Image
          src="/next.svg"
          className="mr-3 h-6 sm:h-9"
          width={100}
          height={100}
          alt="NextJS Practise"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Practise
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/dashboard">
          Dashboard
        </NavbarLink>
        <NavbarLink as={Link} href="/dashboard#blue-div">
          Blue Dashboard
        </NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
