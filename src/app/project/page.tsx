import Image from "next/image"

export default function Project(){
    return(
        <>
        <h1 className="text-center text-slate-200 font-extrabold mt-10 text-2xl hover:bg-emerald-500 bg-slate-800 "> Featured Projects</h1>
        <ul className="flex mt-20 space-x-15 justify-center flex-wrap gap-6 ">
            <li className="flex-shrink-0 mb-6 border-4 border-gray-300 p-4 rounded-lg shadow-lg"><a href="https://github.com/javeria-zohaib/simple-calculator.git" target="_blank"><Image src="/download.jfif" alt="Calculator" height={200} width={200}/></a></li>
            <li className="flex-shrink-0 mb-6 border-4 border-gray-300 p-4 rounded-lg shadow-lg"><a href="https://github.com/javeria-zohaib/atm-machine.git" target="_blank"><Image src="/atm.jfif" alt="atm" height={200} width={200}/></a></li>  
            <li className="flex-shrink-0 mb-6 border-4 border-gray-300 p-4 rounded-lg shadow-lg"><a href="https://github.com/javeria-zohaib/amazon-clone.git" target="_blank"><Image src="/amazon.jfif" alt="amazon" height={300} width={400}/></a></li>
              <li className="flex-shrink-0 mb-6 border-4 border-gray-300 p-4 rounded-lg shadow-lg" ><a href="https://dynamicrouteprop.vercel.app/" target="blank"><Image src="/dynamic.png" alt="dynamic" height={400} width={500}/></a></li>
              <li className="flex-shrink-0 mb-6 border-4 border-gray-300 p-4 rounded-lg shadow-lg"><a href="https://github.com/javeria-zohaib/cli-numberguessing.git" target="_blank"><Image src="/numberguess.jfif" alt="game" height={500} width={400}/></a></li>
        </ul>
        </>
    )
}