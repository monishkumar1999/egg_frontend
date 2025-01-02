import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { HiArrowLongDown } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open/close state
  const [submenuOpen, setSubmenuOpen] = useState({}); // Tracks submenu open states
  const [menus, setMenus] = useState([]); // Menu data fetched from API
  const location = useLocation(); // Current URL location
  const [activeMenu, setActiveMenu] = useState(""); // Active menu item based on URL

  // Fetch menu data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/showMenu");
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

  // Update active menu on location change
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  // Toggle specific submenu open/close
  const toggleSubmenu = (index) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  if (!menus || menus.length === 0) {
    return <div>Error loading menu data</div>; // Handle empty or error state
  }

  return (
    <div
      className={`p-4 h-screen relative ${
        isOpen ? "w-72" : "w-32 "
      } ease-in-out duration-500 bg-gray-100 shadow-lg`}
    >
      {/* Sidebar Toggle Button */}
      <div
        className="absolute right-0 cursor-pointer hover:bg-gray-300 rounded-lg p-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
      </div>

      {/* Menu List */}
      <div className="pt-4">
        <ul>
          {menus.map((menu, index) => (
            <li key={index} className="mb-2">
              {/* Main Menu Item */}
              <div
                className={`flex items-center justify-between bg-transparent rounded-lg px-4 py-2 font-bold cursor-pointer hover:bg-gray-200 ${
                  activeMenu === menu.mainUrl
                    ? " text-black-800 bg-gray-400"
                    : "text-gray-600"
                }`}
                onClick={() => menu.submenu && toggleSubmenu(index)}
              >
                {menu.isUrl ? (
                  <Link to={menu.mainUrl} className="flex-1">
                    {menu.title}
                  </Link>
                ) : (
                  <span className="flex-1">{menu.title}</span>
                )}
                {menu.submenu && (
                  <HiArrowLongDown
                    className={`transition-transform duration-300 ${
                      submenuOpen[index] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Submenu Items */}
              {menu.submenu && submenuOpen[index] && (
                <ul className="pl-6 mt-2">
                  {menu.submenuItems.map((submenu, subIndex) => (
                    <li key={`submenu-${index}-${subIndex}`}>
                      <Link
                        to={submenu.submenuUrl}
                        className={`block px-4 py-2 rounded-lg font-medium hover:bg-gray-100 ${
                          activeMenu === submenu.submenuUrl
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-600"
                        }`}
                      >
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
