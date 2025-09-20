import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Rocket, 
  Download, 
  Code, 
  FileText, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  Terminal,
  Database,
  Filter
} from 'lucide-react';

const Usage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [copiedCode, setCopiedCode] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const codeExamples = [
    {
      title: 'Basic Usage',
      code: `python main.py --date 2025-06-07 --api_key YOUR_OPENAI_API_KEY`,
      description: 'Generate a benchmark for a specific date with your OpenAI API key'
    },
    {
      title: 'With LLM Judge Filtering',
      code: `python main.py \\
    --date 2025-06-07 \\
    --api_key YOUR_OPENAI_API_KEY \\
    --use_llm_judge \\
    --llm_judge_model gpt-4.1-2025-04-14`,
      description: 'Enable LLM judge filtering for higher quality questions'
    },
    {
      title: 'Custom Model',
      code: `python main.py \\
    --date 2025-06-07 \\
    --api_key YOUR_OPENAI_API_KEY \\
    --model gpt-4o \\
    --version 0`,
      description: 'Use a custom model and prompt template version'
    }
  ];

  const installationSteps = [
    {
      step: '0',
      title: 'Install',
      icon: Download,
      code: `git clone https://github.com/<your-org>/kode.git
cd kode
conda env create -f environment.yml   # python 3.9-3.11
conda activate kode`,
      tip: 'GPU strongly recommended for dense retrieval; CPU is fine for dataset generation.'
    }
  ];

  const features = [
    {
      icon: Database,
      title: 'For today/yesterday',
      description: 'Fetches fresh news from RSS feeds'
    },
    {
      icon: FileText,
      title: 'For older dates',
      description: 'Downloads pre-extracted news from GitHub repository'
    },
    {
      icon: Code,
      title: 'Generates dataset',
      description: 'Creates QA pairs using your specified model'
    },
    {
      icon: Filter,
      title: 'Optional filtering',
      description: 'Uses LLM judge to filter high-quality questions'
    }
  ];

  const argumentsList = [
    { arg: '--date', description: 'Date string in YYYY-MM-DD format (required)' },
    { arg: '--api_key', description: 'Your OpenAI API key (required)' },
    { arg: '--model', description: 'OpenAI model for QA generation (default: gpt-4.1-2025-04-14)' },
    { arg: '--version', description: 'Prompt template version (default: 0)' },
    { arg: '--use_llm_judge', description: 'Enable LLM judge filtering (optional)' },
    { arg: '--llm_judge_model', description: 'Model for judge filtering (default: gpt-4.1-2025-04-14)' }
  ];

  const outputFiles = [
    { file: 'all_news/news_2025-06-07.json', description: 'Raw news articles' },
    { file: '2025-06-07_final_output_v0.json', description: 'Raw generated QAs' },
    { file: '2025-06-07_transformed_v0.json', description: 'Post-processed dataset with signature' },
    { file: '2025-06-07_filtered_by_llm_judge_v0.json', description: 'Filtered dataset (if using judge)' }
  ];

  const copyToClipboard = async (code, title) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(title);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
          <Terminal className="w-10 h-10 text-blue-500" />
          How to Use OKBench
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Generate your own dynamic knowledge benchmarks with OKBench. The framework is fully automated and can be run on-demand to create fresh evaluation datasets.
        </p>
      </motion.div>

      {/* Quick Start */}
      <motion.section variants={itemVariants} className="card">
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="w-8 h-8 text-green-500" />
          <h3 className="text-2xl font-bold text-gray-800">🚀 Quick-start</h3>
        </div>

        {installationSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-6"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <step.icon className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {step.step} · {step.title}
              </h4>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{step.code}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(step.code, step.title)}
                className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
              >
                {copiedCode === step.title ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800">
                <strong>Tip:</strong> {step.tip}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Code Examples */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">1 · Generate Dataset (Single Command)</h4>
          <p className="text-gray-700 mb-6">
            The unified <code className="bg-gray-100 px-2 py-1 rounded text-sm">main.py</code> script handles everything automatically:
          </p>
          
          {codeExamples.map((example, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h5 className="text-lg font-semibold text-gray-800 mb-3">{example.title}</h5>
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(example.code, example.title)}
                  className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
                >
                  {copiedCode === example.title ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{example.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What it does automatically */}
      <motion.section variants={itemVariants} className="card">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">What it does automatically:</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Arguments */}
      <motion.section variants={itemVariants} className="card">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Arguments:</h3>
        <div className="space-y-3">
          {argumentsList.map((arg, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <code className="bg-gray-800 text-white px-3 py-1 rounded text-sm font-mono flex-shrink-0">
                {arg.arg}
              </code>
              <span className="text-gray-700">{arg.description}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Output Files */}
      <motion.section variants={itemVariants} className="card">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Output files:</h3>
        <div className="space-y-3">
          {outputFiles.map((file, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <FileText className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <code className="bg-gray-800 text-white px-2 py-1 rounded text-sm font-mono block mb-1">
                  {file.file}
                </code>
                <span className="text-gray-700 text-sm">{file.description}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* GitHub Link */}
      <motion.section variants={itemVariants} className="text-center">
        <div className="bg-gray-50 border border-gray-200 text-gray-900 p-12 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">GitHub Repository</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access the complete source code and contribute to OKBench
          </p>
          <motion.a
            href="https://github.com/<your-org>/kode.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-5 h-5" />
            View on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Usage;
