import React, { useEffect, useState } from "react";
import Image from "next/image";

function Card({
  id,
  stationCode,
  stationPath,
  date,
  map,
  city,
  state,
  distance,
}) {
  return (
    <div className="flex items-center justify-between bg-gray-900 mx-8 my-2 px-6 py-6 text-white rounded-lg ">
      <div className="flex space-x-8">
        <Image
          src={map}
          width="250"
          height="125"
          className="border rounded-lg"
          loading="lazy"
        />
        <div>
          <p>{`Ride Id: ${id}`}</p>
          <p>{`Origin Station: ${stationCode}`}</p>
          <p>{`station_path: [${stationPath.toString()}]`}</p>
          <p>{`Date: ${date}`}</p>
          <p>{`Distance: ${distance}`}</p>
        </div>
      </div>

      <div className="flex space-x-6 text-xs mb-auto">
        <p className="bg-black flex items-center px-2 py-1 rounded-full">
          {city.slice(0, 5)}
        </p>
        <p className="bg-black flex item-center px-2 py-1 rounded-full">
          {state.slice(0, 5)}
        </p>
      </div>
    </div>
  );
}

export default Card;
