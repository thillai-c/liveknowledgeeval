import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Calendar, TrendingUp, Award, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

const Leaderboard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedDate, setSelectedDate] = useState('2025-06-07');
  const [sortConfig, setSortConfig] = useState({
    key: 'oracle_acc',
    direction: 'desc'
  });

  const leaderboardData = {
    '2025-06-07': [
      {"model": "gemma-3-1b-it", "no_context_acc": 29.93, "oracle_acc": 61.86, "date": "2025-06-07"},
      {"model": "gemma-3-4b-it", "no_context_acc": 44.80, "oracle_acc": 95.80, "date": "2025-06-07"},
      {"model": "gemma-3-12b-it", "no_context_acc": 54.43, "oracle_acc": 97.22, "date": "2025-06-07"},
      {"model": "gemma-3-27b-it", "no_context_acc": 54.17, "oracle_acc": 98.00, "date": "2025-06-07"},
      {"model": "Llama-3.2-1B-Instruct", "no_context_acc": 24.82, "oracle_acc": 48.22, "date": "2025-06-07"},
      {"model": "Llama-3.2-3B-Instruct", "no_context_acc": 45.31, "oracle_acc": 93.34, "date": "2025-06-07"},
      {"model": "Llama-3.1-8B-Instruct", "no_context_acc": 27.28, "oracle_acc": 96.57, "date": "2025-06-07"},
      {"model": "Llama-3.3-70B-Instruct", "no_context_acc": 57.53, "oracle_acc": 97.41, "date": "2025-06-07"},
      {"model": "Phi-3-mini-128k-instruct", "no_context_acc": 44.99, "oracle_acc": 94.38, "date": "2025-06-07"},
      {"model": "Phi-4-mini-instruct", "no_context_acc": 44.60, "oracle_acc": 95.80, "date": "2025-06-07"},
      {"model": "Qwen2.5-0.5B-Instruct", "no_context_acc": 29.35, "oracle_acc": 55.46, "date": "2025-06-07"},
      {"model": "Qwen2.5-1.5B-Instruct", "no_context_acc": 42.66, "oracle_acc": 92.31, "date": "2025-06-07"},
      {"model": "Qwen2.5-3B-Instruct", "no_context_acc": 44.86, "oracle_acc": 96.12, "date": "2025-06-07"},
      {"model": "Qwen2.5-7B-Instruct", "no_context_acc": 50.81, "oracle_acc": 97.22, "date": "2025-06-07"},
      {"model": "Qwen2.5-14B-Instruct", "no_context_acc": 51.33, "oracle_acc": 97.03, "date": "2025-06-07"},
      {"model": "Qwen2.5-32B-Instruct", "no_context_acc": 56.11, "oracle_acc": 98.13, "date": "2025-06-07"},
      {"model": "Qwen2.5-72B-Instruct", "no_context_acc": 56.69, "oracle_acc": 98.13, "date": "2025-06-07"},
      {"model": "Mistral-7B-Instruct-v0.2", "no_context_acc": 31.80, "oracle_acc": 91.40, "date": "2025-06-07"},
      {"model": "Mistral-Small-24B-Instruct-2501", "no_context_acc": 51.39, "oracle_acc": 97.29, "date": "2025-06-07"},
      {"model": "Mixtral-8x7B-Instruct-v0.1", "no_context_acc": 32.19, "oracle_acc": 95.41, "date": "2025-06-07"},
      {"model": "gpt-4o-2024-08-06", "no_context_acc": 62.18, "oracle_acc": 97.87, "date": "2025-06-07"},
      {"model": "o1-mini-2024-09-12", "no_context_acc": 31.03, "oracle_acc": 96.77, "date": "2025-06-07"},
      {"model": "o3-mini-2025-01-31", "no_context_acc": 57.08, "oracle_acc": 98.51, "date": "2025-06-07"},
      {"model": "gemini-1.5-pro", "no_context_acc": 54.69, "oracle_acc": 97.74, "date": "2025-06-07"}
    ],
    '2025-03-22': [
      {"model": "gemma-3-1b-it", "no_context_acc": 31.11, "oracle_acc": 59.06, "date": "2025-03-22"},
      {"model": "gemma-3-4b-it", "no_context_acc": 44.17, "oracle_acc": 94.09, "date": "2025-03-22"},
      {"model": "gemma-3-12b-it", "no_context_acc": 53.32, "oracle_acc": 95.83, "date": "2025-03-22"},
      {"model": "gemma-3-27b-it", "no_context_acc": 54.00, "oracle_acc": 96.21, "date": "2025-03-22"},
      {"model": "Llama-3.2-1B-Instruct", "no_context_acc": 26.55, "oracle_acc": 55.06, "date": "2025-03-22"},
      {"model": "Llama-3.2-3B-Instruct", "no_context_acc": 42.85, "oracle_acc": 91.57, "date": "2025-03-22"},
      {"model": "Llama-3.1-8B-Instruct", "no_context_acc": 30.89, "oracle_acc": 94.81, "date": "2025-03-22"},
      {"model": "Llama-3.3-70B-Instruct", "no_context_acc": 57.23, "oracle_acc": 95.70, "date": "2025-03-22"},
      {"model": "Phi-3-mini-128k-instruct", "no_context_acc": 44.38, "oracle_acc": 94.30, "date": "2025-03-22"},
      {"model": "Phi-4-mini-instruct", "no_context_acc": 43.57, "oracle_acc": 93.62, "date": "2025-03-22"},
      {"model": "Qwen2.5-0.5B-Instruct", "no_context_acc": 28.17, "oracle_acc": 55.19, "date": "2025-03-22"},
      {"model": "Qwen2.5-1.5B-Instruct", "no_context_acc": 41.70, "oracle_acc": 90.64, "date": "2025-03-22"},
      {"model": "Qwen2.5-3B-Instruct", "no_context_acc": 45.36, "oracle_acc": 94.51, "date": "2025-03-22"},
      {"model": "Qwen2.5-7B-Instruct", "no_context_acc": 50.00, "oracle_acc": 95.15, "date": "2025-03-22"},
      {"model": "Qwen2.5-14B-Instruct", "no_context_acc": 52.89, "oracle_acc": 96.09, "date": "2025-03-22"},
      {"model": "Qwen2.5-32B-Instruct", "no_context_acc": 55.79, "oracle_acc": 96.77, "date": "2025-03-22"},
      {"model": "Qwen2.5-72B-Instruct", "no_context_acc": 56.30, "oracle_acc": 96.51, "date": "2025-03-22"},
      {"model": "Mistral-7B-Instruct-v0.2", "no_context_acc": 35.96, "oracle_acc": 90.21, "date": "2025-03-22"},
      {"model": "Mistral-Small-24B-Instruct-2501", "no_context_acc": 53.23, "oracle_acc": 96.43, "date": "2025-03-22"},
      {"model": "Mixtral-8×7B-Instruct-v0.1", "no_context_acc": 33.36, "oracle_acc": 93.40, "date": "2025-03-22"},
      {"model": "GPT-4o", "no_context_acc": 59.96, "oracle_acc": 96.60, "date": "2025-03-22"},
      {"model": "GPT-o1-mini", "no_context_acc": 32.38, "oracle_acc": 96.34, "date": "2025-03-22"},
      {"model": "GPT-o3-mini", "no_context_acc": 55.36, "oracle_acc": 97.28, "date": "2025-03-22"},
      {"model": "Gemini-1.5-pro", "no_context_acc": 55.36, "oracle_acc": 97.28, "date": "2025-03-22"}
    ]
  };

  const sortedData = useMemo(() => {
    const data = leaderboardData[selectedDate] || [];
    return [...data].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];
      
      // Handle string comparison for model names
      if (sortConfig.key === 'model') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [selectedDate, leaderboardData, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const resetSort = () => {
    setSortConfig({
      key: 'oracle_acc',
      direction: 'desc'
    });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' 
      ? <ArrowUp className="w-4 h-4 text-blue-600" />
      : <ArrowDown className="w-4 h-4 text-blue-600" />;
  };

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

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Award className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Award className="w-5 h-5 text-amber-600" />;
    return <span className="w-5 h-5 flex items-center justify-center text-gray-500 font-semibold">{rank}</span>;
  };

  const getRankStyle = (rank) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200 font-semibold';
    if (rank === 2) return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 font-semibold';
    if (rank === 3) return 'bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200 font-semibold';
    return 'hover:bg-gray-50';
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
          <Trophy className="w-10 h-10 text-yellow-500" />
          Leaderboard
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Performance results of various LLMs on OKBench across different evaluation dates
        </p>
      </motion.div>

      {/* Controls */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row justify-center gap-4">
        {/* Date Selector */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 text-gray-500" />
            <label htmlFor="date-select" className="font-semibold text-gray-700">
              Select Date:
            </label>
            <select
              id="date-select"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="2025-06-07">2025-06-07</option>
              <option value="2025-03-22">2025-03-22</option>
            </select>
          </div>
        </div>

        {/* Sort Controls */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <ArrowUpDown className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">Sort by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSort('model')}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  sortConfig.key === 'model' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Model
              </button>
              <button
                onClick={() => handleSort('no_context_acc')}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  sortConfig.key === 'no_context_acc' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                No Context
              </button>
              <button
                onClick={() => handleSort('oracle_acc')}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  sortConfig.key === 'oracle_acc' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Oracle
              </button>
              <button
                onClick={resetSort}
                className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-800">Total Models</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{sortedData.length}</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-green-800">Best Oracle</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">
            {sortedData.length > 0 ? sortedData[0].oracle_acc.toFixed(2) : '0.00'}%
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-6 h-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-purple-800">Best No Context</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">
            {sortedData.length > 0 ? Math.max(...sortedData.map(d => d.no_context_acc)).toFixed(2) : '0.00'}%
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <ArrowUpDown className="w-6 h-6 text-orange-600" />
            <h3 className="text-lg font-semibold text-orange-800">Sorted by</h3>
          </div>
          <p className="text-lg font-bold text-orange-600 capitalize">
            {sortConfig.key === 'no_context_acc' ? 'No Context' : 
             sortConfig.key === 'oracle_acc' ? 'Oracle' : 
             sortConfig.key === 'model' ? 'Model' : sortConfig.key}
          </p>
          <p className="text-sm text-orange-600">
            {sortConfig.direction === 'asc' ? '↑ Ascending' : '↓ Descending'}
          </p>
        </div>
      </motion.div>

      {/* Leaderboard Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Rank</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  <button
                    onClick={() => handleSort('model')}
                    className={`flex items-center gap-2 hover:text-blue-600 transition-colors ${
                      sortConfig.key === 'model' ? 'text-blue-600' : ''
                    }`}
                  >
                    Model
                    {getSortIcon('model')}
                  </button>
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  <button
                    onClick={() => handleSort('no_context_acc')}
                    className={`flex items-center gap-2 hover:text-blue-600 transition-colors ${
                      sortConfig.key === 'no_context_acc' ? 'text-blue-600' : ''
                    }`}
                  >
                    No Context Accuracy
                    {getSortIcon('no_context_acc')}
                  </button>
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  <button
                    onClick={() => handleSort('oracle_acc')}
                    className={`flex items-center gap-2 hover:text-blue-600 transition-colors ${
                      sortConfig.key === 'oracle_acc' ? 'text-blue-600' : ''
                    }`}
                  >
                    Oracle Accuracy
                    {getSortIcon('oracle_acc')}
                  </button>
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <motion.tr
                  key={`${row.model}-${row.date}-${sortConfig.key}-${sortConfig.direction}`}
                  className={`border-b border-gray-200 transition-all duration-200 ${getRankStyle(index + 1)}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.02,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.01,
                    backgroundColor: "rgba(59, 130, 246, 0.05)"
                  }}
                  layout
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getRankIcon(index + 1)}
                      <span className="font-semibold">{index + 1}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                      {row.model}
                    </code>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${row.no_context_acc}%` }}
                        ></div>
                      </div>
                      <span className="font-semibold text-gray-700">
                        {row.no_context_acc.toFixed(2)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${row.oracle_acc}%` }}
                        ></div>
                      </div>
                      <span className="font-semibold text-gray-700">
                        {row.oracle_acc.toFixed(2)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {row.date}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Leaderboard;
