import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Student Resource Hub",
  description: "Cookie Policy for the Student Resource Hub platform",
}

export default function CookiePolicyPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="mb-6">
        <Link href="/" className="retro-button mb-4">
          ← Back to Home
        </Link>
      </nav>

      <h1 className="text-4xl font-bold font-mono mb-8 text-center">Cookie Policy</h1>

      <div className="prose prose-amber max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">1. What Are Cookies</h2>
          <p className="font-mono mb-4">
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by enabling certain features and functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">2. Types of Cookies We Use</h2>
          <div className="mb-4">
            <h3 className="text-xl font-mono font-bold mb-2">Essential Cookies</h3>
            <p className="font-mono mb-4">
              Required for the website to function properly. These cookies enable core functionality 
              such as security, network management, and accessibility.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-mono font-bold mb-2">Performance Cookies</h3>
            <p className="font-mono mb-4">
              Help us understand how visitors interact with our website by collecting and reporting 
              information anonymously.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-mono font-bold mb-2">Functionality Cookies</h3>
            <p className="font-mono mb-4">
              Remember your preferences and settings to provide enhanced, more personal features.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">3. Managing Cookies</h2>
          <p className="font-mono mb-4">
            You can control and/or delete cookies as you wish. You can delete all cookies that are 
            already on your computer and you can set most browsers to prevent them from being placed.
          </p>
          <p className="font-mono mb-4">
            To learn more about cookies and how to manage them, visit:
            <br />
            <a href="https://www.aboutcookies.org" className="text-amber-600 hover:text-amber-700">
              www.aboutcookies.org
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">4. Updates to This Policy</h2>
          <p className="font-mono mb-4">
            We may update this Cookie Policy from time to time. We will notify you of any changes by 
            posting the new Cookie Policy on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4">5. Contact Us</h2>
          <p className="font-mono mb-4">
            If you have any questions about our Cookie Policy, please contact us at:
            <br />
            Email: 8harath.k@gmail.com
          </p>
        </section>
      </div>

      <footer className="mt-12 pt-4 border-t-2 border-gray-400 text-center font-mono text-sm">
        <p>© {new Date().getFullYear()} Avalon Group. All rights reserved.</p>
      </footer>
    </main>
  )
} 