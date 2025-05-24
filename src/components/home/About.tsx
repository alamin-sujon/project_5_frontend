import img from '@/assets/copy.jpg'
import Image from 'next/image';
const About = () => {
    return (

        // <section
        //     id="about"
        //     className="py-16 px-4 md:px-12 shadow-custom-2 lg:px-20 my-20 bg-transparent  hover:shadow-[#31ffcc] max-w-7xl mx-auto rounded-lg"
        // >
        //     <div className=" px-6">
        //         <div className="flex flex-col lg:flex-row gap-12 items-center ">
        //             <div className=" hidden lg:flex md:w-4/12  justify-end mb-8 lg:mb-0">
        //                 <Image
        //                     className="rounded-full hover:scale-105 transition-transform duration-700 w-80 h-80 bg-[#31ffcc]  border-4 border-gray-800 object-cover"
        //                     src={img}
        //                     alt="Your Name"
        //                 />
        //             </div>
        //             <div className=" flex-1  text-center lg:text-left">
        //                 <h2 className="text-4xl font-semibold text-white ">About Me</h2>
        //                 <div className=" text-center lg:text-left">
        //                     <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
        //                         Hello, I am a passionate web developer – Alamin Sujon. I am
        //                         driven to create beautiful, intuitive, and user-centric web
        //                         applications.
        //                     </p>
        //                     <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
        //                         I have strong skills in modern web development. I am proficient
        //                         with popular libraries and frameworks like React, Tailwind CSS,
        //                         Node.js, Next.js, Express.js, and MongoDB.
        //                     </p>
        //                     <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
        //                         I want to contribute to the field of web development by building
        //                         helpful and efficient web applications that solve complex
        //                         problems. I am always eager to learn new technologies and
        //                         further refine my skills.
        //                     </p>
        //                     <p className="text-lg text-gray-100">
        //                         Let&apos;s collaborate and bring your ideas to life!
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <Image
                            src={img} // replace with your actual image URL
                            alt="Alamin Sujon"
                            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-indigo-500"
                        />
                    </div>

                    {/* About Text */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-100  mb-4">
                            👋 About Me
                        </h2>
                        <p className="text-gray-200  text-lg mb-4">
                            I’m <span className="font-semibold text-green-600">Alamin Sujon</span>, a Full Stack Developer with a passion for building interactive, accessible, and user-focused web applications.
                        </p>
                        <p className="text-gray-200  text-lg mb-4">
                            I specialize in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Express.js</strong>, <strong>Typescript</strong>,<strong>Prisma</strong>, <strong>RTK Query</strong>,<strong>MongoDB</strong>,  and <strong>Tailwind CSS</strong>, and I’ve worked on several real-world projects like <em>Rate My Bite</em>, <em>Car Store</em>, and <em>Hotel Next</em>. I love learning new technologies and bringing ideas to life on the web.
                        </p>
                        <p className="text-gray-200  text-lg">
                            Outside of code, I&apos;m always curious about UI/UX, automation, and how to build tools that make life easier. Let’s create something awesome together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
