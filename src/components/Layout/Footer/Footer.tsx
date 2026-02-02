import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import appstore from "../../../Assets/footer/appstore-btn.svg";
import playstore from "../../../Assets/footer/googleplay-btn.svg";
import amazonpay from "../../../Assets/footer/amazonpay.svg";
import americanExpress from "../../../Assets/footer/american-express.svg";
import mastercard from "../../../Assets/footer/mastercard.svg";
import paypal from "../../../Assets/footer/paypal.svg";
import visa from "../../../Assets/footer/visa.svg";



const Footer = () => {
  return (
    <footer className="bg-[#f6faf7] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li className="hover:text-(--Primary-Color)">Vegetables & Fruits</li>
              <li className="hover:text-(--Primary-Color)">Breakfast & instant food</li>
              <li className="hover:text-(--Primary-Color)">Bakery & Biscuits</li>
              <li className="hover:text-(--Primary-Color)">Atta, rice & dal</li>
              <li className="hover:text-(--Primary-Color)">Sauces & spreads</li>
              <li className="hover:text-(--Primary-Color)">Organic & gourmet</li>
              <li className="hover:text-(--Primary-Color)">Baby care</li>
              <li className="hover:text-(--Primary-Color)">Cleaning essentials</li>
              <li className="hover:text-(--Primary-Color)">Personal care</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4"> </h3>
            <ul className="space-y-2 mt-8">
              <li className="hover:text-(--Primary-Color)">Dairy, bread & eggs</li>
              <li className="hover:text-(--Primary-Color)">Cold drinks & juices</li>
              <li className="hover:text-(--Primary-Color)">Tea, coffee & drinks</li>
              <li className="hover:text-(--Primary-Color)">Masala, oil & more</li>
              <li className="hover:text-(--Primary-Color)">Chicken, meat & fish</li>
              <li className="hover:text-(--Primary-Color)">Paan corner</li>
              <li className="hover:text-(--Primary-Color)">Pharma & wellness</li>
              <li className="hover:text-(--Primary-Color)">Home & office</li>
              <li className="hover:text-(--Primary-Color)">Pet care</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get to know us</h3>
            <ul className="space-y-2">
              <li className="hover:text-(--Primary-Color)">Company</li>
              <li className="hover:text-(--Primary-Color)">About</li>
              <li className="hover:text-(--Primary-Color)">Blog</li>
              <li className="hover:text-(--Primary-Color)">Help Center</li>
              <li className="hover:text-(--Primary-Color)">Our Value</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Consumers</h3>
            <ul className="space-y-2">
              <li className="hover:text-(--Primary-Color)">Payments</li>
              <li className="hover:text-(--Primary-Color)">Shipping</li>
              <li className="hover:text-(--Primary-Color)">Product Returns</li>
              <li className="hover:text-(--Primary-Color)">FAQ</li>
              <li className="hover:text-(--Primary-Color)">Shop Checkout</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Become a Shopper</h3>
            <ul className="space-y-2">
              <li className="hover:text-(--Primary-Color)">Shopper</li>
              <li className="hover:text-(--Primary-Color)">Opportunities</li>
              <li className="hover:text-(--Primary-Color)">Become a Shopper</li>
              <li className="hover:text-(--Primary-Color)">Earnings</li>
              <li className="hover:text-(--Primary-Color)">Ideas & Guides</li>
              <li className="hover:text-(--Primary-Color)">New Retailers</li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2">Freshcart programs</h3>
            <ul className="space-y-2">
              <li className="hover:text-(--Primary-Color)">Gift Cards</li>
              <li className="hover:text-(--Primary-Color)">Promos & Coupons</li>
              <li className="text-green-600 font-medium">Freshcart Ads</li>
              <li className="hover:text-(--Primary-Color)">Careers</li>
            </ul>
          </div>
        </div>

        <div className="border-t my-10 border-gray-400"></div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <p className="font-semibold mb-3">Payment Partners</p>
            <div className="flex items-center gap-4 text-sm">
              <img src={amazonpay} className="h-8" alt="amazonpay" />
              <img src={americanExpress} className="h-8" alt="american express" />
              <img src={mastercard} className="h-8" alt="mastercard" />
              <img src={paypal} className="h-8" alt="paypal" />
              <img src={visa} className="h-8" alt="visa" />
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Get deliveries with FreshCart</p>
            <div className="flex gap-3">
              <img src={appstore} className="h-10" alt="App Store" />
              <img src={playstore} className="h-10" alt="Play Store" />
            </div>
          </div>

        </div>

        <div className="border-t border-gray-400 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2023 - 2026 Mohamed Morad. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <span>Follow us on</span>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-8 h-8 border rounded-full flex items-center justify-center text-white bg-blue-600  transition"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 border rounded-full flex items-center justify-center text-white bg-sky-500  transition"
                >
                  <FaTwitter size={14} />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 border rounded-full flex items-center justify-center text-white bg-pink-500  transition"
                >
                  <FaInstagram size={14} />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer >

  )
}

export default Footer