document.addEventListener('DOMContentLoaded', function() {
    // Main elements
    const handsomeBtn = document.getElementById('handsome-btn');
    const resultContainer = document.getElementById('result-container');
    const resultElement = document.getElementById('result');
    const resultMessage = document.getElementById('result-message');
    const shareBtn = document.getElementById('share-btn');
    const shareModal = document.getElementById('share-modal');
    const closeModal = document.getElementById('close-modal');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const historyBtn = document.getElementById('history-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Analysis detail elements
    const symmetryScore = document.getElementById('symmetry-score');
    const featureScore = document.getElementById('feature-score');
    const expressionScore = document.getElementById('expression-score');
    const overallScore = document.getElementById('overall-score');
    
    // How It Works modal
    const howItWorksModal = document.getElementById('how-it-works-modal');
    const closeHowItWorksBtn = document.getElementById('close-how-it-works');
    
    // Add "How It Works" button to the UI
    const howItWorksBtn = document.createElement('button');
    howItWorksBtn.id = 'how-it-works-btn';
    howItWorksBtn.className = 'mt-3 sm:mt-6 py-1.5 sm:py-2 px-3 sm:px-4 bg-white bg-opacity-10 rounded-full text-white text-shadow-sm text-xs sm:text-sm hover:bg-opacity-20 transition-all';
    howItWorksBtn.innerHTML = '<i class="fas fa-question-circle mr-1"></i> How It Works';
    document.querySelector('.text-center > .flex').parentNode.insertBefore(howItWorksBtn, document.querySelector('.text-center > .text-white.text-opacity-80'));
    
    // Animations array from Animate.css
    const animations = [
        'animate__fadeIn',
        'animate__bounceIn',
        'animate__zoomIn',
        'animate__flipInX',
        'animate__jackInTheBox',
        'animate__rubberBand'
    ];
    
    // Result messages for "Handsome" result
    const handsomeMessages = [
        "You're absolutely stunning! 🌟",
        "Wow, you could be a model! 📸",
        "Your beauty is off the charts! ✨",
        "Definitely handsome material! 🔥",
        "You've got that movie star look! 🎬",
        "Your handsomeness is undeniable! 💯",
        "You're in the top tier of attractiveness! 🏆"
    ];
    
    // Result messages for "Nome" result
    const nomeMessages = [
        "Beauty is subjective anyway! 🤷‍♂️",
        "Don't worry, personality matters more! 😊",
        "Maybe try a different angle? 📱",
        "Beauty comes from within! ❤️",
        "There's more to life than looks! 🌈",
        "Confidence is more attractive than physical features! 💪",
        "Your uniqueness is your strength! 🌠"
    ];
    
    // Initialize result history
    let resultHistory = JSON.parse(localStorage.getItem('resultHistory')) || [];
    
    // Check for saved theme preference - dark is now default, check for light mode
    if (localStorage.getItem('lightMode') === 'true') {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        // Ensure we have the sun icon for dark mode
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Main handsome check functionality
    handsomeBtn.addEventListener('click', function() {
        // Show loading state
        handsomeBtn.disabled = true;
        handsomeBtn.innerHTML = '<span class="loading-spinner"></span> Analyzing...';
        handsomeBtn.classList.add('opacity-70');
        
        // Hide previous result if visible
        resultContainer.classList.add('hidden');
        
        // Reset and show calculating state in the details
        symmetryScore.textContent = "Calculating...";
        featureScore.textContent = "Calculating...";
        expressionScore.textContent = "Calculating...";
        overallScore.textContent = "Calculating...";
        
        // Remove previous animations
        animations.forEach(animation => {
            resultElement.classList.remove(animation);
        });
        resultElement.classList.add('opacity-0');
        
        // Simulate analysis steps with delay for better user experience
        simulateAnalysisProgress();
        
        // Simulate a server request with setTimeout
        setTimeout(() => {
            // Generate random result data
            const isHandsome = Math.random() > 0.5;
            const data = generateRandomResult(isHandsome);
            
            // Reset button after a realistic analysis time
                handsomeBtn.disabled = false;
            handsomeBtn.innerHTML = '<i class="fas fa-magic mr-2"></i>Check Again!';
                handsomeBtn.classList.remove('opacity-70');
            
            // Save result to history
            saveToHistory(data);
                
                // Display result
                resultElement.textContent = data.result;
                resultContainer.classList.remove('hidden');
            
            // Update analysis details
            symmetryScore.textContent = `${data.symmetry}%`;
            featureScore.textContent = `${data.feature}%`;
            expressionScore.textContent = `${data.expression}%`;
            overallScore.textContent = `${data.level}%`;
            
            // Add color-coding to scores
            colorizeScore(symmetryScore, data.symmetry);
            colorizeScore(featureScore, data.feature);
            colorizeScore(expressionScore, data.expression);
            colorizeScore(overallScore, data.level);
            
            // Add random result message and enhanced details
            if (data.result === 'Handsome') {
                const randomMessage = handsomeMessages[Math.floor(Math.random() * handsomeMessages.length)];
                resultMessage.textContent = `${data.emoji} ${randomMessage} (${data.level}% handsome)`;
                resultElement.classList.add('from-blue-300', 'to-emerald-300');
                resultElement.classList.remove('from-red-500', 'to-orange-500');
            } else {
                const randomMessage = nomeMessages[Math.floor(Math.random() * nomeMessages.length)];
                resultMessage.textContent = `${data.emoji} ${randomMessage} (${data.level}% handsome)`;
                resultElement.classList.add('from-red-500', 'to-orange-500');
                resultElement.classList.remove('from-blue-300', 'to-emerald-300');
            }
                
                // Add animation
                setTimeout(() => {
                    // Apply random animations from Animate.css
                    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
                    resultElement.classList.add('animate__animated', randomAnimation);
                    resultElement.classList.remove('opacity-0');
                    resultElement.classList.add('opacity-100');
                    
                // Ensure the result is visible in the viewport
                resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 200);
        }, 2500);
    });
    
    // Generate random result data
    function generateRandomResult(isHandsome) {
        const symmetryValue = generateScore(isHandsome ? 70 : 30, isHandsome ? 99 : 65);
        const featureValue = generateScore(isHandsome ? 75 : 40, isHandsome ? 98 : 70);
        const expressionValue = generateScore(isHandsome ? 80 : 50, isHandsome ? 99 : 75);
        const overallValue = Math.round((symmetryValue + featureValue + expressionValue) / 3);
        
        const emojis = isHandsome ? ["🌟", "😍", "🔥", "✨"] : ["🤷‍♂️", "😶", "🙃", "🙈"];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        return {
            result: isHandsome ? "Handsome" : "Nome",
            symmetry: symmetryValue,
            feature: featureValue,
            expression: expressionValue,
            level: overallValue,
            emoji: emoji,
            timestamp: new Date().toISOString()
        };
    }
    
    // Simulate a realistic analysis progress
    function simulateAnalysisProgress() {
        setTimeout(() => {
            symmetryScore.textContent = "Analyzing...";
            
            setTimeout(() => {
                symmetryScore.textContent = "Complete";
                symmetryScore.classList.add('text-green-300');
                featureScore.textContent = "Analyzing...";
                
                setTimeout(() => {
                    featureScore.textContent = "Complete";
                    featureScore.classList.add('text-green-300');
                    expressionScore.textContent = "Analyzing...";
                    
                    setTimeout(() => {
                        expressionScore.textContent = "Complete";
                        expressionScore.classList.add('text-green-300');
                        overallScore.textContent = "Calculating...";
                    }, 400);
                }, 600);
            }, 500);
        }, 300);
    }
    
    // Generate a random score within a range
    function generateScore(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Add color-coding to score elements
    function colorizeScore(element, score) {
        // Remove any existing color classes
        element.classList.remove('text-green-300', 'text-yellow-300', 'text-red-300', 'text-blue-300');
        
        // Add color based on score
        if (score >= 80) {
            element.classList.add('text-green-300');
        } else if (score >= 60) {
            element.classList.add('text-blue-300');
        } else if (score >= 40) {
            element.classList.add('text-yellow-300');
        } else {
            element.classList.add('text-red-300');
        }
    }
    
    // Share modal functionality
    shareBtn.addEventListener('click', function() {
        shareModal.classList.remove('hidden');
        setTimeout(() => {
            shareModal.classList.add('animate__animated', 'animate__fadeIn');
        }, 10);
    });
    
    // How It Works modal functionality
    howItWorksBtn.addEventListener('click', function() {
        howItWorksModal.classList.remove('hidden');
        setTimeout(() => {
            howItWorksModal.classList.add('animate__animated', 'animate__fadeIn');
        }, 10);
    });
    
    // Close modal when clicking close button or backdrop
    closeModal.addEventListener('click', closeShareModal);
    modalBackdrop.addEventListener('click', closeShareModal);
    
    // Close How It Works modal
    closeHowItWorksBtn.addEventListener('click', function() {
        closeGenericModal(howItWorksModal);
    });
    howItWorksModal.querySelector('.modal-backdrop').addEventListener('click', function() {
        closeGenericModal(howItWorksModal);
    });
    
    function closeShareModal() {
        closeGenericModal(shareModal);
    }
    
    function closeGenericModal(modal) {
        modal.classList.add('animate__fadeOut');
        setTimeout(() => {
            modal.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeOut');
            modal.classList.add('hidden');
        }, 300);
    }
    
    // Share buttons functionality
    const shareOptions = document.querySelectorAll('.share-option');
    shareOptions.forEach(option => {
        option.addEventListener('click', function() {
            const platform = this.closest('div').querySelector('p').textContent;
            
            const resultText = resultElement.textContent;
            const shareText = `I just found out I'm ${resultText} with a score of ${overallScore.textContent} using the Am I Handsome app!`;
            
            // This would normally open a share dialog for the respective platform
            // For demonstration, we'll just show an alert
            showToast(`Sharing to ${platform}: "${shareText}"`, "info");
            
            closeShareModal();
        });
    });
    
    // History functionality - enhanced history display
    historyBtn.addEventListener('click', function() {
        const count = resultHistory.length;
        if (count === 0) {
            showToast('You have no check history yet. Try checking your handsomeness first!', 'warning');
        } else {
            // Create a modal for history display
            const historyModal = document.createElement('div');
            historyModal.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'z-50');
            historyModal.innerHTML = `
                <div class="absolute inset-0 bg-black bg-opacity-50" id="history-backdrop"></div>
                <div class="glassmorphism-card p-4 sm:p-6 rounded-xl sm:rounded-2xl relative z-10 max-w-xs sm:max-w-md w-full mx-2 sm:mx-4">
                    <h3 class="text-xl sm:text-2xl font-bold mb-2 text-white text-shadow-sm">Your Handsome History</h3>
                    <p class="text-white text-opacity-90 mb-3 sm:mb-4 text-shadow-sm text-xs sm:text-base">Your last ${count} handsomeness checks:</p>
                    <div class="max-h-72 sm:max-h-96 overflow-y-auto pr-2 custom-scrollbar" id="history-list">
                        ${resultHistory.map((item, index) => `
                            <div class="flex items-center justify-between p-2 sm:p-3 mb-2 rounded-lg ${item.result === 'Handsome' ? 'bg-gradient-to-r from-blue-500/20 to-emerald-500/20' : 'bg-gradient-to-r from-red-500/20 to-orange-500/20'} border border-white/10">
                                <div class="flex items-center">
                                    <span class="text-xl sm:text-2xl mr-2">${item.emoji || '❓'}</span>
                                    <div>
                                        <div class="font-semibold text-white text-shadow-sm text-sm sm:text-base">${item.result}</div>
                                        <div class="text-xs text-white/70">${new Date(item.timestamp).toLocaleString()}</div>
                                    </div>
                                </div>
                                <div class="text-base sm:text-lg font-bold ${item.result === 'Handsome' ? 'text-emerald-300' : 'text-orange-300'} text-shadow-sm">${item.level || '??'}%</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="mt-3 sm:mt-4 bg-white/10 p-2 sm:p-3 rounded-lg text-shadow-sm text-xs sm:text-sm">
                        <p class="text-white text-opacity-90">
                            <i class="fas fa-chart-bar mr-1"></i>
                            <span class="font-semibold">Stats: </span>
                            <span id="handsome-count">${resultHistory.filter(item => item.result === 'Handsome').length}</span> handsome results,
                            <span id="nome-count">${resultHistory.filter(item => item.result === 'Nome').length}</span> nome results
                        </p>
                        <p class="text-white text-opacity-90 mt-1">
                            <i class="fas fa-star mr-1"></i>
                            <span class="font-semibold">Average: </span>
                            <span id="average-score" class="text-blue-300">${calculateAverageScore(resultHistory)}%</span> handsome
                        </p>
                    </div>
                    <div class="flex space-x-2 mt-3 sm:mt-4">
                        <button id="clear-history" class="py-1.5 sm:py-2 px-3 sm:px-4 bg-red-500/30 hover:bg-red-500/50 transition-all rounded-full text-white text-shadow-sm text-xs sm:text-sm flex-1">
                            <i class="fas fa-trash-alt mr-1"></i> Clear History
                        </button>
                        <button id="close-history" class="py-1.5 sm:py-2 px-3 sm:px-4 bg-white/20 hover:bg-white/30 transition-all rounded-full text-white text-shadow-sm text-xs sm:text-sm flex-1">
                            <i class="fas fa-times mr-1"></i> Close
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(historyModal);
            
            // Animation
            setTimeout(() => {
                historyModal.querySelector('.glassmorphism-card').classList.add('animate__animated', 'animate__fadeIn');
            }, 10);
            
            // Event listeners
            document.getElementById('close-history').addEventListener('click', function() {
                closeHistoryModal(historyModal);
            });
            
            document.getElementById('history-backdrop').addEventListener('click', function() {
                closeHistoryModal(historyModal);
            });
            
            document.getElementById('clear-history').addEventListener('click', function() {
                if (confirm('Are you sure you want to clear your history?')) {
                    resultHistory = [];
                    localStorage.removeItem('resultHistory');
                    closeHistoryModal(historyModal);
                    showToast("History cleared successfully!", "success");
                }
            });
        }
    });
    
    function closeHistoryModal(modal) {
        modal.querySelector('.glassmorphism-card').classList.add('animate__fadeOut');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    // Calculate average score from history
    function calculateAverageScore(history) {
        if (!history || history.length === 0) return 0;
        
        const sum = history.reduce((total, item) => {
            return total + (item.level || 0);
        }, 0);
        
        return Math.round(sum / history.length);
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('lightMode', 'true');
            showToast("Light mode enabled", "info");
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('lightMode', 'false');
            showToast("Dark mode enabled", "info");
        }
    });
    
    // Save result to history with enhanced data
    function saveToHistory(data) {
        const timestamp = new Date().toISOString();
        resultHistory.push({
            result: data.result,
            level: data.level,
            emoji: data.emoji,
            symmetry: data.symmetry,
            feature: data.feature,
            expression: data.expression,
            timestamp: timestamp
        });
        
        // Keep only last 10 results
        if (resultHistory.length > 10) {
            resultHistory = resultHistory.slice(-10);
        }
        
        localStorage.setItem('resultHistory', JSON.stringify(resultHistory));
    }
    
    // Toast notification system
    function showToast(message, type = 'info') {
        // Remove any existing toasts first
        const existingToasts = document.querySelectorAll('.toast-notification');
        existingToasts.forEach(toast => {
            document.body.removeChild(toast);
        });
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast-notification fixed bottom-4 left-1/2 transform -translate-x-1/2 py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-white text-shadow-sm z-50 animate__animated animate__fadeInUp text-xs sm:text-sm text-center flex items-center justify-center';
        toast.style.width = 'fit-content';
        toast.style.maxWidth = '90%';
        toast.style.margin = '0 auto';
        
        // Set background color based on type
        switch(type) {
            case 'success':
                toast.classList.add('bg-green-500/90');
                message = `<i class="fas fa-check-circle mr-1"></i> ${message}`;
                break;
            case 'error':
                toast.classList.add('bg-red-500/90');
                message = `<i class="fas fa-exclamation-circle mr-1"></i> ${message}`;
                break;
            case 'warning':
                toast.classList.add('bg-yellow-500/90');
                message = `<i class="fas fa-exclamation-triangle mr-1"></i> ${message}`;
                break;
            default: // info
                toast.classList.add('bg-blue-500/90');
                message = `<i class="fas fa-info-circle mr-1"></i> ${message}`;
        }
        
        toast.innerHTML = message;
        document.body.appendChild(toast);
        
        // Center the toast horizontally
        const toastWidth = toast.offsetWidth;
        toast.style.marginLeft = `-${toastWidth / 2}px`;
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('animate__fadeInUp');
            toast.classList.add('animate__fadeOutDown');
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
    
    // Add floating animation to background elements
    document.querySelectorAll('.shape-blob').forEach(blob => {
        blob.classList.add('animate-float');
    });
    
    // Check for device type and adjust animations for better performance on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        // Reduce animation complexity for mobile devices
        document.querySelectorAll('.shape-blob').forEach(blob => {
            blob.style.animationDuration = '30s'; // Slower animations
        });
        
        // Simplify other animations
        document.documentElement.style.setProperty('--animate-duration', '0.8s');
    }
    
    // Handle orientation changes for responsive layout
    window.addEventListener('orientationchange', function() {
        // Give time for the orientation to change
        setTimeout(() => {
            // Adjust UI elements for new orientation
            if (window.innerHeight > window.innerWidth) {
                // Portrait
                document.querySelectorAll('.glassmorphism-card').forEach(card => {
                    card.classList.add('w-full');
                });
            } else {
                // Landscape
                document.querySelectorAll('.glassmorphism-card').forEach(card => {
                    card.classList.remove('w-full');
                });
            }
        }, 300);
    });
    
    // Add auto scrolling to results when they're displayed
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && entry.target.classList.contains('opacity-100')) {
                entry.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }, { threshold: 0.5 });
    
    if (resultElement) {
        observer.observe(resultElement);
    }
}); 