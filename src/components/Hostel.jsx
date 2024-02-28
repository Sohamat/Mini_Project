// Hostel.js

import React, { useState } from "react";
import { TbAirConditioning } from "react-icons/tb";
import { RiStarSFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { data } from "../data";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Hostel() {
  const [listedProperties, setListedProperties] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [inputText, setInputText] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [genderVal, setGenderVal] = useState("");

  //search filter input handler
  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  //price filter handler
  const priceChangeHandler = (e) => {
    setPriceValue(e.target.value);
  };

  // gender handle filter
  const genderChangeHandler = (e) => {
    setGenderVal(e.target.value);
  };

  //prev navigator
  const navigate = useNavigate();
  const gobackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="search w-full h-20 flex justify-start items-center gap-2 pl-32 bg-zinc-100 shadow-xl rounded-xl m-auto my-4">
        <input
          type="text"
          value={inputText}
          onChange={changeHandler}
          placeholder="Search..."
          className="px-2 py-1 w-96 border-zinc-300 border-2 rounded-lg font-semibold"
        />
        <button
          onClick={() => {
            const searchProperties = listedProperties.filter((res) => {
              return res.name.toLowerCase().includes(inputText.toLowerCase());
            });
            setFilterData(searchProperties);
          }}
          className="border-zinc-400 border-2 px-3 py-1 rounded-lg text-zinc-800 mr-4 hover:bg-black hover:text-white duration-700 ease-in-out"
        >
          Search
        </button>

        <div className="gender">
          <select
            value={genderVal}
            onChange={genderChangeHandler}
            className="px-2 py-1 border-zinc-300 border-2 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button
            onClick={() => {
              const genderFilter = listedProperties.filter(
                (item) => item.gender === genderVal
              );
              setFilterData(genderFilter);
            }}
            className="border-zinc-400 border-2 px-3 py-1 rounded-lg text-zinc-800 ml-2 hover:bg-black hover:text-white duration-700 ease-in-out"
          >
            Filter by Gender
          </button>
        </div>

        <button
          className="border-zinc-500 border-2 font-semibold shadow-lg px-4 py-1 ml-5 rounded-lg hover:bg-black hover:text-white duration-700 ease-in-out"
          onClick={() => {
            const bestDeals = listedProperties.filter((item) => item.rating > 4);
            setFilterData(bestDeals);
          }}
        >
          Top Deals
        </button>

        <div className="price ml-20">
          <input
            type="number"
            value={priceValue}
            onChange={priceChangeHandler}
            placeholder="Enter price"
            className="pl-2 py-1 w-28 border-blue-300 border-2 rounded-lg "
          />
          <button
            onClick={() => {
              const priceFilter = listedProperties.filter(
                (item) => item.price == priceValue
              );
              setFilterData(priceFilter);
            }}
            className="border-pink-400 border-2 px-3 py-1 rounded-lg text-blue-400 ml-2 hover:bg-black hover:text-white duration-700 ease-in-out"
          >
            Explore
          </button>

          <button
            onClick={gobackHandler}
            className="bg-blue-400 px-3 py-1 ml-4 border-zinc-900 border-2 rounded-lg hover:bg-black hover:text-white font-semibold ease-in-out duration-500 "
          >
            Previous
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 justify-center overflow-y-auto overflow-x-hidden ">
        {filterData.map((item, index) => (
        <Link to={`/PG/{hostel.id}`} key={index} className="relative w-[250px] h-[380px] bg-white m-4 rounded-tr-3xl rounded-bl-3xl border-2 pb-2 shadow-md shadow-zinc-400">
            <div className=" absolute w-10 h-5 bg-black rounded-tl-lg rounded-br-lg mt-2">
              {item.gender == "Male" ? (
                <h3 className="text-white text-sm  text-center">M</h3>
              ) : (
                <h3 className="text-white text-sm  text-center">F</h3>
              )}
            </div>
            <div className="top w-full h-[40%]  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl shadow-xl p-2">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover rounded-3xl "
              />
            </div>

            <div className="bottom w-full h-[60%]    rounded-bl-3xl p-2 font-sans">
              <h1 className="text-lg font-semibold font-['gilroy']">
                {item.name}
              </h1>
              <h1 className="text-lg font-semibold text-blue-600 my-1">
                Rs. {item.price}/-
              </h1>
              <p className="text-sm tracking-tighter">{item.desc}</p>
              <div className="flex items-center g-2 shadow-xl">
                <div className="flex items-center px-1 border-2 border-blue-300 rounded-lg font-['gilroy']">
                  {<PiBowlFoodDuotone />}
                  <h3 className=" text-sm  p-1 mr-2 ">
                    {item.isVeg ? (
                      <h3 className="font-semibold text-green-600">Veg Only</h3>
                    ) : (
                      <h3 className="text-red-600 font-semibold tracking-tight">
                        Non Veg
                      </h3>
                    )}
                  </h3>
                </div>
                <div className="flex items-center m-2 border-2 border-blue-300 rounded-lg pl-1 tracking-tight">
                  {<TbAirConditioning />}
                  <h3 className=" text-sm p-1 mr-2 ">
                    {item.isAc ? "AC" : "Non-AC"}
                  </h3>
                </div>
              </div>

              <div className="star w-full flex justify-between items-center gap-6 ">
                <div className="border w-[100px] rounded-lg bg-green-500  py-1 px-1 flex justify-center items-center gap-2 mt-3">
                  <h2 className="font-medium text-white ">
                    {item.rating} stars
                  </h2>
                  {<RiStarSFill className="text-yellow-300" />}
                </div>

                <div className="flex justify-between items-center bg-blue-500 rounded-lg py-1.5 px-3 mt-3 mr-4 ">
                  <button className="text-white text-sm flex justify-center items-center gap-1  ">
                    {" "}
                    Explore {<FaArrowRightLong />}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Hostel;
