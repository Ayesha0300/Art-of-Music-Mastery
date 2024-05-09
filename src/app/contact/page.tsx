'use client'
// contact.js

import React from 'react';
import styles from './contact.module.css'; // Import CSS module
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';


// 11 │ function page() {
//     12 │     return (
//     13 │         <div className="min-h-screen bg-black py-12 pt-36">
//        ·          ───
//     14 │             <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8
//     15 │              text-gray-400">Contact Us
//     15 │             </h1>
function page() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8
             text-gray-400">Contact Us
            </h1>

            <div className="flex flex-wrap justify-center">

                {/* // eslint-disable-next-line react/jsx-key */}
                <CardContainer className="inter-var m-4 ">
                    <CardBody className="bg-gray-50 relative group/card  
            dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1]
             dark:bg-black dark:border-white/[0.2]
              border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <div>
                            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-400">First name</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-400">Last name</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-400">Company</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-400">Email</label>
                                        <div className="mt-2.5">
                                            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-400">Phone number</label>
                                        <div className="relative mt-2.5">
                                            <div className="absolute inset-y-0 left-0 flex items-center">
                                                <label htmlFor="country" className="sr-only">Country</label>
                                                <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm">
                                                    <option>PK</option>
                                                    <option>CA</option>
                                                    <option>EU</option>
                                                    <option>US</option>
                                                </select>
                                                <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-400">Message</label>
                                        <div className="mt-2.5">
                                            <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-4 sm:col-span-2">
                                        <div className="flex h-6 items-center">
                                            {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" &gt; */}
                                            <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                                <span className="sr-only">Agree to policies</span>
                                                {/* <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" --&gt; */}
                                                <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                            </button>
                                        </div>
                                        <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                                            By selecting this, you agree to our
                                            <a href="#" className="font-semibold text-gray-400">privacy&nbsp;policy</a>.
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button type="submit" className="block w-full rounded-md bg-gray-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Let`s talk</button>
                                </div>
                            </form>
                        </div>
{/* 
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                //   as={Link}
                                //   href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white" 
                                children={undefined}                            >

                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"

                            >

                                Sign up with Gmail
                            </CardItem>
                        </div> */}
                    </CardBody>
                </CardContainer>


            </div>
        </div>
    );
};

export default page;
