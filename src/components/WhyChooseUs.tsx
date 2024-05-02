"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [

    {
        title:
            " Harmony Academy: Where Music Flourishes",

        description:
            "Discover the Joy of Music at Harmony Academy: Welcome to Harmony Academy, where melodies meet passion and every note tells a story.Nestled in the heart of [City], our music school is a haven for aspiring musicians of all ages and skill levels. Whether you're a budding virtuoso or a curious beginner, our dedicated team of instructors is here to guide you on your musical journey.",

        musicSchoolContent: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right)] flex items-center justify-center text-white">
                Harmony Academy: Where Music Flourishes
            </div>

        ),
    },
    {
        title:
            "Discover Your Sound with Us: A Personal Journey In Music Mastery",
        description:
            "Our personal instruction adapts to your individual needs, settings the stage for unparalleled growth and creativity. at our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
        musicSchoolContent: (
           
            <div className="h-full w-full  flex items-center justify-center text-white">
               
                {/* <Image
                    src="/course.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="course"
                /> */}

            </div>
        ),
    },
    {
        title:
            "Live Feedback & Engagment",
        description:
            "Immerse yourself in an interactive learning expirience where feeback is immediate, just like real-time changes in a collaborative project. this approach enhamce your understanding and mastery of music concepts and performance techniques.",
        musicSchoolContent: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, bg-cyan-500), bg-green-500))] flex items-center justify-center text-white">
                Live Feedback & Engagment
            </div>
        ),
    },
    {
        title:
            "Cutting-Edge Curriculum",
        description:
            "Our curriculum is continously updated to include the latest music education trends and technologies, ensuring you're always learning with the most current and effective methods. say goodbye to outdated materials and welcome an education that evolves with the industry.",
        musicSchoolContent: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, bg-pink-500), bg-indigo-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
    {
        title:
            "Limitless Learning Opportunities",
        description:
            "With our expansive resource library and dynamic course offerings, you'll never find yourself without something new to explore. Our platfom provides continous opportunities for growth, ensuring your musical skills are always advancing.",
        musicSchoolContent: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right, bg-orange-500), bg-yellow-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
]

function WhyChooseUs() {
    return (
        <div className="p-10 text-slate-50"
        >
            <StickyScroll content={musicSchoolContent} />
        </div>
    )
}

export default WhyChooseUs
