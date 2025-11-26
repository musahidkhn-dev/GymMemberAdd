import React from "react";
import ListItmes from "./ListItmes";

const ListGroup = ({ Members, removeMember, editMember, dark }) => {
  if (Members.length === 0) {
    return (
      <h1 className="text-center font-bold text-2xl my-4 p-4 text-gray-400">
        No Members Yet
      </h1>
    );
  }
  return (
    <ul
      className={
        dark
          ? "shadow-md  bg-[#16003B] grid grid-cols-1 m-2 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-2 rounded-md p-2"
          : "shadow-md  bg-[#D5F0C1] grid grid-cols-1 m-2 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-2 rounded-md p-2"
      }
    >
      {Members.map((Members) => (
        <ListItmes
          dark={dark}
          Members={Members}
          Key={Members.id}
          removeMember={removeMember}
          editMember={editMember}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
