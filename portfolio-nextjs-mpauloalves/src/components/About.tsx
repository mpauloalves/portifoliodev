import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function About(){
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 dark:bg-dark-bg">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <p className="text-base sm:text-lg mb-4 md:mb-6 text-slate-700 dark:text-light-textSecondary">
              Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais que combinam design 
              cuidadoso com engenharia robusta. Meu foco está em construir interfaces acessíveis e de alta 
              performance que proporcionam experiências excepcionais aos usuários.
            </p>
            <p className="text-base sm:text-lg mb-4 md:mb-6 text-slate-700 dark:text-light-textSecondary">
              Atualmente, trabalho com desenvolvimento web utilizando tecnologias modernas como React, 
              TypeScript e Next.js no frontend, e Java com Spring Boot no backend. Busco constantemente 
              aprimorar minhas habilidades técnicas e me mantenho atualizado com as melhores práticas do mercado.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="bg-white dark:bg-dark-card rounded-xl p-4 sm:p-6 shadow-md"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 gradient-text">Destaques</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <CheckIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Experiência com desenvolvimento de APIs RESTful</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Conhecimento em arquitetura de software e padrões de projeto</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Implementação de boas práticas de acessibilidade e SEO</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Experiência com metodologias ágeis e trabalho em equipe</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
