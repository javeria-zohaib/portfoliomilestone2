import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    return(
        <>
        <section className="flex bg-yellow-600 justify-between hover:bg-emerald-400">
        <div className="flex justify-center gap-3 animate-pulse" >
            <h2 className="font-extrabold mt-4 ml-4 text-xl ">Javeria-Rehman</h2>
            <div className="h-9 w-8 mt-4 ">
            <FontAwesomeIcon icon={faCode} />
            </div>
        </div>
        <ul className="flex gap-8 mt-4 mr-20 font-bold  text-xl">
            <li><Link href="/" className="hover:bg-lime-300">Home</Link></li>
            <li ><Link href="/about"className="hover:bg-lime-300">About</Link></li>
            <li><Link href="/contact" className="hover:bg-lime-300">Contact</Link></li>
        </ul>
        </section>
        </>
    )
      
       
}



