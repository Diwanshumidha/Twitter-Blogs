// @ts-nocheck
"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [imageLink, setimageLink] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleimageChange = (value) => {
    setimageLink(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, poster: imageLink }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Blog created successfully");
        console.log("Blog created:", data.Blog);
        // Reset the form fields
        setTitle("");
        setContent("");
        setPoster("");
      } else {
        setErrorMessage("Error creating blog");
        console.error("Error creating blog:", response.statusText);
      }
    } catch (error) {
      setErrorMessage("Error creating blog");
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="">
        <div>
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Create Blog
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="w-full border text-black rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block font-semibold mb-2">
                Image
              </label>
              <input
                type="text"
                id="image"
                value={imageLink}
                onChange={(e) => handleimageChange(e.target.value)}
                className="w-full border rounded px-3 text-black py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block font-semibold mb-2">
                Content
              </label>
              <ReactQuill
                id="content"
                value={content}
                onChange={handleContentChange}
                className="border rounded focus:outline-none  bg-white text-black focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-sky-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-600"
            >
              Create Blog
            </button>
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
