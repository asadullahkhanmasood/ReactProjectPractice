import React from 'react'

function Projects() {
  return (
<>


<section className='w-full  md:mt-30 flex flex-col'>

    <div className="projects-heading md:flex md:flex-col md:mt-10">
          <div className="headings md:mx-auto md:flex md:flex-col md:justify-center md:items-center md:space-y-4    ">
              <h1 className='font-light md:text-2xl'>specialty</h1>
              <h1 className='md:font-medium md:text-4xl'>My <span className='text-blue-500'>specialty</span></h1>
              <p className='md:w-100 md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni ex vitae.</p>
          </div>
    </div>

    <div className="projects-row">
          <div className="row-starts md:flex md:flex-row md:mt-30 md:space-x-20 md:justify-between md:mx-30 ">
              <div className="box w-70 bg-blue-400 py-20">1</div>
              <div className="box w-70 bg-blue-400 py-20">2</div>
              <div className="box w-70 bg-blue-400 py-20">3</div>
          </div>
    </div>


</section>

</>


  )
}

export default Projects