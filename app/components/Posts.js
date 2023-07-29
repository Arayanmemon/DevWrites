'use client'

import React from 'react'
import profilePic from '../profile.jpeg'
import Link from 'next/link';
import Post from "./Post";

export default function Posts({response}) {
    console.log(response);
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="px-2 py-24 mx-auto">
                    <div class="flex flex-wrap justify-center gap-6 -mx-4 sm:-m-4 -mb-10 -mt-4">
                        {response.map((content)=>(
                             <Post content={content}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
