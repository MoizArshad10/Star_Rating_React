import React from 'react'
import Star from './Star'

function Card() {
  return (
    <>
   
   <div className="card h-[150px] w-[400px] mt-[200px] m-[auto]">
     <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/17827718/pexels-photo-17827718/free-photo-of-closeup-of-a-waterfall-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium text-white">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <p className='text-sky-500'>Rate Our Service</p>
    <Star/>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
   </div>
    </>
  )
}

export default Card