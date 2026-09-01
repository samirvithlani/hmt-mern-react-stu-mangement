import React from "react";

export const HeroPage = () => {
  var row = 5;
  var coln = 10;

  var totalbox = row * coln;
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

      {/* <div className="flex flex-row gap-2 justify-between">
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
        <div className="h-[100px] w-[100px] bg-white border-2 shadow-xl shadow-black"></div>
      </div> */}

      {/* <div className={`grid grid-cols-${coln} gap-4`}>
          {
            Array.from({length:totalbox}).map((elm,index)=>{
              return <div className="h-[100px] w-[100px] bg-blue-500 text-white flex items-center justify-center text-2xl">
                {index}
              </div>
            })
          }

        </div> */}

      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${coln},120px)` ,gridTemplateRows:`repeat(${row},100px)`}}
      >
        {
          Array.from({length:totalbox}).map((elm,index)=>{
            return<div className="bg-blue-500 flex text-white items-center justify-center">
              {index+1}
            </div>
          })
        }
      </div>
    </>
  );
};
