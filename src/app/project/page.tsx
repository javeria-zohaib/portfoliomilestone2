import Image from "next/image";
export default function Projects(){
    return(
        <>
        <h1 className="mt-10 bg-lime-600 text-2xl text-slate-200 text-center font-extrabold">Featured Work</h1>
        <ul className="flex justify-center flex-wrap mt-30 gap-6">
            <li className="flex-shrink-0  mb-4 border-4 border-gray-400 rounded-lg mt-6"><a href="https://github.com/javeria-zohaib/simple-calculator.git" target="_blank"><Image src="/calculator.png" alt="calculator" height={400} width={300}/></a></li>
            <li className="flex-shrink-0  p-4 mb-4 border-4 border-gray-400 rounded-lg mt-6"><a href="https://github.com/javeria-zohaib/atm-machine.git" target="_blank"><Image src="/atm.png" alt="atm" height={200} width={200}/></a></li>
            <li className="flex-shrink-0 p-4 mb-4 border-4 border-gray-400 rounded-lg mt-6"><a href="https://github.com/javeria-zohaib/cli-numberguessing.git" target="_blank"><Image src="/numberguess.png" alt="numberguess" height={400} width={300}/></a></li>
            <li className="flex-shrink-0 p-4 mb-4 border-4 border-gray-400 rounded-lg mt-4"><a href="https://github.com/javeria-zohaib/amazon-clone.git" target="_blank"><Image src="/amazon.png" alt="amazon" height={400} width={400}/></a></li>
            <li className="flex-shrink-0  mb-4 p-10 border-4 border-gray-400 rounded-lg mt-4"><a href="https://dynamicrouteprop.vercel.app/" target="_blank"><Image src="/dynamic.png" alt="dynamic" height={400} width={600}/></a></li>
        </ul>
        </>
    )
}