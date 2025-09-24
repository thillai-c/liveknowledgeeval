import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Zap, Globe, BarChart3 } from 'lucide-react';

const Overview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const comparisonData = [
    {
      benchmark: 'StreamingQA',
      humanInvolvement: 'Partial (curated + synthetic)',
      automation: 'Partial',
      updateFreq: 'Static'
    },
    {
      benchmark: 'RealTime QA',
      humanInvolvement: 'Yes (media-sourced quizzes)',
      automation: 'Partial',
      updateFreq: 'Weekly (~30 QA pairs)'
    },
    {
      benchmark: 'FreshQA',
      humanInvolvement: 'Yes (human-written)',
      automation: 'Low',
      updateFreq: 'Weekly (answers only)'
    },
    {
      benchmark: 'Ours (OKBench)',
      humanInvolvement: 'No (auto-generated)',
      automation: 'Full',
      updateFreq: 'Any time (~2000 QA pairs)',
      highlight: true
    }
  ];

  const pipelineSteps = [
    {
      title: 'News Extraction',
      description: 'We collect and preprocess news articles published within the past 24 hours from a diverse set of outlets, including both mainstream and specialized publications. Articles are retrieved via RSS feeds and parsed.',
      icon: Globe
    },
    {
      title: 'QA Generation',
      description: 'We use an LLM-based agent to generate initial multiple-choice question–answer pairs from curated news articles. The agent is instructed to prioritize recent and unique facts, particularly entities, events, and developments that are unlikely to appear in older training data.',
      icon: Zap
    },
    {
      title: 'Question Validation',
      description: 'We introduce a dedicated question validation agent that assesses the quality and clarity of each question. The agent verifies whether each question can be answered uniquely and unambiguously, checking for direct references to source articles and ensuring clear date references.',
      icon: CheckCircle
    },
    {
      title: 'Dataset Versioning',
      description: 'Each benchmark release is assigned a unique signature serving as its version identifier. Each signature encodes the agent LLM model name and version, decoding hyperparameters, dataset generation date and timestamp, and a randomly generated hash.',
      icon: BarChart3
    }
  ];

  const newsSources = [
    {
      category: 'General / Mainstream News',
      sources: 'CNN, BBC, Reuters, The Guardian, Fox News, NBC News, USA Today, HuffPost, CBS News'
    },
    {
      category: 'International Coverage',
      sources: 'Al Jazeera, DW, RT, Channel News Asia (CNA), Times of India, South China Morning Post (SCMP)'
    },
    {
      category: 'Technology and Science',
      sources: 'TechCrunch, The Verge, Engadget, Ars Technica, Gizmodo, PC Gamer, TechRadar'
    },
    {
      category: 'Business / Finance',
      sources: 'Bloomberg'
    },
    {
      category: 'Lifestyle / Culture',
      sources: 'GQ, Vanity Fair'
    },
    {
      category: 'Open-Source Community News',
      sources: 'WikiNews'
    }
  ];

  const qaExamples = [
    {
      generationDate: '2025-09-22',
      question: 'On September 22, 2025, which U.S. state revised its consumer privacy regulations to include rules on automated decision-making, risk assessment, and cybersecurity audits?',
      choices: ['A. New York', 'B. California', 'C. Texas', 'D. Florida'],
      answer: 'B. California'
    },
    {
      generationDate: '2025-09-19',
      question: 'As of September 19, 2025, what is the new minimum payment required when filing an H-1B petition for certain foreign workers under U.S. restrictions?',
      choices: ['A. $10,000', 'B. $50,000', 'C. $100,000', 'D. $150,000'],
      answer: 'C. $100,000'
    },
    {
      generationDate: '2025-09-16',
      question: 'Which tech company announced a $30 billion investment in the U.K. focused on AI, cloud, and infrastructure?',
      choices: ['A. Google', 'B. Amazon', 'C. Microsoft', 'D. Apple'],
      answer: 'C. Microsoft'
    }
  ];

  const findings = [
    {
      title: 'Impact of Fresh Knowledge',
      description: 'When models must rely solely on parametric memory (No context), their performance is far from perfect across all sizes. This reflects the challenge of truly new facts that arise after the model\'s pretraining cutoff.'
    },
    {
      title: 'Oracle Context and Reading Comprehension',
      description: 'Once the ground-truth article is appended to the query, most models (above a certain size threshold) quickly climb to high accuracy (~95%). Even a 4-7B parameter model can answer correctly given the right passage.'
    },
    {
      title: 'Model Size Scaling',
      description: 'The gap between smaller and larger models in the No context setting is smaller than one might expect from standard benchmarks that rely heavily on memorized knowledge. For fresh news QA, model scaling shows more limited benefits compared to memorized knowledge benchmarks.'
    }
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-16"
    >
      {/* Abstract */}
      <motion.section variants={itemVariants} className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Abstract</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Knowledge-intensive question answering is central to large language models (LLMs) and is typically assessed using static benchmarks derived from sources like Wikipedia and textbooks. However, these benchmarks fail to capture evolving knowledge in a dynamic world, and centralized curation struggles to keep pace with rapid LLM advancements.
          </p>
          <p>
            To address these drawbacks, we propose OpenKnowledgeBench (OKBench), a fully automated framework for generating high-quality, dynamic knowledge benchmarks on demand. Focusing on the news domain where knowledge updates daily, OKBench is an agentic framework that automates the sourcing, creation, validation, and distribution of benchmarks.
          </p>
          <p>
            Our approach democratizes benchmark creation and facilitates thorough evaluation of retrieval-augmented methods by reducing overlap with pretraining data. We evaluate our framework on multiple open-source and proprietary LLMs of various sizes and configurations, both with and without retrieval over freshly generated knowledge.
          </p>
          <p>
            Our results reveal distinct model behaviors when confronted with new information and highlight how retrieval narrows the performance gap between small and large models. These findings underscore the importance of evaluating LLMs on evolving knowledge benchmarks.
          </p>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section variants={itemVariants} className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            One of the most common uses of large language models (LLMs) is for answering knowledge-intensive questions. However, this task is challenging as factual knowledge in the real world evolves rapidly. Well-trained models can quickly become outdated, raising the need for continual model updates or improved retrieval-augmented generation (RAG) techniques.
          </p>
          <p>
            At the same time, the lack of transparency in training data makes it difficult to assess how recent a model's knowledge truly is. Existing benchmarks also struggle to keep pace: once released, their contents may be absorbed into future training data, leading to benchmark saturation and weakening their utility.
          </p>
          <p className="text-lg font-semibold text-blue-600">
            We propose that the solution to these challenges is <strong>fast, automated, decentralized curation of dynamic knowledge benchmarks</strong> that can track LLM development in real time and offer a clean testbed for evaluating retrieval augmented methods.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">Benchmark</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">Human Involvement</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">Automation</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">Update Freq. & Scale</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={index}
                  className={`border-b hover:bg-gray-50 transition-colors ${
                    row.highlight ? 'bg-blue-50 font-semibold' : ''
                  }`}
                >
                  <td className={`px-6 py-4 ${row.highlight ? 'text-blue-700' : 'text-gray-700'}`}>
                    {row.benchmark}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{row.humanInvolvement}</td>
                  <td className="px-6 py-4 text-gray-700">{row.automation}</td>
                  <td className="px-6 py-4 text-gray-700">{row.updateFreq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Automated Benchmarking */}
      <motion.section variants={itemVariants} className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Automated Dynamic Benchmarking with OKBench</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Benchmark Construction Pipeline</h3>
          <div className="text-center mb-8">
            <img 
              src="/assets/pipeline_new_page-0001.jpg" 
              alt="OKBench Pipeline" 
              className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            We design an agentic framework for dynamic knowledge benchmarking. The pipeline consists of four steps: (1) News extraction, (2) QA generation, (3) question validation, and (4) dataset versioning.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* News Sources */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">News Sources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newsSources.map((source, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-blue-600 mb-2">{source.category}</h4>
                <p className="text-sm text-gray-600">{source.sources}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Example QA Pairs */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Example Generated QA Pairs</h3>
          <div className="space-y-6">
            {qaExamples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
                    Generated: {example.generationDate}
                  </span>
                  <p className="font-semibold text-gray-800">
                    <strong>Question:</strong> {example.question}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {example.choices.map((choice, choiceIndex) => (
                    <div key={choiceIndex} className="bg-white p-3 rounded border border-gray-200 text-sm">
                      {choice}
                    </div>
                  ))}
                </div>
                <p className="font-semibold text-green-600">
                  <strong>Answer:</strong> {example.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Evaluation Results */}
      <motion.section variants={itemVariants} className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Evaluation Results</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Key Findings</h3>
          <div className="space-y-6">
            {findings.map((finding, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-400"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{finding.title}</h4>
                <p className="text-gray-700 leading-relaxed">{finding.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Performance Visualization</h3>
          <div className="space-y-8">
            <div className="text-center">
              <img 
                src="/assets/dynamic_qa_with_mmlu_reference_4_models_page-0001.jpg" 
                alt="Dynamic QA Performance with MMLU Reference" 
                className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-4 text-gray-600 italic">
                No context vs. Oracle context QA Accuracy on OKBench, plotted alongside each model's performance on MMLU Pro as a reference for memorized knowledge.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="/assets/no_context_and_oracle_page-0001.jpg" 
                alt="No Context and Oracle Performance" 
                className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-4 text-gray-600 italic">
                Comparison of model performance with and without oracle context.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="/assets/retrieval_accuracy_page-0001.jpg" 
                alt="Retrieval Accuracy" 
                className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-4 text-gray-600 italic">
                Top-k Retrieval Accuracy for BM25, DPR, and ColBERT v2 across news corpora of different time windows.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Overview;
