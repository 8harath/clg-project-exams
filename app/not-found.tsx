import Link from "next/link"

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl text-center">
      <h1 className="text-4xl font-bold font-mono mb-4">404 - PAGE NOT FOUND</h1>
      <p className="font-mono mb-8">The resource you are looking for does not exist.</p>
      <Link href="/" className="retro-button">
        Return to Homepage
      </Link>
    </main>
  )
}
