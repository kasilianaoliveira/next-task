import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meu painel de tarefas",
}
export default function Dashboard() {

  return (
    <div className="bg-zinc-900 w-full h-[calc(100vh-64px)]">
      <div className="w-full max-w-[1400px] px-5 flex flex-col mx-auto">
        <div className="w-full flex flex-col mt-[100px]">
          <h1 className="font-bold text-2xl text-gray-200">Qual a sua tarefa?</h1>
          <textarea placeholder="Descreva sua tarefa..." className="w-full h-52 rounded-2xl my-4 resize-none text-gray-950 p-4" />
        </div>
      </div>
    </div>
  )
}