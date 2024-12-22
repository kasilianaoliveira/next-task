"use client"
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export function ButtonGroup() {
  const router = useRouter()

  const { status } = useSession()
  const handleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard", redirect: false }).then((res) => {
      if (res?.url) {
        window.location.href = res.url;
      }
    });
  };


  return (
    <div className="flex gap-6 w-full max-[468px]:flex-col max-[468px]:gap-4">
      {status === "authenticated" && (
        <Button className="w-full" size="lg" onClick={() => router.push('/dashboard')}>
          Acessar ao sistema
        </Button>
      )}
      {
        status === "loading" && (
          <Button className="w-full"  size="lg" disabled>
            Aguarde...
          </Button>
        )
      }
      {
        status === "unauthenticated" && (
          <>
            <Button className="w-full" size="lg" onClick={handleLogin}>
              <MailIcon />
              Acessar com o Google
            </Button>
          </>
        )
      }
    </div>
  )
}
//className="bg-blue-400 hover:bg-blue-500 text-white transition-colors duration-500"
//  className="text-blue-400 hover:text-blue-500 hover:border-blue-500 border-blue-400 py-3 px-6 border rounded-2xl transition-colors duration-500"