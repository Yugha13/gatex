"use client"

import { useState } from "react"
import { uploadVideo } from "@/app/actions/upload-video"
import { Button } from "@/components/ui/button"

export function VideoUpload() {
  const [uploading, setUploading] = useState(false)
  const [url, setUrl] = useState<string>("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setUploading(true)

    try {
      const formData = new FormData(event.currentTarget)
      const url = await uploadVideo(formData)
      setUrl(url)
      alert("Video uploaded successfully! URL: " + url)
    } catch (error) {
      console.error("Error uploading:", error)
      alert("Error uploading video")
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="file"
        name="video"
        accept="video/mp4"
        required
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-zinc-50 file:text-zinc-700
          hover:file:bg-zinc-100"
      />
      <Button type="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Video"}
      </Button>
      {url && (
        <div className="mt-4">
          <p className="text-sm text-zinc-500">Video URL:</p>
          <code className="text-xs break-all">{url}</code>
        </div>
      )}
    </form>
  )
}

