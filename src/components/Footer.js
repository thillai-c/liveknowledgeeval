import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OK</span>
              </div>
              <span className="text-xl font-bold">OKBench</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Democratizing LLM Evaluation with Fully Automated, On-Demand Open Knowledge Benchmarking
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Leaderboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Usage
                </button>
              </li>
              <li>
                <a 
                  href="https://github.com/yourusername/okbench-react" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Paper
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Cite
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 OKBench. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span className="text-gray-400 text-sm">by the OKBench team</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
