import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Footer from "./components/Footer";

const App = () => {
  const [Members, SetMembers] = useState([
    {
      id: 19,
      name: "Maxxy",
      age: 22,
      phone: 9294847078,
      email: "maxxy292@gmail.com",
      weight: 62,
      membershipPlan: "list",
      feeDone: "Select Yes or no",
    },
    {
      id: 22,
      name: "Maxxy",
      age: 22,
      phone: 9294847078,
      email: "maxxy292@gmail.com",
      weight: 62,
      membershipPlan: "list",
      feeDone: "Select Yes or no",
    },
    { 
      id:33,
      name: "Maxxy",
      age: 22,
      phone: 9294847078,
      email: "maxxy292@gmail.com",
      weight: 62,
      membershipPlan: "list",
      feeDone: "Select Yes or no",
    },
    { id: 83,
      name: "Maxxy",
      age: 22,
      phone: 9294847078,
      email: "maxxy292@gmail.com",
      weight: 62,
      membershipPlan: "list",
      feeDone: "Select Yes or no",
    },
  ]);
  // addMember
  let addMember = (Member) => {
    SetMembers([Member, ...Members]);
  };

  // removeMember

  let removeMember = (id) => {
    SetMembers(Members.filter((Member) => Member.id !== id));
  };

  // editState
  const [edit, SetEdit] = useState({
    Members: {},
    isEdit: false,
  });
  // Edit Member
  const editMember = (Member) => {
    SetEdit({
      Members: Member,
      isEdit: true,
    });
  };
  //Update Member
  const updateMember = (updatedMember) => {
    SetMembers(
      Members.map((Member) =>
        Member.id === updatedMember.id ? updatedMember : Member
      )
    );
    SetEdit({ Member: {}, isEdit: false });
  };

  const [dark, setDark] = useState(false);

  const changeTheme = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };
  return (
    <>
      <Navbar changeTheme={changeTheme} dark={dark} />
      <div
        className={
          dark
            ? " px-2 md:px-10 py-5 min-h-screen bg-[#D8D9DA]"
            : " px-2 md:px-10 py-5 min-h-screen bg-[#E1F0DA]"
        }
      >
        <div
          className={
            dark
              ? " shadow-2xl   text-white bg-[#61677A]  p-1 md:p-4 rounded-xl w-full my-5 "
              : " shadow-2xl   text-white bg-[#BFD8AF]  p-1 md:p-4 rounded-xl w-full my-5 "
          }
        >
          <Form
            addMember={addMember}
            updateMember={updateMember}
            edit={edit}
            dark={dark}
          />

          <ListGroup
            dark={dark}
            Members={Members}
            removeMember={removeMember}
            editMember={editMember}
          />
        </div>
      </div>
      <Footer dark={dark}/>
    </>
  );
};

export default App;
