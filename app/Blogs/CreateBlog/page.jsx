
import Header from '@/app/Components/Header'
import React from 'react'
import CreateForm from './CreateForm'

export default function CreateBlog() {
  return (
    <>
            {/* <Header pageName={"Blogs"}/> */}
            <Header pageName={"Blogs"}/>
            {/* <Form /> */}
            <CreateForm />
    </>
  )
}
