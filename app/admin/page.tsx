import { VideoUpload } from "@/components/video-upload"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Video Management</h1>
        <VideoUpload />
      </div>
    </div>
  )
}

