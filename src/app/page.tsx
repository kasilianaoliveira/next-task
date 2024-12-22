import Image from "next/image";
import heroImg from "../../public/assets/image-home.png"
import { ButtonGroup } from "@/components/home/button-group";
export default function Home() {

  return (
    <div className="h-[calc(100vh-64px)] w-full flex justify-center items-center">
      <main className="flex justify-between items-center w-full max-w-[1400px] px-5 max-[768px]:flex-col">
        <div className="flex gap-8 flex-col">
          <div className="flex gap-4 flex-col max-[468px]:w-full">
            <h2 className="text-gray-400 font-semibold text-2xl">Olá, bem-vindo ao StudyFlow</h2>
            <h1 className="text-gray-100 font-bold text-4xl max-[468px]:text-3xl">
              Sistema feito para você organizar <br/>
              seus estudos e tarefas
            </h1>
            <span className="text-gray-300 text-lg">Simplifique sua rotina, conquiste seus objetivos.</span>
          </div>
        <ButtonGroup/>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={heroImg} alt="Logo StudyFlow"priority 
            className="max-w[480px]"
          />
        </div>
      </main>
    </div>
  );
}
