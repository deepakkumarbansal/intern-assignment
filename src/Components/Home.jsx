import React from "react";
import { Link } from "react-router-dom";

const Home = ({ loginStatus }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      {loginStatus ? (
        <div className="w-full  flex justify-center items-center flex-col">
          <div className="w-full px-4 mt-5">
            <div className="bg-[#5E5E5E82] rounded-t-[20px] rounded-b-[20px] h-full pb-[72px]">
              <div className="w-full flex justify-center bg-[#1A2C2C99] py-2 rounded-full mb-12">
                <p>Employee Productivity Dashboard</p>
              </div>
              <div className="w-full">
                <div className="flex justify-between pl-7 pr-9">
                  <p>Productivity on Monday</p>
                  <p>4%</p>
                </div>
                <div className="w-7/12 pl-4 mt-2 mb-5">
                  <div className="w-[4%] h-2.5 bg-[#36A54680] border-2 border-[#36A546] rounded-full"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between pl-7 pr-9">
                  <p>Productivity on Tuesday</p>
                  <p>92%</p>
                </div>
                <div className="w-7/12 pl-4 mt-2 mb-5">
                  <div className="w-[92%] h-2.5 bg-[#36A54680] border-2 border-[#36A546] rounded-full"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between pl-7 pr-9">
                  <p>Productivity on Wednesday</p>
                  <p>122%</p>
                </div>
                <div className="w-7/12 pl-4 mt-2 mb-5">
                  <div className="w-[122%] h-2.5 bg-[#36A54680] border-2 border-[#36A546] rounded-full"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between pl-7 pr-9">
                  <p>Productivity on Thursday</p>
                  <p>93%</p>
                </div>
                <div className="w-7/12 pl-4 mt-2 mb-5">
                  <div className="w-[93%] h-2.5 bg-[#36A54680] border-2 border-[#36A546] rounded-full"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between pl-7 pr-9">
                  <p>Productivity on Friday</p>
                  <p>89%</p>
                </div>
                <div className="w-7/12 pl-4 mt-2 mb-5">
                  <div className="w-[89%] h-2.5 bg-[#36A54680] border-2 border-[#36A546] rounded-full"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between pl-7 pr-9">
                  <p>Productivity on Saturday</p>
                  <p>98%</p>
                </div>
                <div className="w-7/12 pl-4 mt-2">
                  <div className="w-[98%] h-2.5 bg-[#36A54680] border-2 border-[#36A546] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link to={"/"} className="text-[#36A546]">
          Login Now
        </Link>
      )}
    </div>
  );
};

export default Home;
