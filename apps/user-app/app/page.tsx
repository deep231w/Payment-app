"use client"
import {Appbar} from "@repo/ui/appbar"
import {SessionProvider, signIn, signOut,useSession } from "next-auth/react"
export default function Page() :JSX.Element{
  const {data:session, status} =useSession();

  if (status=="loading")  return <div>Loading ...</div>
  return <div>
      <Appbar user={session?.user} onSignin={signIn} onSignout={signOut}></Appbar>
        </div>
}