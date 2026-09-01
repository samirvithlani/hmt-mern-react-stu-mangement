import React from "react";

export const HeroPage = () => {
  return (
    <>
      <div className="bg-gray-300 h-[50px] m-5 p-1">
        <h1 className="text-blue-500">HERO PAGE</h1>
      </div>
      {/* w-auto
    w-full
    w-screen
    w-min
    w-max */}
      {/* <div className='bg-yellow-200 h-auto w-auto p-10'>
      <h1 className='text-xs'>HELLO</h1>
      <h1 className='text-sm'>HELLO</h1>
      <h1 className='text-base'>HELLO</h1>
      <h1 className='text-lg'>HELLO</h1>
      <h1 className='text-xl'>HELLO</h1>
      <h1 className='text-2xl'>HELLO</h1>
      <h1 className='text-3xl'>HELLO</h1>

      <h1 className='font-thin'>HELLO THIS IS TAIWIND CSS</h1>
      <h1 className='font-bold'>HELLO THIS IS TAIWIND CSS</h1>
      <h1 className='font-light'>HELLO THIS IS TAIWIND CSS</h1>
      <h1 className='font-medium'>HELLO THIS IS TAIWIND CSS</h1>
      <h1 className='font-extrabold'>HELLO THIS IS TAIWIND CSS</h1>
    </div>  */}

      {/* <div className='h-[300px] w-[300px] bg-blue-500 ml-50 border-2 border-red-500 rounded-full'>

    </div>
    <div className='h-[300px] w-[300px] bg-yellow-500 ml-50 border-2 border-dotted border-red-500 rounded-full'>
    </div>

    <div className='h-[300px] w-[300px] bg-white border-2 shadow-xl shadow-black'>
    </div> */}

      <div className="flex flex-row gap-2 justify-between">
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
      </div>
    </>
  );
};
