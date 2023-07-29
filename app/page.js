'use client'
import React, { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Loader from "./components/Loader";
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64b57c98055fabedae12');

const databases = new Databases(client);

export default function Home() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const promise = databases.listDocuments('64b6b6eb0e8606bcce13', '64b6b6f66fbb4fd68725');

    promise
      .then((result) => {
        if (result.documents.length > 0) {
          setResponse(result.documents);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className=''>
      <Navbar />
      {response ? <Posts response={response} /> : <Loader />}
    </div>
  );
}