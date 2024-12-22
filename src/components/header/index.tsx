"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { DropdownMenuProfile } from "../menu";
export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'


  const { data: session, status } = useSession()

  return (
    <header className={`w-full h-16 flex justify-center items-center px-5 ${isHome ? 'bg-transparent' : 'bg-zinc-900'}`}>
      <section className="max-w-[1400px] w-full flex justify-between items-center">
        <nav className="flex gap-5">
          <Link href='/'>
            <h1 className="font-bold text-xl text-gray-100">
              StudyFlow
            </h1>
          </Link>
        </nav>

        {
          status === 'loading' ? (
            <></>
          ) : session && !isHome ? (
            <div className="flex gap-6">
              <DropdownMenuProfile/>

            </div>
          ) : (
            <></>
          )
        }
      </section>
    </header>
  );
}
