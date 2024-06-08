'use client'
import React from "react";
import { getFirestore, doc, addDoc, collection, getDocs } from "firebase/firestore"; 
import "../firebase.config";

import { getBlogs, getBlog } from '@/app/lib/data';

const db = getFirestore();
const getFromFs = async () => {
    const blogs = [];   
    const blg = await getDocs(collection(db, "blog"));
    console.log("in")
    blg.forEach((doc) => {
        blogs.push({title: doc.data().title, date: doc.data().date, image: doc.data().image})  
    });
    console.log(blogs)
  }

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={getBlogs}
      >
        Click me
      </button>
    </div>
  )
}
