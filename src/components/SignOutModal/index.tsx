
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { signOut } from "next-auth/react"
import { DialogDescription } from "@radix-ui/react-dialog"
import { redirect } from "next/navigation"


export function DialogCloseButton() {
  // const [loading, setLoading] = useState(false);
  const handleSignOut = () => {
    // setLoading(true)  
    // try {
      signOut({ redirect: false })
      redirect('/')
    // } catch (error) {
    //   console.error("Erro ao sair:", error)
    // } finally {
    //   setLoading(false) 
    // }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" >Sair do sistema</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Tem certeza que deseja sair do sistema ?</DialogTitle>
          <DialogDescription className="text-gray-600">
            Ao sair, você precisará se autenticar novamente para acessar a conta. Deseja continuar?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleSignOut}>
            Sim, sair do sistema
          </Button>
        </DialogFooter>
      </DialogContent>
      {/* {loading && (
        <p className="animate-spin">SAINDO</p>
      )
      } */}
    </Dialog>
  )
}
