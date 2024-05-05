"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
//  items: {
//  quote: string;
//  name: string;
//  title: string;
// }
// []musicSchoolTestimonials


const musicSchoolTestimonials = [
  {
    qoute:
      'Joining the music school transformed my understanding of music and helped me to turly discover my own sound. The instructors are world-class!',
    name: 'Alice Johnson',
    title: 'Guitar Student',

  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but as a performer, thanks to their comprehensive approach.",
    name: 'Flora Lee',
    title: 'Guitar Student'
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but as a performer, thanks to their comprehensive approach.",
    name: 'Flora Lee',
    title: 'Guitar Student'
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but as a performer, thanks to their comprehensive approach.",
    name: 'Flora Lee',
    title: 'Guitar Student'
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but as a performer, thanks to their comprehensive approach.",
    name: 'Flora Lee',
    title: 'Guitar Student'
  },
]
function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem]  rounded-md flex flex-col antialiased
     bg-white
      dark:bg-black 
      dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold bg-gray-400 text-center mb-8 z-10">

        Hear Our Harmony:Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}

            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default MusicSchoolTestimonials
