import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Trophy, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section 
      className="bg-white py-20 md:py-32 border-b border-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-gray-900"
            variants={itemVariants}
          >
            OKBench: Democratizing LLM Evaluation with{' '}
            <span className="text-blue-600">Fully Automated</span>, On-Demand Open Knowledge Benchmarking
          </motion.h1>

          {/* Authors */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <p className="text-xl text-gray-600 mb-4">Anonymous Authors</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="#"
              className="btn btn-primary group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FileText size={20} />
              Paper
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://github.com/<your-org>/kode.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Github size={20} />
              Code
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            
            <motion.a
              href="#leaderboard"
              className="btn btn-outline group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Trophy size={20} />
              Leaderboard
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Key Features */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={itemVariants}
          >
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fully Automated</h3>
              <p className="text-gray-600">No human involvement required for benchmark generation</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">On-Demand</h3>
              <p className="text-gray-600">Generate fresh benchmarks anytime with ~2000 QA pairs</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dynamic Knowledge</h3>
              <p className="text-gray-600">Captures evolving knowledge from diverse news sources</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
