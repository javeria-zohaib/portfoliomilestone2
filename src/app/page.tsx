import Image from "next/image";
import Link from "next/link";


export default function Home() {
 
  return(
  <>
  <section className="flex  flex-col md:flex-row items-center mt-4 px-8 md:20px gap-10  "  >
    <div  className="md:w-1/2   text-center md:text-left mt-0">
      <h2 className="font-semibold text-2xl ">{"Welcome to My Portfolio"!}</h2>
    <p className="text-yellow-500 text-lg mt-6">
I am Javeria, a passionate web developer skilled in creating visually appealing and interactive websites. With a strong foundation in HTML, CSS, and typescript, I specialize in crafting seamless, user-friendly experiences. Whether its building responsive layouts, implementing animations, or developing custom functionalities, I am dedicated to bringing creative ideas to life through code. Explore my work and see how I can help turn your vision into reality</p>
<div className="flex justify-center md:justify-start gap-4  mt-8 text-lg cursor-pointer"> <button id="submit" className="bg-green-800 rounded-3xl  transition-smooth hover:bg-green-400 px-6 py-2"><Link href="/project">Projects</Link></button>
<button className="bg-green-800 rounded-3xl  hover:bg-green-400 px-6 py-2"  >Hire me</button></div>
    </div>

    <div className="md:w-1/2 flex justify-centre mt-8 md:mt-4 ">
     <Image  src="/PORTFOLIO1.png" alt="IMAGEHIJABI" height={400} width={400 } className="object-cover rounded-lg"/>
    </div>
  </section>

  
  </>
  );
}
