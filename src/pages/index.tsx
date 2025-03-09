import { getAuth } from "@clerk/nextjs/server";
import NewTweetForm from "~/components/NewTweetForm";

export default function  Home() {


  return (
    <>
     <header className="sticky top-0 z-10 border-b bg-white py-2 ">
      <h1 className="px-4 text-lg font-bold">home</h1>
     </header>
     <NewTweetForm/>
    </>
  );
}
