import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 dark:from-primary/5 dark:to-secondary/10 -z-10" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom grid md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <span className="text-primary font-medium">Olá, eu sou</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4 md:mb-6">
            Marcos <span className="gradient-text">Paulo Alves</span> 👋
          </h1>
          <p className="text-lg sm:text-xl mb-6 md:mb-8 text-slate-700 dark:text-light-textSecondary max-w-lg mx-auto md:mx-0">
            Desenvolvedor Full Stack | Java • React • TypeScript
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn-primary">
              Ver Projetos
            </a>
            <a href="/cv.pdf" download className="btn-outline">
              Download CV
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-card shadow-xl">
              <Image 
                src="/avatar.svg" 
                alt="Marcos Paulo Alves" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
