"use server"

import { put } from "@vercel/blob"

export async function uploadVideo(formData: FormData) {
  const file = formData.get("video") as File
  const filename = `background-${Date.now()}.mp4`

  // Upload to Vercel Blob
  const blob = await put(filename, file, {
    access: "public",
    addRandomSuffix: false,
  })

  return blob.url
}

