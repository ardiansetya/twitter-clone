import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const SideNav = () => {
  const { user} = useUser()
  console.log(user);
  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>{user && <Link href={`/profiles/${user?.id}`}>Profile</Link>}</li>
        <li>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav