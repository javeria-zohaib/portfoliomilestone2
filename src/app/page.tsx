import Image from "next/image";
import Link from "next/link";


export default function Home() {
 
  return(
  <>
  <section className="flex items-center mt-4 px-8 space-x-15 gap-10  "  >
    <div  className="w-1/2  mt-0">
      <h2 className="font-semibold text-2xl ">{"Welcome to My Portfolio"!}</h2>
    <p className="text-yellow-500 text-lg mt-6">
I am Javeria, a passionate web developer skilled in creating visually appealing and interactive websites. With a strong foundation in HTML, CSS, and typescript, I specialize in crafting seamless, user-friendly experiences. Whether its building responsive layouts, implementing animations, or developing custom functionalities, I am dedicated to bringing creative ideas to life through code. Explore my work and see how I can help turn your vision into reality</p>
<div className="ml-28 space-x-7 mt-8 text-lg cursor-pointer"> <button id="submit" className="bg-green-800 rounded-3xl  transition-smooth hover:bg-green-400 p-2"><Link href="/project">Projects</Link></button>
<button className="bg-green-800 rounded-3xl  hover:bg-green-400 p-2"  >Hire me</button></div>
    </div>

    <div className="w-1/2 flex justify-centre mt-20">
     <Image  src="/PORTFOLIO1.PNG" alt="IMAGEHIJABI" height={400} width={400 } className="object-cover"/>
    </div>
  </section>

  
  </>
  );
}
