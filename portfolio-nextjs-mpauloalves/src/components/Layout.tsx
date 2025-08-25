import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main 
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-20 w-full"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}