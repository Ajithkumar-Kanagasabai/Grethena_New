import React from 'react'

export const Newsletter = () => {
  return (
    <section className="lg:h-[350px] h-[270px] bg-transparent bg-gradient-to-r from-[#FF7369] to-[#FFB06D] mb-[4rem] mt-11 lg:mt-0 lg:rounded-none rounded-lg ">
      <div className=" lg:flex items-center lg:p-[7rem] p-[1rem] gap-x-3">
        <div className="lg:w-[50%] w-full">
          <h1 className="lg:text-5xl text-xl text-white font-bold lg:mx-0 mx-auto">
            Subscribe to Our Newsletter
          </h1>
        </div>
        <div className="lg:w-[50%] w-full lg:mt-0 mt-7">
          <p className="lg:text-xl text-md text-white font-semibold mb-8">
            Stay up-to-date and receive exclusive tips and insights by
            subscribing to our newsletter.
          </p>
          <div className="flex border h-[90px] rounded-xl w-full p-3">
            <form action="" className="flex w-full" onClick={(e)=>e.preventDefault()}>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-3/4 p-2 bg-transparent placeholder:text-white outline-none placeholder:text-xl placeholder:font-medium"
              />
              <button className=" bg-gradient-to-r from-[#2f057b] to-[#6441c1] shadow-lg w-1/2 rounded-lg text-white font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
