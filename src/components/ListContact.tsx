import React from "react";
import defaultAvatar from "../assets/contact.svg";

interface ContactProps {
  name: string;
  avatar: string;
  createdAt: string;
}

const ListContact: React.FC<ContactProps> = ({ name, avatar, createdAt }) => {
  return (
    <div className="flex flex-row items-center py-2 pl-5 mx-5 my-5 border border-black border-solid">
      <div>
        <img
          className="rounded-full shadow-lg"
          src={avatar || defaultAvatar}
          width={90}
          height={90}
          alt="Contact Avatar"
        />
      </div>
      <div className="flex flex-col ml-10">
        <h3>{name}</h3>
        <h5>{createdAt}</h5>
      </div>
    </div>
  );
};

export default ListContact;
