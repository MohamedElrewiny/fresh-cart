import Logo from "../../../Assets/Header/Logo.svg";
import { LiaSearchSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineWindow } from "react-icons/md";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="container border-b flex flex-col gap-3 border-gray-300 py-4">
      {/* Top Navbar */}
      <nav className="  flex justify-between items-center gap-[50px]">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Search */}
        <div className="searchInput flex flex-1 h-10 border border-gray-400 rounded-md ">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border-e text-md px-2 focus:outline-0 h-full border-gray-400"
          />
          {/* Search Icon */}
          <div className="h-full w-10 flex justify-center items-center cursor-pointer bg-gray-200 rounded-r-md">
            <LiaSearchSolid />
          </div>
        </div>

        {/* Side Link */}
        <div className="sideLinks flex items-center gap-3">
          <Link to={'/userProfile'}>
            <FiUser className="text-2xl" />
          </Link>
          <Link to={'/cart'}>
            <MdOutlineShoppingCart className="text-2xl" />
          </Link>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className=" flex  items-center gap-4">
        {/* All Categories */}
        <div className="bg-primary cursor-pointer text-white px-6 py-2 rounded-md flex items-center gap-2">
          <MdOutlineWindow/>
          <span>All Categories</span>
        </div>

        {/* Menu Items */}
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer"><Link to={'/'}>Home</Link></li>
          <li className="cursor-pointer"><Link to={'/products'}>Products</Link></li>
          <li className="cursor-pointer"><Link to={'/brands'}>Brands</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
