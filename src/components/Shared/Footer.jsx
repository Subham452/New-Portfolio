import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <section id='Contact' className='flex items-center justify-between w-screen h-auto pt-40 bg-white '>
        <section className='w-full px-20 flex-col rounded-t-[5rem] bg-black h-auto lg:h-screen flex justify-center items-center '>
          <div className='flex flex-row items-center justify-between w-full border-b-2 bg-red-000 h-44 border-slate-400/55 '>
            <h1 className='text-xl font-bold text-white lg:text-6xl '>Let's Connect there</h1>
            <div className='flex flex-row items-center justify-center w-auto h-[4rem] gap-4 py-5 lg:text-3xl font-semibold text-white bg-orange-500 rounded-full px-7 '>
              <a target='_blank' href="https://www.linkedin.com/in/subham-patnaik-85490a252/"><h1>Hire me</h1></a>
              <span className='mt-2 '><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg></span>
            </div>
          </div>


          <div className='flex flex-col items-start justify-between w-full h-auto gap-10 pb-20 mt-10 border-b-2 lg:flex-row border-slate-400/55 '>
            <div className='flex flex-col items-start justify-start h-auto gap-3 lg:w-1/2 '>
              <div className='flex flex-row items-center justify-center gap-3 '>
                <svg id="logo-85" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z" fill="#5417D7"></path></svg>
                <span className='text-xl text-indigo-200 fontsl-bold '>SUBHAM PATNAIK</span>
              </div>
              <div className='font-semibold text-md text-slate-300 '>
                <p>As a <span className='text-orange-400 '>versatile Full Stack Developer</span>, I bring a comprehensive skill set that spans both frontend and backend technologies. My expertise is rooted in a strong foundation of frontend development, where I excel in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. I am adept at creating responsive designs with Tailwind and have experience integrating backend services using Node.js, Firebase, Sanity, and managing databases with MySQL.</p>
              </div>
            </div>

            <div className='flex flex-col items-start justify-end order-2 w-auto h-auto gap-10 lg:flex-row'>
              <div className='flex flex-col items-start justify-start gal-2'>
                <h1 className='text-xl font-bold text-orange-400 '>Navigation</h1>
                <div className='flex flex-col gap-3 mt-3 text-white lg:order-1'>
                  <Link to={"#Top"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className='text-lg '>Home</Link>
                  <span className='text-lg '>About Us</span>
                  <span className='text-lg '>Service</span>
                  <span className='text-lg '><a href='https://drive.google.com/file/d/1mgjx8iAFXHkzkp7f8ud7dPSC99EP6Vob/view' target='_blank'>Resume</a></span>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500} to={"#Projects"} className='text-lg '>Project</Link>
                </div>
              </div>

              <div className='flex flex-col items-start justify-start order-3 galp-2 lg:order-2'>
                <h1 className='text-xl font-bold text-orange-400 '>Contact</h1>
                <div className='flex flex-col gap-3 mt-3 text-white'>
                  <span className='text-lg '>+91 82806360**</span>
                  <span className='text-lg '>subhampatnaik654@gmail.com</span>
                  <a target='_blank' href='https://github.com/Subham452'><span className='text-lg '>Github: Subham452</span></a>
                </div>
              </div>

              <div className='flex flex-col items-start justify-start order-1 galp-2 lg:order-3'>
                <h1 className='font-bold text-orange-400 lg:text-xl '>Get the latet info</h1>
                <div className='flex flex-col gap-3 mt-3 text-white'>
                  <div className=' h-[3rem] rounded-xl w-auto flex flex-row
                   bg-white'>
                    <input placeholder='Email address' className=' h-[3rem] rounded-xl w-[16rem] bg-white placeholder:text-xl text-black outline-none placeholder:text-black pl-2' type="email" name="" id="" />
                    <span className=' justify-center items-center flex h-full w-[3rem] bg-orange-400 text-white rounded-r-xl'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg></span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='flex flex-row items-center justify-between w-full h-auto gap-10 pb-20 mt-10 lg:text-2xl text-slate-100 '>
            <div>
              <h1>Copyrignt	&#169; {currentYear} Subham Patnaik. All Rights Reserved. </h1>
            </div>

            <div>
              <h1>Use Term & Conditions | Privacy Policy</h1>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Footer
