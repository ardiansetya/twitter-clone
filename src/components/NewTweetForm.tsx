import { UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

function updateTextAreaSize (textArea: HTMLTextAreaElement) {
  if (textArea == null) return
  textArea.style.height = "0"
  textArea.style.height = `${textArea.scrollHeight}px`

}
const NewTweetForm = () => {
  const { user } = useUser();

  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  
   
  }, [inputValue])
  

  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={user?.imageUrl} />
        <textarea
          style={{ height: 0 }}
          value={inputValue}
          ref={textAreaRef}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What's happening"
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
};

export default NewTweetForm;
