import {  useUser } from "@clerk/nextjs";
import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

function updateTextAreaSize(textArea: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

function Form() {
  const { user } = useUser();

  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [inputValue]);

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
}
const NewTweetForm = () => {
  const { user } = useUser();

  if (!user) return null;

  return <Form />;
};

export default NewTweetForm;
