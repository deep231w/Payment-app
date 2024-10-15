"use client"
import {Appbar} from "@repo/ui/appbar"
import {SessionProvider, signIn, signOut,useSession } from "next-auth/react"
export default function Page() :JSX.Element{
  const session =useSession()
  return <div>
    <SessionProvider>    <Appbar user={session.data?.user} onSignin={signIn} onSignout={signOut}></Appbar>
</SessionProvider>
  </div>
}