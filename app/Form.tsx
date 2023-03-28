"use client"

import React, { useState } from "react"

const createPost = async (data: any) => {
  const res = await fetch(`/api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    console.log(res)
    throw res
  }
  return res.json()
}

const Form = () => {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if (title?.length) {
      const data = { title, content }
      const res = await createPost(data)
      console.log(res)
      setTitle("")
      setContent("")
    }
  }
  return (
    <form className="my-2 flex items-center" onSubmit={onSubmit}>
      <div>
        <div>
          <label className="mr-2" htmlFor="titleInput">
            Enter the title of the post:
          </label>
          <input
            className="border border-solid border-black rounded-md"
            type="text"
            id="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center mt-4">
          <label className="mr-2" htmlFor="contentInput">
            Enter the content of the post:
          </label>
          <textarea
            className="border border-solid border-black rounded-md"
            id="contentInput"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <button
        className="border border-blue-500 bg-blue-100 w-24 rounded-md mx-8"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
