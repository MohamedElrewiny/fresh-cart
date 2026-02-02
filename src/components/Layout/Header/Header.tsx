import { useState } from "react";
import Logo from "../../../Assets/Header/Logo.svg";
import { LiaSearchSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart, MdOutlineWindow } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [catOpen, setCatOpen] = useState(false); // categories dropdown

  return (
    <header className="border-b border-gray-300 py-4">
      <div className="container mx-auto px-4 flex flex-col gap-3">

        {/* Top Navbar */}
        <nav className="flex flex-wrap items-center justify-between gap-3">

          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>

          {/* Icons (mobile) */}
          <div className="flex items-center gap-3 md:hidden">
            <Link to="/userProfile">
              <FiUser className="text-2xl" />
            </Link>
            <Link to="/cart">
              <MdOutlineShoppingCart className="text-2xl" />
            </Link>
            <button onClick={() => setOpen(!open)}>
              {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
          </div>

          {/* Search */}
          <div className="searchInput flex w-full md:flex-1 h-10 border border-gray-400 rounded-md order-3 md:order-none">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border-e text-md px-2 focus:outline-0 h-full border-gray-400"
            />
            <div className="h-full w-10 flex justify-center items-center cursor-pointer bg-gray-200 rounded-r-md">
              <LiaSearchSolid />
            </div>
          </div>

          {/* Side Links (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/userProfile">
              <FiUser className="text-2xl" />
            </Link>
            <Link to="/cart">
              <MdOutlineShoppingCart className="text-2xl" />
            </Link>
          </div>
        </nav>

        {/* Bottom Navbar */}
        <nav className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row items-start md:items-center gap-4 relative`}>

          {/* All Categories */}
          <div className="relative hidden md:block">
            <div
              onClick={() => setCatOpen(!catOpen)}
              className="bg-primary cursor-pointer text-white px-6 py-2 rounded-md flex items-center gap-2"
            >
              <MdOutlineWindow />
              <span>All Categories</span>
            </div>

            {/* Dropdown */}
            {catOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-400 z-50">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Dairy, Bread & Eggs
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Snacks & Munchies
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-md mx-2">
                    Fruits & Vegetables
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Cold Drinks & Juices
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Breakfast & Instant Food
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Bakery & Biscuits
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Chicken, Meat & Fish
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/brands">Brands</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
