import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'E-commerce Dashboard',
    description: 'Dashboard completo para gerenciamento de produtos, pedidos e clientes com análise de dados em tempo real.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    image: '/images/projects/ecommerce-dashboard.svg',
    demo: 'https://dashboard-demo.vercel.app',
    repo: 'https://github.com/mpauloalves/ecommerce-dashboard'
  },
  {
    title: 'API RESTful Java',
    description: 'API completa com autenticação JWT, documentação Swagger e testes unitários/integração.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    image: '/images/projects/java-api.svg',
    repo: 'https://github.com/mpauloalves/java-api'
  },
  {
    title: 'App de Finanças Pessoais',
    description: 'Aplicativo para controle de gastos com categorização automática e relatórios personalizados.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    image: '/images/projects/finance-app.svg',
    demo: 'https://finance-app-demo.vercel.app',
    repo: 'https://github.com/mpauloalves/finance-app'
  },
  {
    title: 'Sistema de Gestão de Tarefas',
    description: 'Aplicação para gerenciamento de projetos e tarefas com funcionalidades de Kanban e Gantt.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    image: '/images/projects/task-management.svg',
    demo: 'https://task-system-demo.vercel.app',
    repo: 'https://github.com/mpauloalves/task-management'
  }
];

// Animação para os elementos da seção
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 container-custom">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-8 md:mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 gradient-text"
            variants={itemVariants}
          >
            Projetos em Destaque
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base text-slate-700 dark:text-light-textSecondary max-w-2xl mx-auto px-4"
            variants={itemVariants}
          >
            Uma seleção dos meus trabalhos recentes em desenvolvimento web e aplicações
          </motion.p>
        </div>

        <motion.div 
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-0"
          variants={containerVariants}
        >
          {PROJECTS.map(project => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
