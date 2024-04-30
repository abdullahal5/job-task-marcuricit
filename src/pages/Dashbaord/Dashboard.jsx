import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(true);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div className="flex items-start">
      <div>
        <Slider isSliderOpen={isSliderOpen} />
      </div>
      <div className="flex-1">
        <Navbar toggleSidebar={toggleSlider} />
        <div className="w-[1050px] mx-auto pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
