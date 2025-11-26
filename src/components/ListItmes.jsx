import React from "react";

const ListItmes = ({ Members, removeMember, editMember, dark }) => {
  return (
    <li className={dark ? " shadow-md bg-[#51557E] text-white rounded-md  mt-2  p-1 md:p-4":" shadow-md bg-[#A1BC98] text-white rounded-md  mt-2  p-2 md:p-4 font-Mina"}>
      <div className=" m-2 ">
        <h1 className=" text-yellow-500 text-2xl"></h1>
        <p className="text-md text-black font-bold">Id: # <span className="text-white font-semibold">{Members.id}</span> </p>
        <p className="text-md text-black font-bold">Name: <span className="text-white font-semibold">{Members.name}</span>  </p>
        <p className="text-md text-black font-bold">Age:  <span className="text-white font-semibold">{Members.age}</span> </p>
        <p className="text-md text-black font-bold">Phone: <span className="text-white font-semibold">{Members.phone}</span> </p>
        <p className="text-md text-black font-bold">Gmail: <span className="text-white font-semibold">{Members.email}</span> </p>
        <p className="text-md text-black font-bold">Weight: <span className="text-white font-semibold">{Members.weight}</span> </p>
        <p className="text-md text-black font-bold">Membership : <span className="text-white font-semibold">{Members.membershipPlan}</span> </p>
        <p className="text-md text-black font-bold">Fee : <span className="text-white font-semibold">{Members.feeDone}</span> </p>
      </div>
      <div className=" m-2 flex gap-2 items-end">
        <button
          onClick={() => editMember(Members)}
          className=" cursor-pointer shadow-md p-1 bg-yellow-500 hover:bg-yellow-600 rounded-sm px-2"
        >
          Edit
        </button>
        <button
          onClick={() => removeMember(Members.id)}
          className=" cursor-pointer shadow-md p-1 bg-red-500 hover:bg-red-600 rounded-sm px-2"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItmes;
