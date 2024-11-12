import Image from "next/image";
export default function About(){
    return (
        <>
        <section className="flex p-10">
            <div className="w-1/2 mt-4 bg-blue-900 ">
                <h2 className="text-amber-400 font-bold text-lg">About Me</h2>

<p  className="font-semibold">Hello, I am Javeria, a web development enthusiast currently honing my skills through the Governor Sindh Kamran Khan Tessori Initiative for Artificial Intelligence, Web 3.0 and Metaverse. Though I hold a Pharm.D degree, my passion for technology and creativity led me to pursue web development where I am eager to create impactful digital solutions. Freelancing excites me as it allows me to work on diverse projects and continually challenge myself.</p>

<h2 className="text-amber-400 font-bold text-lg">Skills </h2>
<h3 className="text-lime-500 font-bold ">Technical Skills </h3>
<p className="font-semibold">HTML, CSS,TypeScript, Figma, Next.js</p>
<h3 className="text-lime-500 font-bold" >Soft Skills</h3><p className="font-semibold"> Discipline, passion, effective time management, and a dedication to delivering quality projects on schedule</p>
<h2 className="text-amber-400 font-bold text-lg">Learning and Growth</h2>
<p className="font-semibold">My enthusiasm for learning fuels me to keep exploring and improving in web development. Every project brings new insights, and I look forward to building a career in this dynamic field.  Each project is an opportunity for me to improve and Iam thrilled to see where this journey takes me.

</p>
 </div>
 <div className="w-1/2 mt-20 ml-60 justify-center" >
    <Image src="/web2.png" alt=" webdevlopment" height={500} width={400}/>
 </div>
        </section>
        </>
    )

}