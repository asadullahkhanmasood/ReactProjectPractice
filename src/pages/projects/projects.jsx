import React from "react";
import { SlGameController } from "react-icons/sl";
function Projects() {
  return (
    <>
      <section className="w-full  md:mt-30 flex flex-col">
        <div className="projects-heading md:flex md:flex-col md:mt-10">
          <div className="headings md:mx-auto md:flex md:flex-col md:justify-center md:items-center md:space-y-4    ">
            <h1 className="font-light md:text-2xl">specialty</h1>
            <h1 className="md:font-medium md:text-4xl">
              My <span className="text-blue-500">specialty</span>
            </h1>
            <p className="md:w-100 md:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              magni ex vitae.
            </p>
          </div>
        </div>

        <div className="projects-row">
          <div className="row-starts md:flex md:flex-row md:mt-30 md:space-x-20 md:justify-between md:mx-30 ">
            {/* box 1 */}
            <div className="box md:w-90 md:h-90 shadow-2xl ">
              <div className="img-box md:w-30 md:text-8xl md:flex md:justify-center md:mx-auto md:mt-4 md:text-blue-500 md:rounded-full">
                <SlGameController />
              </div>

              <div className="detail-box md:">
                <h1 className="md:text-2xl font-bold text-center md:my-5 ">
                  Gamer
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  eos? Nihil, assumenda!
                </p>

                <button className="md:flex md:items-center md:mt-10 bg-blue-500 md:mx-auto md:w-39 md:text-center md:justify-center md:h-10 text-white">
                  learn More
                </button>
              </div>
            </div>
            {/* box end  */}
            <div className="box md:w-90 md:h-90 shadow-2xl ">
              <div className="img-box md:w-30 md:text-8xl md:flex md:justify-center md:mx-auto md:mt-4 md:text-blue-500 md:rounded-full">
                <SlGameController />
              </div>

              <div className="detail-box md:">
                <h1 className="md:text-2xl font-bold text-center md:my-5 ">
                  Gamer
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  eos? Nihil, assumenda!
                </p>

                <button className="md:flex md:items-center md:mt-10 bg-blue-500 md:mx-auto md:w-39 md:text-center md:justify-center md:h-10 text-white">
                  learn More
                </button>
              </div>
            </div>
            <div className="box md:w-90 md:h-90 shadow-2xl ">
              <div className="img-box md:w-30 md:text-8xl md:flex md:justify-center md:mx-auto md:mt-4 md:text-black md:rounded-full">
                <SlGameController />
              </div>

              <div className="detail-box md:">
                <h1 className="md:text-2xl font-bold text-center md:my-5 ">
                  Gamer
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  eos? Nihil, assumenda!
                </p>

                <button className="md:flex md:items-center md:mt-10 bg-blue-500 md:mx-auto md:w-39 md:text-center md:justify-center md:h-10 text-white">
                  learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
