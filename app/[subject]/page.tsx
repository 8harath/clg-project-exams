import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { subjectData } from "@/lib/data"

export async function generateMetadata({ params }: { params: { subject: string } }): Promise<Metadata> {
  const subject = subjectData.find((s) => s.slug === params.subject)

  if (!subject) {
    return {
      title: "Subject Not Found",
    }
  }

  return {
    title: `${subject.name} | Student Resource Hub`,
    description: `Access study materials for ${subject.name}`,
  }
}

export async function generateStaticParams() {
  return subjectData.map((subject) => ({
    subject: subject.slug,
  }))
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const subject = subjectData.find((s) => s.slug === params.subject)

  if (!subject) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="mb-6">
        <Link href="/" className="retro-button mb-4">
          ← Back to Subjects
        </Link>
      </nav>

      <header className="mb-8 text-center border-b-4 border-amber-600 pb-4">
        <h1 className="text-4xl font-bold font-mono mb-2">{subject.name.toUpperCase()}</h1>
        <p className="text-xl font-mono">{subject.modules} Modules</p>
      </header>

      <section className="mb-8">
        <div className="bg-amber-100 p-4 border-2 border-amber-600 mb-6">
          <h2 className="text-2xl font-mono font-bold mb-2">COURSE OVERVIEW</h2>
          <p className="font-mono">{subject.description}</p>
          <div className="mt-4">
            <a href={`/pdfs/${subject.slug}/tlep/tlep-document.pdf`} download className="retro-button">
              Download TLEP Document
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-mono font-bold mb-4 border-b-2 border-gray-400 pb-2">MODULES</h2>
        <div className="space-y-6">
          {subject.moduleList.map((module, index) => (
            <div key={index} className="p-4 border-2 border-gray-800 bg-gray-100">
              <h3 className="text-xl font-mono font-bold mb-2">
                Module {index + 1}: {module.title}
              </h3>
              <p className="font-mono mb-4">{module.description}</p>
              <div className="flex flex-wrap gap-3">
                {module.presentation && (
                  <a
                    href={`/pdfs/${subject.slug}/modules/module${index + 1}-notes.pdf`}
                    download
                    className="retro-button"
                  >
                    Download Notes
                  </a>
                )}
                {module.presentation && (
                  <a
                    href={`/pdfs/${subject.slug}/modules/module${index + 1}-presentation.pdf`}
                    download
                    className="retro-button"
                  >
                    Download Presentation
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-mono font-bold mb-4 border-b-2 border-gray-400 pb-2">PREPARATION MATERIALS</h2>

        {/* Faculty Questions Section */}
        <div className="p-4 border-2 border-gray-800 bg-gray-100 mb-6">
          <h3 className="text-xl font-mono font-bold mb-3 border-b border-gray-400 pb-2">
            POTENTIAL QUESTIONS PROVIDED BY FACULTY
          </h3>
          <p className="font-mono mb-4">
            Review these questions prepared by faculty members to help with your exam preparation.
          </p>
          <a href={`/pdfs/${subject.slug}/preparation/faculty-questions.pdf`} download className="retro-button">
            Download Faculty Questions
          </a>
        </div>

        {/* Avalon Predicted Questions Section */}
        <div className="p-4 border-2 border-gray-800 bg-gray-100 mb-6">
          <h3 className="text-xl font-mono font-bold mb-3 border-b border-gray-400 pb-2">
            POTENTIAL QUESTIONS PREDICTED BY AVALON
          </h3>
          <p className="font-mono mb-4">
            These questions are predicted by Avalon based on previous exam patterns and current syllabus.
          </p>
          <a href={`/pdfs/${subject.slug}/preparation/avalon-predictions.pdf`} download className="retro-button">
            Download Avalon Predictions
          </a>
        </div>

        {/* Additional Reference Materials Section */}
        {subject.showAdditionalMaterials !== false && (
          <div className="p-4 border-2 border-gray-800 bg-gray-100">
            <h3 className="text-xl font-mono font-bold mb-3 border-b border-gray-400 pb-2">
              ADDITIONAL REFERENCE MATERIALS
            </h3>
            <p className="font-mono mb-4">
              Access these supplementary resources for a deeper understanding of each module.
            </p>

            {subject.moduleList.map((module, moduleIndex) => (
              <div key={moduleIndex} className="mb-4 last:mb-0">
                <h4 className="font-mono font-bold mb-2">
                  Module {moduleIndex + 1}: {module.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                  {Array.from({ length: subject.referenceDocsPerModule || 5 }, (_, i) => i + 1).map((docNum) => (
                    <a
                      key={docNum}
                      href={`/pdfs/${subject.slug}/modules/module${moduleIndex + 1}-ref${docNum}.pdf`}
                      download
                      className="retro-button text-sm py-1"
                    >
                      Reference Doc {docNum}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-8 pt-4 border-t border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-mono text-sm">© {new Date().getFullYear()} Avalon Group</p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="/privacy-policy" className="font-mono text-amber-600 hover:text-amber-700">Privacy</a>
            <a href="/cookie-policy" className="font-mono text-amber-600 hover:text-amber-700">Cookies</a>
            <a href="/terms" className="font-mono text-amber-600 hover:text-amber-700">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
