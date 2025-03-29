import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
