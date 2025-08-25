import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  title: string
  description: string
  tech: string[]
  image: string
  demo?: string
  repo?: string
}

export default function ProjectCard({title, description, tech, image, demo, repo}: Props){
  return (
    <motion.article 
      whileHover={{ y: -8 }} 
      className="card overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-light-textSecondary mb-3 sm:mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5">
          {tech.map(t => (
            <span 
              key={t} 
              className="px-2 py-0.5 sm:py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 sm:gap-3 mt-auto">
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4"
            >
              Live Demo
            </a>
          )}
          {repo && (
            <a 
              href={repo} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-outline text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4"
            >
              Ver Código
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
