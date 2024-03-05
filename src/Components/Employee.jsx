import React from "react";

const Employee = ({ empId, name, dob, role }) => {
  return (
    <div className="w-[85%] m-auto pl-4 odd:ml-4 relative rounded-[20px] bg-[#5E5E5E82] my-4 even:mr-4 shadow-md shadow-[#5E5E5E82]">
      <p className="absolute right-3 mt-3 rounded-full h-7 w-7 flex justify-center items-center border-black border-2">{empId}</p>
      <div className="flex mt-5 mb-7">
        <p className="w-[18%] flex justify-between">
          EMP ID <span>:</span>
        </p>
        <p className="ml-2">{empId}</p>
      </div>
      <div className="flex">
        <p className="w-[18%] flex justify-between">
          Name <span>:</span>
        </p>
        <p className="ml-2">{name[0].toUpperCase()+name.slice(1)}</p>
      </div>
      <div className="flex my-7">
        <p className="w-[18%] flex justify-between">
          DOB <span>:</span>
        </p>
        <p className="ml-2">{dob}</p>
      </div>
      <div className="flex mb-5">
        <p className="w-[18%] flex justify-between">
          Role <span>:</span>
        </p>
        <p className="ml-2">{role}</p>
      </div>
    </div>
  );
};

export default Employee;
