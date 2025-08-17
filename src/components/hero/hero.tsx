'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaStar, FaCheckCircle } from 'react-icons/fa';
import styles from './Hero.module.scss';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.textContent} variants={itemVariants}>
            <motion.div 
              className={styles.badge}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaStar className={styles.badgeIcon} />
              <span>Mais de 70 empresas atendidas</span>
            </motion.div>
            
            <motion.h1 className={styles.title} variants={itemVariants}>
              Transforme seu <span className={styles.highlight}>negócio</span> com a &Conti
            </motion.h1>
            <motion.p className={styles.subtitle} variants={itemVariants}>
              Soluções completas em marketing digital e offline que impulsionam o crescimento da sua empresa. 
              Resultados que realmente cabem no seu bolso.
            </motion.p>
            
            <motion.div className={styles.features} variants={itemVariants}>
              <motion.div 
                className={styles.feature}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className={styles.icon} />
                <span>Marketing Digital</span>
              </motion.div>
              <motion.div 
                className={styles.feature}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUsers className={styles.icon} />
                <span>Gerenciamento Collab</span>
              </motion.div>
              <motion.div 
                className={styles.feature}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChartLine className={styles.icon} />
                <span>Resultados Comprovados</span>
              </motion.div>
            </motion.div>
            
            <motion.div className={styles.buttons} variants={itemVariants}>
              <motion.a 
                href="/contato" 
                className="btn btn--primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Faça seu Orçamento
              </motion.a>
              <motion.a 
                href="/portfolio" 
                className="btn btn--outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Portfólio
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div className={styles.visualContent} variants={itemVariants}>
            <motion.div 
              className={styles.statsContainer}
              variants={cardVariants}
            >
              <motion.div 
                className={styles.statCard}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.statNumber}>70+</div>
                <div className={styles.statLabel}>Empresas Atendidas</div>
              </motion.div>
              
              <motion.div 
                className={styles.statCard}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Satisfação</div>
              </motion.div>
              
              <motion.div 
                className={styles.statCard}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Suporte</div>
              </motion.div>
            </motion.div>
            
            <div className={styles.geometricShapes}>
              <motion.div 
                className={styles.shape1}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className={styles.shape2}
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              <motion.div 
                className={styles.shape3}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              ></motion.div>
              <motion.div 
                className={styles.shape4}
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
            </div>
            
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className={styles.scrollText}>Role para descobrir</div>
        <div className={styles.scrollArrow}></div>
      </motion.div>
    </section>
  );
}
