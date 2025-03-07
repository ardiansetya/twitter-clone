import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

const NewTweetForm = () => {
    const {user} = useUser()
  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={user?.imageUrl}/>
        <textarea placeholder="What's happening" className="p-4 outline-none resize-none text-lg overflow-hidden flex-grow" />
      </div>
      <Button className="self-end" >Tweet</Button>
    </form>
  );
};

export default NewTweetForm;
