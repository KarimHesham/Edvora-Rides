import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  selectActiveRides,
  setActiveRides,
} from "../../features/activeRidesSlice";

function SubHeader({ rides }) {
  const [activePanel, setActivePanel] = useState(0);
  const [upcomingRides, setUpcomingRides] = useState([]);
  const [pastRides, setPastRides] = useState([]);

  const dispatch = useDispatch();

  const activeRides = useSelector(selectActiveRides);

  useEffect(() => {
    sortRides();
  }, [activeRides]);

  // Function to sort rides according to date
  const sortRides = () => {
    const date = new Date();
    let upcoming = [];
    let past = [];

    rides.forEach((ride) => {
      if (Date.parse(ride.date) - Date.parse(date) > 0) upcoming.push(ride);
      else past.push(ride);
    });

    setUpcomingRides(upcoming);
    setPastRides(past);
  };

  // Function to trigger nearest rides view
  const viewNearestRides = () => {
    dispatch(setActiveRides({ activeRides: rides }));
    setActivePanel(0);
  };

  // Function to trigger upcoming rides view
  const viewUpcomingRides = () => {
    dispatch(setActiveRides({ activeRides: upcomingRides }));
    setActivePanel(1);
  };

  // Function to trigger past rides view
  const viewPastRides = () => {
    dispatch(setActiveRides({ activeRides: pastRides }));
    setActivePanel(2);
  };

  return (
    <div className="w-full h-14 flex items-center justify-between px-8 bg-gray-800">
      <div className="flex space-x-8 text-gray-400 font-bold">
        <p
          className={
            "hover:text-gray-300 cursor-pointer " +
            (activePanel === 0 && " text-white underline")
          }
          onClick={viewNearestRides}
        >
          Nearest Rides
        </p>
        <p
          className={
            "hover:text-gray-300 cursor-pointer " +
            (activePanel === 1 && " text-white underline")
          }
          onClick={viewUpcomingRides}
        >
          {`Upcoming Rides(${upcomingRides.length})`}
        </p>
        <p
          className={
            "hover:text-gray-300 cursor-pointer " +
            (activePanel === 2 && " text-white underline")
          }
          onClick={viewPastRides}
        >
          {`Past Rides(${pastRides.length})`}
        </p>
      </div>

      <div className="flex space-x-2 items-center text-sm text-white">
        <FilterListIcon fontSize="small" />
        <p>Filters</p>
      </div>
    </div>
  );
}

export default SubHeader;
