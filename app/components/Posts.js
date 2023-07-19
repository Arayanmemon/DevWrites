import Image from 'next/image';
import React from 'react'
import profilePic from '../profile.jpeg'


export default function Posts() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-2 py-24 mx-auto">
                    <div class="flex gap-4 -mx-4 sm:-m-4 -mb-10 -mt-4">
                        <div class="p-4 md:w-1/3 mx-auto sm:mb-0 mb-6 bg-gray-100 rounded-lg">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <Image 
                                alt="content" 
                                class="object-cover object-center h-full w-full" 
                                src={profilePic} 
                                width={500}
                                height={500}
                                loading='lazy'
                                />
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
                            <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                            <a class="text-indigo-500 inline-flex items-center mt-3">Read More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6 bg-gray-100 rounded-lg">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <Image 
                                alt="content" 
                                class="object-cover object-center h-full w-full" 
                                src={profilePic} 
                                width={500}
                                height={500}
                                loading='lazy'
                                />
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
                            <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                            <a class="text-indigo-500 inline-flex items-center mt-3">Read More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6 bg-gray-100 rounded-lg">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <Image 
                                alt="content" 
                                class="object-cover object-center h-full w-full" 
                                src={profilePic} 
                                width={500}
                                height={500}
                                loading='lazy'
                                />
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
                            <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                            <a class="text-indigo-500 inline-flex items-center mt-3">Read More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
