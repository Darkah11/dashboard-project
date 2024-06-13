'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateForm() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const [link, setLink] = useState('')
    const [deadline, setDeadline] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const Scholarship = {
          title, type, value, link, deadline
      }
  
      const res = await fetch('http://localhost:4000/bloglist', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(Scholarship)
      })
      if(res.status === 201) {
          router.push('/Scholarships')
      }
    }
  return (
    <div>
    <form 
    onSubmit={handleSubmit} 
    className=' mt-8 flex flex-col gap-5'>
                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="title">Title</label>
                    <input 
                    type="text" 
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                    placeholder='Add title'
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
                    <label className=' font-semibold' htmlFor="link">Scholarship link</label>
                    <input 
                    type="text" 
                    id='link' 
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    placeholder='Paste link'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>

                <div className=' flex flex-row items-center justify-between gap-4 max-w-xl'>
                    <div className=" flex flex-col w-full gap-2">
                        <label className=' font-semibold' htmlFor="type">Type of Scholarship</label>
                            <input 
                            type="text" 
                            id='type' 
                            value={type}
                            onChange={e => setType(e.target.value)}
                            placeholder='e.g Undergraduate'
                            className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                    </div>
                    <div className=" flex flex-col w-full gap-2">
                            <label className=' font-semibold' htmlFor="value">Value</label>
                            <input 
                            type="text" 
                            id='value' 
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder='e.g $300,000'
                            className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                    </div>
                </div>
                

                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="deadline">Deadline for application</label>
                    <input 
                    type="text" 
                    id='deadline' 
                    value={deadline}
                    onChange={e => setDeadline(e.target.value)}
                    placeholder='12/10/23'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>

                <button 
                   onClick={handleSubmit} 
                   className=' text-white self-end bg-foreBlue p-2 w-[250px] rounded-full cursor-pointer'>
                    <p>Publish</p>
                </button>
            </form>

          
    </div>
  )
}
