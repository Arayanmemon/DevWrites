'use client'
import { Client, Databases, ID, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64b57c98055fabedae12');

const databases = new Databases(client);
export default function Page({ params }) {
    const [Post, setPost] = useState(null);

    const {slug} = params;
    useEffect(()=>{
        const promise = databases.listDocuments(
            '64b6b6eb0e8606bcce13', '64b6b6f66fbb4fd68725',
            [
                Query.equal('slug', slug)
            ]
        );
        promise
        .then((result) => {
           setPost(result.documents[0]);
           console.log(Post);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    },[])
    return(
        <>
        <Navbar />
        <div className='w-[80%] mx-auto'>
            <h1 className='text-3xl'>
                {Post?.title}
            </h1>
            <Image
                alt="content"
                class="object-cover object-center"
                src={Post?.image}
                width={500}
                height={500}
                loading='lazy' />
            <div dangerouslySetInnerHTML={{ __html: Post?.body }}></div>
        </div>
        </>
    )
}