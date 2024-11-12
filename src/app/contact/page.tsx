

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Contact (){
    return(
        <>
         <h1 className="text-center text-2xl mt-5">Contact detail</h1>
        <ul><li className='flex justify-center gap-2 hover:bg-cyan-700 mt-4'> <FontAwesomeIcon icon={faLinkedin} className='h-10 w-6'/>
            <a href="https://www.linkedin.com/in/javeria-rehman-5308872ba/"  target="blank" className="text-2xl mt-1">linkedin javeria-rehman</a>
       
        </li>
        <li className='flex justify-center gap-2 hover:bg-cyan-700 mt-4'> <FontAwesomeIcon icon={faGithub} className='h-10 w-6'/>
            <a href="https://github.com/javeria-zohaib"  target="blank" className="text-2xl mt-1">Github javeria-rehman</a>
       
        </li></ul>
        <p className='text-center text-xl p-9 text-orange-200' >
        Feel free to fill this form if you want to contact me
        </p>
         <form  className='items-center justify-center flex flex-col '>
            <label htmlFor="Name" className='text-lg font-semibold'>
            Name</label><br />
            <input type="name" placeholder=' your name'  className='rounded-lg p-3  w-1/5  bg-gray-400 text-gray-800'/><br />
            <label htmlFor="Email" className='text-lg font-semibold' >Email</label><br />
            <input type="email" placeholder=' your email' className='rounded-lg py-3 px-4  w-1/5  bg-gray-400 text-gray-800' / ><br />

            <label htmlFor="Message" className='text-lg font-semibold'>
               Message
            </label><br />
            <textarea name="message" id="message" cols={30} rows={10} className='rounded-lg w-1/5 bg-gray-400 text-gray-800'></textarea><br />
            <button type='submit' className='rounded-lg bg-green-900 p-2  text-xl font-bold  w-1/6 cursor-pointer hover:bg-teal-700'>submit</button>
            
            
         </form>
       

        
    
        </>
    )
       
}