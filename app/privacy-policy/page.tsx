import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Student Resource Hub",
  description: "Privacy Policy for the Student Resource Hub platform",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="mb-6">
        <Link href="/" className="retro-button mb-4">
          ← Back to Home
        </Link>
      </nav>

      <h1 className="text-4xl font-bold font-mono mb-8 text-center">Privacy Policy</h1>

      <div className="prose prose-amber max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">1. Information We Collect</h2>
          <p className="font-mono mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 font-mono mb-4">
            <li>Student identification information</li>
            <li>Course enrollment details</li>
            <li>Usage data and preferences</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">2. How We Use Your Information</h2>
          <p className="font-mono mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 font-mono mb-4">
            <li>Provide and maintain our educational services</li>
            <li>Personalize your learning experience</li>
            <li>Improve our platform and services</li>
            <li>Communicate with you about updates and changes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">3. Data Security</h2>
          <p className="font-mono mb-4">
            We implement appropriate security measures to protect your personal information. 
            This includes encryption, secure servers, and regular security assessments.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">4. Your Rights</h2>
          <p className="font-mono mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 font-mono mb-4">
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of certain data collection</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">5. Contact Us</h2>
          <p className="font-mono mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: 8harath.k@gmail.com
            <br />
            Address: Avalon Group Headquarters, 123 Education Street, Tech City, TC 12345
          </p>
        </section>
      </div>

      <footer className="mt-12 pt-4 border-t-2 border-gray-400 text-center font-mono text-sm">
        <p>© {new Date().getFullYear()} Avalon Group. All rights reserved.</p>
      </footer>
    </main>
  )
} 