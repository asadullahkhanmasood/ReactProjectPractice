import React from 'react'
import img from "../../assets/download.png";
function Home() {
  return (
        <>
            <section className='flex bg-pink-800 md:w-full  md:h-[70vh]   '>    
                <div className="box md:mt-20 md:flex py-20 md:mx-auto space-x-60 h-ful ">

                    <div className="left-side md:w-160 py-30">
                        <h1 className='font-bold font-mono md:text-7xl '>
                         <span className='flex  ' > Hi there! </span><br />
                       <span>I am Asadullah</span>
                        </h1>
                    </div>
                    <div className="right-side md:h-full">
                          <img src={img} alt="" srcset="" className='md:h-full sm:h-[10rem]' />
                    </div>
       
       
                </div>
                

            </section>




        
        
        
        </>

  )
}

export default Home

