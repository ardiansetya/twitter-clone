import { UserButton } from "@clerk/nextjs";
import React from "react";
import Button from "./Button";

const NewTweetForm = () => {
  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <UserButton/>
        <textarea placeholder="What's happening" className="p-4 outline-none resize-none text-lg overflow-hidden flex-grow" />
      </div>
      <Button >asdsa</Button>
    </form>
  );
};

export default NewTweetForm;
