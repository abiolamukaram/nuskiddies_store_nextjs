
"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const {user} = useUser();
  
  
  const [dropdownMenu, setDropdownMenu] = useState(false)

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white">
      <Link href="/">
        <Image
          src="/Nuskiddies.png"
          alt="logo"
          width={130}
          height={100}
        />
      </Link>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py1 hover:bg-black hover:text-white"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart (0)</p>
        </Link>

        {user && <Menu className="cursor-pointer" onClick={() => setDropdownMenu(!dropdownMenu)}/>}

        {user && dropdownMenu && (
          <div className="absolute top-24 right-14 flex flex-col gap-2 p-3 rounded-lg border bg-white text-base-bold">
            <Link href="/wishlist" className="hover:text-red-1">Wishlist</Link>
            <Link href="/orders" className="hover:text-red-1">Orders</Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl = "sign-in"/>
          // <UserButton redirectUrl="/sign-in" />
        ) : (
        <Link href="/sign-in">
          <CircleUserRound />
        </Link>) }
      </div>
    </div>
  );
};

export default Navbar;
