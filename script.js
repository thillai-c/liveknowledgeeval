// Tab functionality
function showTab(tabName) {
    // Hide all tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Remove active class from all nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab panel
    const selectedPanel = document.getElementById(tabName);
    if (selectedPanel) {
        selectedPanel.classList.add('active');
    }
    
    // Add active class to selected nav button
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // Load leaderboard data if leaderboard tab is selected
    if (tabName === 'leaderboard') {
        loadLeaderboardData();
    }
}

// Leaderboard data
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

function loadLeaderboardData() {
    const dateSelect = document.getElementById('date-select');
    const selectedDate = dateSelect.value;
    const data = leaderboardData[selectedDate];
    
    if (!data) return;
    
    // Sort by oracle accuracy (descending)
    const sortedData = data.sort((a, b) => b.oracle_acc - a.oracle_acc);
    
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = '';
    
    sortedData.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><code>${row.model}</code></td>
            <td>${row.no_context_acc.toFixed(2)}%</td>
            <td>${row.oracle_acc.toFixed(2)}%</td>
            <td>${row.date}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set up tab navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
        });
    });
    
    // Set up date selector for leaderboard
    const dateSelect = document.getElementById('date-select');
    if (dateSelect) {
        dateSelect.addEventListener('change', loadLeaderboardData);
    }
    
    // Load initial leaderboard data
    loadLeaderboardData();
    
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        if (!scrollBtn) {
            const btn = document.createElement('button');
            btn.id = 'scroll-to-top';
            btn.innerHTML = '↑';
            btn.className = 'scroll-to-top';
            btn.onclick = scrollToTop;
            document.body.appendChild(btn);
        }
    } else {
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// Add CSS for scroll to top button
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: all 0.3s ease;
    }
    
    .scroll-to-top:hover {
        background: #1d4ed8;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);
