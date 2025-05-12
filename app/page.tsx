import Link from "next/link"
import type { Metadata } from "next"
import { subjectData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Student Resource Hub | Jain University",
  description: "Academic resources for 4th semester Data Analytics students",
}

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8 text-center border-b-4 border-amber-600 pb-4">
        <h1 className="text-4xl font-bold font-mono mb-2">STUDENT RESOURCE HUB</h1>
        <p className="text-xl font-mono">Jain University - 4th Semester Data Analytics</p>
      </header>

      <section className="mb-8 bg-amber-100 p-4 border-2 border-amber-600">
        <h2 className="text-2xl font-mono font-bold mb-2">WELCOME, STUDENT</h2>
        <p className="font-mono">
          This is your one-stop resource center for all academic materials. Select a subject below to access module-wise
          notes and resources.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjectData.map((subject, index) => (
          <Link
            href={`/${subject.slug}`}
            key={subject.slug}
            className={`block border-4 border-gray-800 bg-gray-200 hover:bg-amber-200 p-6 transition-colors font-mono text-center active:bg-amber-300 active:translate-y-1 ${
              subject.slug === "python-programming" ? "md:col-span-2 md:max-w-md md:mx-auto" : ""
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{subject.name}</h2>
            <p className="text-sm">{subject.modules} Modules</p>
          </Link>
        ))}
      </section>

      <footer className="mt-12 pt-4 border-t-2 border-gray-400 text-center font-mono text-sm">
        <p>© {new Date().getFullYear()} Jain University - Data Analytics Department</p>
        <p className="mt-1">Built with ♥ for students, by students</p>
      </footer>
    </main>
  )
}
