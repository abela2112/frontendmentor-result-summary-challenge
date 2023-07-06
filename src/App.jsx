import { useState } from 'react'
import data from './data.json'
import memory from './assets/images/icon-memory.svg'
import reaction from './assets/images/icon-reaction.svg'
import verbal from './assets/images/icon-verbal.svg'
import visual from './assets/images/icon-visual.svg'

function App() {


  return (
    <div className='w-full sm:flex min-h-screen justify-center items-center sm:bg-slate-100'>
      <div className='grid grid-col-1 sm:grid-cols-2 bg-white rounded-3xl sm:m-6 sm:shadow-xl'>
        <div className='bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue  rounded-b-[30px] sm:rounded-3xl p-10 sm:px-14 sm:py-10 flex flex-col gap-2 sm:gap-4 justify-center items-center'>
          <h1 className='font-HankenGrotesk text-slate-200 text-xl sm:text-3xl'>Your Result</h1>
          <div className='rounded-full bg-white p-8 h-40 w-40 sm:h-60 sm:w-60 bg-gradient-to-b from-VioletBlue to-PersianBlue flex flex-col justify-center items-center'><span className='text-5xl sm:text-8xl font-extrabold text-white'>76 </span><span className='text-slate-300 font-semibold text-lg'>of 100</span></div>
          <div className='text-2xl sm:text-3xl text-white font-bold'>Great</div>
          <p className='sm:w-40 font-HankenGrotesk text-lg sm:text-xl text-slate-300 text-center'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className='px-8 py-6 sm:p-10'>
          <h1 className='text-2xl font-bold'>Summary</h1>
          <div className='flex flex-col gap-4 mt-4 text-xl font-bold w-full'>

            <div className={`flex flex-row gap-3 rounded-lg px-6 py-4 justify-between bg-Lightred`}>
              <div className="flex gap-1"><img src={reaction} />
                <span className='text-red-400'>Reaction</span></div>
              <div>80<span className='text-slate-300'>/100</span></div>
            </div>
            <div className={`flex flex-row gap-3 rounded-xl px-6 py-4 justify-between bg-Orangeyyellow `}>
              <div className="flex gap-1"><img src={memory} />
                <span className='text-yellow-400'>Memory</span></div>
              <div>92<span className='text-slate-300'>/100</span></div>

            </div>
            <div className={`flex flex-row gap-3 rounded-xl px-6 py-4 justify-between bg-Greenteal`}>
              <div className="flex gap-1"><img src={verbal} />
                <span className='text-green-400'>Verbal</span></div>
              <div>61<span className='text-slate-300'>/100</span></div>
            </div>
            <div className={`flex flex-row gap-3 rounded-xl px-6 py-4 justify-between bg-Cobaltblue`}>
              <div className="flex gap-1"><img src={visual} />
                <span className='text-blue-400'>Visual</span></div>
              <div>72<span className='text-slate-300'>/100</span></div>
            </div>
            <button className='bg-black hover:bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue px-4 py-3 rounded-full text-white text-2xl mt-4 sm:mt-8 items-center'>Continue</button>
          </div>
        </div>

      </div>

    </div >
  )
}

export default App
