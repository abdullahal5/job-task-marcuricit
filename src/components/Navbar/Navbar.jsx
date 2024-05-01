import { IoMenu } from "react-icons/io5";
import { IoScan } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { RiGlobalLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  return (
    <div style={{ background: "linear-gradient(135deg, #00feba, #5b548a)" }}>
      <div className="bg-white h-[68px] px-3 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <p
            onClick={toggleSidebar}
            className="text-2xl text-black font-semibold hover:bg-gray-200 px-2 py-2 rounded-full cursor-pointer duration-300"
          >
            <IoMenu />
          </p>
          <Link to="/create">
            <button className="text-xl bg-gray-100 px-3 py-1 rounded-lg">
              Create New +
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 w-54 py-2 rounded-lg outline-none border pl-4"
              placeholder="Search..."
            />
            <span>
              <IoSearchSharp className="absolute right-5 top-3 text-[#757575] text-xl" />
            </span>
          </div>
          <button className="text-2xl hover:bg-gray-200 px-2 py-2 rounded-full duration-300">
            <IoScan />
          </button>
          <button className="text-2xl hover:bg-gray-200 px-2 py-2 rounded-full duration-300">
            <LuLayoutGrid />
          </button>
          <button className="text-2xl hover:bg-gray-200 px-2 py-2 rounded-full duration-300">
            <RiGlobalLine />
          </button>
          <div className="relative">
            <button className="text-2xl hover:bg-gray-200 px-2 py-2 rounded-full duration-300">
              <IoMdNotificationsOutline />
            </button>
            <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white flex justify-center items-center rounded-full text-sm">
              6
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            ref={profileRef}
            className="flex items-center gap-2 hover:bg-gray-300 rounded-lg px-3 duration-300 py-1"
          >
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1714311588~exp=1714315188~hmac=132f6cfc95a4b13c07246df05180b36f2c7adb32cb108939e8378cfdee900b3e&w=740"
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="font-semibold text-sm">Jhon Doe</p>
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          <button className="text-2xl hover:bg-gray-200 px-2 py-2 rounded-full duration-300">
            <IoSettingsOutline />
          </button>
          {isOpen && (
            <div className="absolute top-16 right-14 bg-white border border-gray-200 rounded-lg shadow-md py-2 px-1 w-44 z-50">
              <ul>
                <li className="hover:bg-[#ece7e7] cursor-pointer duration-300 rounded-md px-4 py-2">
                  My Profile
                </li>
                <li className="hover:bg-[#ece7e7] cursor-pointer duration-300 rounded-md px-4 py-2">
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
