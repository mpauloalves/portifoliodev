import Head from 'next/head'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcos Alves — Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfólio de Marcos Alves — Desenvolvedor Full Stack | React, TypeScript, Next.js, Java" />
        <meta property="og:title" content="Marcos Alves — Desenvolvedor Full Stack" />
        <meta property="og:description" content="Desenvolvedor Full Stack especializado em React, TypeScript, Next.js e Java" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
    </>
  )
}
