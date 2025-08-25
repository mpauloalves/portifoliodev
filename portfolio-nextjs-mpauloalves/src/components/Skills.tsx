import { motion } from 'framer-motion'

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

export default function Skills() {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: 'devicon-react-original', category: 'frontend' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', category: 'frontend' },
    { name: 'Next.js', icon: 'devicon-nextjs-original', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', category: 'frontend' },
    { name: 'HTML5', icon: 'devicon-html5-plain', category: 'frontend' },
    { name: 'CSS3', icon: 'devicon-css3-plain', category: 'frontend' },
    
    // Backend
    { name: 'Java', icon: 'devicon-java-plain', category: 'backend' },
    { name: 'Spring', icon: 'devicon-spring-plain', category: 'backend' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', category: 'backend' },
    { name: 'Express', icon: 'devicon-express-original', category: 'backend' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', category: 'backend' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', category: 'backend' },
    
    // Tools
    { name: 'Git', icon: 'devicon-git-plain', category: 'tools' },
    { name: 'Docker', icon: 'devicon-docker-plain', category: 'tools' },
    { name: 'VS Code', icon: 'devicon-vscode-plain', category: 'tools' },
    { name: 'Jest', icon: 'devicon-jest-plain', category: 'tools' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const filterSkills = (category: 'frontend' | 'backend' | 'tools') => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">Frontend</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {filterSkills('frontend').map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                  variants={item}
                >
                  <i className={`${skill.icon} text-3xl sm:text-4xl mb-2 text-primary`}></i>
                  <span className="text-xs sm:text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">Backend</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {filterSkills('backend').map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                  variants={item}
                >
                  <i className={`${skill.icon} text-3xl sm:text-4xl mb-2 text-primary`}></i>
                  <span className="text-xs sm:text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">Ferramentas</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {filterSkills('tools').map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                  variants={item}
                >
                  <i className={`${skill.icon} text-3xl sm:text-4xl mb-2 text-primary`}></i>
                  <span className="text-xs sm:text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}