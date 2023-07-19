'use client'
import Image from 'next/image'
import { Client } from "appwrite";
import Navbar from './components/Navbar';
import PostSection from './components/Posts';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64b57c98055fabedae12');


export default function Home() {
  return (
    <div className=''>
    <Navbar />
    <PostSection />
    </div>
  );
}
