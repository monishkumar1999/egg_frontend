import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { HiArrowLongDown } from "react-icons/hi2";
import { Link,useLocation } from "react-router-dom";

function Sidebar() {
  const [isopen, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(true);
  const [Menus, setmenu] = useState([]);
  const location = useLocation();
  const [activeMenu,setActiveMenu]=useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/showMenu");

        setmenu(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty array ensures this runs only once, on component mount

  const toggleSubmenu = (index) => {
    setsubmenuOpen((prevState) => ({
      [index]: !prevState[index],
    }));
  };

  if (!Menus) {
    return <div>Error loading menu data</div>; // Display error state if menus is null
  }

  return (
    <div
      className={` p-4 w-60 h-screen relative ${
        isopen ? "w-72" : "w-32"
      } ease-in-out duration-500 bg-transparent `}
    >
      <div
        className={`absolute right-0 cursor-pointer hover:bg-gray-400 rounded-lg `}
        onClick={() => setOpen((prev) => !prev)}
      >
        {isopen ? <FaAngleLeft /> : <FaAngleRight />}
      </div>

      <div className="pt-2">
        <ul>
          {Menus.map((value, index) => {
            return (
              <>
               <li
  className="bg-transparent rounded relative hover:bg-slate-50 font-bold text-gray-500 h-11 pl-8 pt-2"
  onClick={() => {
    toggleSubmenu(index);
  }}
>
  {value.isUrl ? (
    <Link to={value.mainUrl}>{value.title}</Link>
  ) : (
    value.title
  )}

  {value.submenu && (
    <HiArrowLongDown className="absolute right-0 -translate-y-5" />
  )}
</li>


                {value.submenu && submenuOpen[index] && (
                  <ul>
                    {value.submenuItems.map((subMenus, index) => {
                      return (
                        <li
                          key={index}
                          className="cursor-pointer hover:bg-gray-100 pl-10 py-3 rounded-lg font-bold text-gray-500 duration-1000"
                        >
                          {subMenus.title}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
