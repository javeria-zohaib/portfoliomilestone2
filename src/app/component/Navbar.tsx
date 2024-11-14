import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    return(
        <>
        <section className="flex bg-yellow-600 justify-between hover:bg-emerald-400">
        <div className="flex flex-col md:flex-row justify-center gap-3 animate-pulse" >
            <h2 className="font-extrabold mt-4 ml-4 text-xl ">Javeria-Rehman</h2>
            <div className="h-9 w-8 mt-4 ">
            <FontAwesomeIcon icon={faCode} className="h-6 w-6"/>
            </div>
        </div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4  mr-20 font-bold  text-xl">
            <li><Link href="/" className="hover:bg-lime-300 p-2 rounded">Home</Link></li>
            <li ><Link href="/about"className="hover:bg-lime-300 p-2 rounded">About</Link></li>
            <li><Link href="/contact" className="hover:bg-lime-300 p-2 rounded">Contact</Link></li>
        </ul>
        </section>
        </>
    )
      
       
}



