"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function FormEdit() {
    const {id} = useParams();
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [company, setCompany] = useState('')
    const [payment, setPayment] = useState('')
    const [ loading, setLoading] = useState(true);
    const [ error, setError] = useState(false);


    useEffect(() => {
        fetch('http://localhost:4000/bloglist/' + id)
        .then( res => {
            if(!res.ok) {
                throw Error("Could not fetch data")
            }
            return res.json();
        })
        .then( data => {
            console.log(data.title);
            setTitle(data.title)
            setLink(data.body)
            setCompany(data.writer)
            setPayment(data.time)
            
        })
        .catch ( err => {
            setLoading(false);
            setError(err.message);
        })
    }, [id])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const blogEdit = {
            title, body, writer, time
        }
        const res = await fetch('http://localhost:4000/bloglist/' + id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blogEdit)
        })
        console.log(blogEdit);
        if(res.ok) {
            router.push("/Blogs")
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit} className=' mt-8 flex flex-col gap-5'>
                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="title">Title</label>
                    <input 
                    type="text" 
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                    placeholder='Job title'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>


                <div className=" flex flex-col w-fit gap-2">
                    <label className=' font-semibold' htmlFor="image">
                        Preview Image
                        <span className=' block font-medium mt-2 bg-blue-300 w-fit px-10 py-2 rounded-full'>Choose file</span>
                    </label>
                    <input 
                    type="file" 
                    id='image' accept=' image/*'/>
                </div>


                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="link">Job link</label>
                    <input 
                    type="text" 
                    id='link' 
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    placeholder='Paste link'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>


                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="company">Company</label>
                    <input 
                    type="text" 
                    id='company' 
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder='Specify the company'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>

                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="payment">Payment</label>
                    <input 
                    type="text" 
                    id='payment' 
                    value={payment}
                    onChange={e => setPayment(e.target.value)}
                    placeholder='Enter amount'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>

                <button 
                   onClick={handleSubmit} 
                   className=' text-white self-end bg-foreBlue p-2 w-[250px] rounded-full cursor-pointer'>
                    <p>Publish</p>
                </button>
            </form>
    </>
  )
}