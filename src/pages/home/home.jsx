import React from "react";
import img from "../../assets/download.png";
import { SlPaperPlane ,SlArrowRight} from "react-icons/sl";
function Home() {
  return (
    <>
      <section className="md:flex md:flex-row sm:flex sm:flex-col">
        <div className="box flex md:items-center w-full md:h-120 md:mt-30">
          <div className="md:w-7xl md:h-full  md:flex mx-auto  md:flex-col">
            <h1 className="font-light md:text-6xl md:my-9">
              This is your designer
            </h1>
            <h1 className="font-bold md:text-6xl">Asadullah</h1>

            <p className="md:my-9 md:w-140">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              unde tempore reiciendis ipsam iure perspiciatis odit quis, dolore
              suscipit possimus doloremque, itaque error culpa magni ipsum?
              Tenetur possimus esse, maiores quasi error cupiditate soluta,
              adipisci vero cumque eius itaque eaque?
            </p>
            <div className="btns space-x-10  md:flex   ">
              <button className="bg-blue-500 md:rounded-2xl md:p-2 md:w-40 text-white md:flex md:justify-center  ">
            <SlPaperPlane />
              </button>
              <button className="bg-black md:rounded-full md:w-10 text-white flex justify-center items-center" ><SlArrowRight />  </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
