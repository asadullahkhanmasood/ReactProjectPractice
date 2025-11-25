import React from "react";
import Img from "/home/asad/Desktop/CompleteWebApp/webApp/src/assets/annika-palmari-RIt88XBR3G0-unsplash.jpg";
import { GoArrowBoth } from "react-icons/go";

function About() {
  return (
    <>
      <section className="md:mt-60 md:h-180">
        <div className="box-main md:mx-20  md:flex md:h-full md:px-20 md:space-x-10 ">
          <div className="left-about-side  md:flex-1 md:h-full">
            <img src={Img} alt="" srcset="" className="md:h-160 w-160" />
          </div>
          <div className="right-about-side  md:flex-2 md:px-20">
            <div className="text-size md:mt-20 ">
              <h1 className="text-4xl my-10">
                “Service is good and I recommend”
              </h1>
              <div className="box w-[80%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam adipisci quis dolores cum provident porro
                  blanditiis, similique pariatur deserunt? Perspiciatis ipsum ex
                  at aspernatur inventore tempora voluptas nulla quod
                  laudantium?
                  <br />
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  voluptatem officiis sunt voluptas, at velit minima reiciendis
                  ratione cumque, eaque architecto minus incidunt. Placeat ad,
                  velit veritatis sed ipsa atque!
                  <p>
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam ipsam ea odio sapiente vitae qui consectetur
                    similique a. Maxime aliquid, at quae incidunt necessitatibus
                    exercitationem sint? Mollitia, odio sapiente? Dicta?asda
                  </p>
                </p>

                <button className="md:mt-20 md:bg-blue-500 text-white md:w-20 md:text-xl md:flex md:text-center md:justify-center md:h-10 md:items-center">
                  <GoArrowBoth />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
