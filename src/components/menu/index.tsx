"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession } from "next-auth/react"
import { DialogCloseButton } from "../SignOutModal"
import Image from "next/image"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuProfile() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)

  const { data: session } = useSession()
  const userData = session?.user
  //   <Button
  //   size="lg"
  //   onClick={() => router.push('/dashboard')}
  // >
  //   Meu Painel
  // </Button>


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-10 rounded-full">
        {
          userData?.image ? (
              <Image className="rounded-full" src={userData.image} alt={`Foto do perfil de ${userData.name}`} width={40} height={40} />
          ) : (
            <p>Olá, {userData?.name}</p>
          )
        }

      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 flex flex-col gap-2">
        <DropdownMenuLabel>Meu painel</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
      <DialogCloseButton />
    </DropdownMenu>
  )
}
