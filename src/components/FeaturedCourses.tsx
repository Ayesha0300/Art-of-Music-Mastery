'use client'
import courseData from "@/data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
// import { IconAppWindow } from "@tabler/icons-react"
import Image from "next/image";


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: any,
}


function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-blue-100
        font-semibold tracking-wide
        uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-semibold tracking-light text-white 
        sm;text-4xl"> Learn With The Best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900
                        overflow-hidden h-full max-w-sm">
                                {/* <Image
                                    src={`/courses.jpg`}
                                    alt="courses"
                                    height="400"
                                    width="400"
                                    className="object-contain"
                                /> */}
                                {/* <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    Ayesha
                                </p> */}
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg
                                    sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-400 
                                    dark:text-neutral-300 flex-grow">{course.description}</p>
                                    <Link href={`/cousres/${course.slug}`}
                                        className="px-4 py-2 rounded-lg border-dotted
                                     borderd-neutral-600 text-neutral-700
                                    font-bold hover:bg-slate-300 transition duration-200"
                                    >

                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center"
            >

                <Link href={"/courses"}
                    className="px-4 py-2 rounded border-full
            borderd-neutral-600 text-neutral-700
            bg-white font-bold hover:bg-slate-300 transition duration-200"
                >
                    View All Courses
                </Link>

            </div>

        </div>
    )
}

export default FeaturedCourses
