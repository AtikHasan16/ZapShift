import React from "react";
import { BiEnvelope, BiSearch } from "react-icons/bi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const centerData = useLoaderData();
  const serviceCenter = centerData.data;

  const position = [23.8041, 90.4152];

  return (
    <div className="urbanist bg-white p-10 md:p-15 rounded-4xl my-10 ">
      <div className="space-y-10">
        <h1 className="text-5xl font-bold text-cyan-950">
          We are available in 64 districts
        </h1>
        <div>
          <div className=" relative  w-5/12">
            <div>
              <label className="input validator  rounded-full bg-gray-100 w-full">
                <BiSearch size={24}></BiSearch>
                <input type="search" placeholder="search hare" className="" />
              </label>
            </div>

            <button className=" rounded-full  bg-primary px-4 py-2 font-bold text-black  absolute right-0 top-0">
              Search
            </button>
          </div>
          <div className="divider my-10"></div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-cyan-950 my-10">
            We deliver almost all over Bangladesh
          </h1>
          <div className="w-full h-200">
            <MapContainer
              center={position}
              zoom={7}
              scrollWheelZoom={false}
              className="h-200 rounded-2xl "
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {serviceCenter.map((data, index) => (
                <Marker key={index} position={[data.latitude, data.longitude]}>
                  <Popup>
                    <strong>{data.district}</strong>

                    <br />
                    {data.covered_area.join(", ")}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
