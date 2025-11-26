// import js from "@eslint/js";
import React, { useState, useEffect } from "react";

const Form = ({ addMember, edit, updateMember, dark }) => {
  const [name, SetName] = useState("");
  const [age, SetAge] = useState("");
  const [phone, SetPhone] = useState("");
  const [email, SetEmail] = useState("");
  const [weight, SetWeight] = useState("");
  const [membershipPlan, SetMembershipPlan] = useState("");
  const [feeDone, SetFeeDone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!edit.isEdit) {
      addMember({
        id: crypto.randomUUID(),
        name,
        age,
        phone,
        email,
        weight,
        membershipPlan,
        feeDone,
      });
    } else
      updateMember({
        id: edit.Members.id,
        name,
        age,
        phone,
        email,
        weight,
        membershipPlan,
        feeDone,
      });

    SetName("");
    SetAge("");
    SetPhone("");
    SetEmail("");
    SetWeight("");
    SetMembershipPlan("");
    SetFeeDone("");
  };

  useEffect(() => {
    if (edit.Members) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      SetName(edit.Members.name);
      SetAge(edit.Members.age);
      SetPhone(edit.Members.phone);
      SetEmail(edit.Members.email);
      SetWeight(edit.Members.weight);
      SetMembershipPlan(edit.Members.membershipPlan);
      SetFeeDone(edit.Members.feeDone);
    }
  }, [edit]);
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={dark ? "text-white shadow-xl bg-[#404258] p-5 m-2 grid grid-cols-2 md:grid-cols-3 items-center gap-4 rounded-md": "text-black shadow-xl bg-[#D4E7C5] p-5 m-2 grid grid-cols-2 md:grid-cols-3 items-center gap-4 rounded-md "}
    >
      <div className="flex flex-col gap-2   w-full">
        <label className="font-semibold ">Name</label>
        <input 
          value={name}
          onChange={(e) => SetName(e.target.value)}
          required
          type="text"
          placeholder="Full Name"
          className=" text-black shadow-md w-full p-1 rounded-lg bg-white border border-black"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="font-semibold">Age</label>
        <input
          value={age}
          onChange={(e) => SetAge(e.target.value)}
          required
          type="number"
          placeholder="Age"
          className=" text-black shadow-md p-1 rounded-lg bg-white border border-black"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="font-semibold">Phone</label>
        <input
          value={phone}
          onChange={(e) => SetPhone(e.target.value)}
          required
          type="number"
          placeholder="Phone"
          className=" text-black shadow-md p-1 rounded-lg bg-white border border-black"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="font-semibold">Gmail</label>
        <input
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          required
          type="Email"
          placeholder="Email"
          className=" text-black shadow-md p-1 rounded-lg bg-white border border-black"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="font-semibold">Weight</label>
        <input
          // className="border border-black"
          value={weight}
          onChange={(e) => SetWeight(e.target.value)}
          required
          type="number"
          placeholder="Weight"
          className=" text-black shadow-md p-1 rounded-lg bg-white border border-black"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="font-semibold">Membership </label>
        <select
          required
          value={membershipPlan}
          onChange={(e) => SetMembershipPlan(e.target.value)}
          className=" text-black bg-white p-1 rounded-lg shadow-md px-2 border border-black"
        >
          <option value=""> Membership Plan</option>
          <option value="1 month">1 Month</option>
          <option value="3 months">3 Months</option>
          <option value="6 months">6 Months</option>
          <option value="12 months">12 Months</option>
        </select>
      </div>

      <div className="flex flex-col w-full justify-center  ">
        <label className="font-semibold">Fee Done?</label>
        <div className="  flex gap-2 md:gap-10 my-2  ">
          <label>
            <input
              required
              checked={feeDone === "Done"}
              onChange={(e) => SetFeeDone(e.target.value)}
              type="radio"
              name="fee_done"
              value="Done"
            />
            Done
          </label>
          <label>
            <input
              required
              checked={feeDone === "Due"}
              onChange={(e) => SetFeeDone(e.target.value)}
              type="radio"
              name="fee_done"
              value="Due"
            />
            Due
          </label>
        </div>
      </div>

      <button id="but" className={dark ? "my-4 font-Agent text-sm md:text-lg font-semibold text-white shadow-xl cursor-pointer text-center w-full px-1 md:px-10 py-1 rounded-lg bg-[#32407B] hover:bg-[#485db0]":"my-4 font-Agent text-sm md:text-md font-semibold text-white shadow-xl cursor-pointer text-center w-full px-1 md:px-10 md:text-lg py-1 rounded-lg bg-[#5D866C] hover:bg-[#70a483]"}>
        Add Member
      </button>
    </form>
  );
};

export default Form;
