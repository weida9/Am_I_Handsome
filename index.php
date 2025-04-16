<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Am I Handsome?</title>
    <!-- Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Animate.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style/custom.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'poppins': ['Poppins', 'sans-serif'],
                    },
                    animation: {
                        'bounce-slow': 'bounce 3s infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    screens: {
                        'xs': '480px', // Added extra small breakpoint
                    }
                }
            }
        }
    </script>
</head>
<body class="font-poppins">
    <!-- Animated background shapes -->
    <div class="shape-blob shape-blob-1"></div>
    <div class="shape-blob shape-blob-2"></div>
    <div class="shape-blob shape-blob-3"></div>
    
    <!-- Header Section -->
    <header class="w-full pt-4 sm:pt-6 text-center">
        <div class="container mx-auto">
            <div class="title-container mx-auto mb-3 sm:mb-4">
                <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-200 to-white animate__animated animate__fadeIn title-shadow">Am I Handsome?</h1>
            </div>
            <p class="text-white text-opacity-95 text-base sm:text-lg md:text-xl mb-3 sm:mb-6 max-w-xl mx-auto animate__animated animate__fadeIn animate__delay-1s text-shadow-sm">Discover the truth with our advanced handsomeness detection algorithm. Our AI-powered system will analyze your features and give you an honest evaluation!</p>
        </div>
    </header>
    
    <!-- Main content -->
    <main class="w-full flex-1">
        <div class="container mx-auto px-2 sm:px-4 z-10 py-4 sm:py-6">
            <div class="text-center">
                <div class="max-w-xl mx-auto mb-4 sm:mb-6 bg-white/10 p-2 sm:p-4 rounded-lg text-shadow-sm backdrop-blur-sm border border-white/20">
                    <p class="text-white text-opacity-95 italic text-sm sm:text-base">"Beauty is not in the face; beauty is a light in the heart." — Kahlil Gibran</p>
                </div>
                
                <div class="glassmorphism-card w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl mb-6 sm:mb-10">
                    <div class="info-box mb-4 sm:mb-6 p-2 sm:p-3 rounded-lg bg-white/10 text-white text-shadow-sm text-left text-xs sm:text-sm">
                        <p><i class="fas fa-info-circle mr-1 text-blue-200"></i> Our algorithm measures facial symmetry, features, and other aspects to determine handsomeness. Click the button below to get your result!</p>
                    </div>
                    
                    <button id="handsome-btn" class="w-full py-3 sm:py-4 px-4 sm:px-6 text-white text-base sm:text-xl font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-shadow-sm">
                        <i class="fas fa-magic mr-2"></i>Check Now!
                    </button>
                    
                    <div id="result-container" class="mt-6 sm:mt-10 hidden">
                        <div id="result" class="text-4xl sm:text-5xl md:text-6xl font-bold opacity-0 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300 text-shadow-glow"></div>
                        <div id="result-message" class="mt-2 sm:mt-4 text-white text-opacity-95 text-sm sm:text-lg md:text-xl text-shadow-sm"></div>
                        <div id="result-details" class="mt-4 sm:mt-6 text-white text-opacity-90 text-shadow-sm p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
                            <h3 class="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Analysis Details:</h3>
                            <ul class="text-left list-disc list-inside space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
                                <li>Facial symmetry: <span id="symmetry-score">Calculating...</span></li>
                                <li>Feature balance: <span id="feature-score">Calculating...</span></li>
                                <li>Expression: <span id="expression-score">Calculating...</span></li>
                                <li>Overall score: <span id="overall-score" class="font-semibold">Calculating...</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="flex justify-center space-x-3 sm:space-x-4 mt-2 sm:mt-4 mb-4 sm:mb-8">
                    <button id="share-btn" class="btn-icon" title="Share your result">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button id="history-btn" class="btn-icon" title="View your history">
                        <i class="fas fa-history"></i>
                    </button>
                    <button id="theme-toggle" class="btn-icon" title="Toggle theme">
                        <i class="fas fa-sun"></i>
                    </button>
                </div>
                
                <div class="text-center text-white text-opacity-80 mt-2 sm:mt-4 text-shadow-sm text-xs sm:text-sm">
                    <p>Click the buttons above to share results, view your history, or change the theme.</p>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="w-full py-3 sm:py-4 text-center text-white text-opacity-70 text-shadow-sm z-10 border-t border-white/10 backdrop-blur-sm bg-black/20">
        <div class="container mx-auto px-2 sm:px-4">
            <p>Made with <i class="fas fa-heart text-pink-400"></i> by the Am I Handsome team.</p>
            <p class="text-xs mt-1">Remember: True beauty comes from within and everyone is uniquely beautiful!</p>
            <div class="social-share mt-2 sm:mt-3 flex justify-center space-x-4">
                <a href="#" class="text-white hover:text-blue-300 transition-colors"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-white hover:text-blue-300 transition-colors"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-white hover:text-blue-300 transition-colors"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>

    <!-- Modal for share options (hidden by default) -->
    <div id="share-modal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div class="modal-backdrop absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="glassmorphism-card p-4 sm:p-5 rounded-xl sm:rounded-2xl relative z-10 max-w-[280px] sm:max-w-[320px] w-full mx-auto">
            <h3 class="text-xl font-bold mb-1 text-white text-shadow-sm">Share Your Result</h3>
            <p class="text-white text-opacity-90 mb-3 text-shadow-sm text-xs sm:text-sm">Let your friends know how handsome you are!</p>
            <div class="grid grid-cols-3 gap-3 mb-4">
                <div class="text-center flex flex-col items-center">
                    <div class="w-full flex justify-center">
                        <button class="share-option mb-1"><i class="fab fa-twitter text-2xl sm:text-3xl text-blue-400"></i></button>
                    </div>
                    <p class="text-white text-xs text-shadow-sm">Twitter</p>
                </div>
                <div class="text-center flex flex-col items-center">
                    <div class="w-full flex justify-center">
                        <button class="share-option mb-1"><i class="fab fa-facebook text-2xl sm:text-3xl text-blue-600"></i></button>
                    </div>
                    <p class="text-white text-xs text-shadow-sm">Facebook</p>
                </div>
                <div class="text-center flex flex-col items-center">
                    <div class="w-full flex justify-center">
                        <button class="share-option mb-1"><i class="fab fa-instagram text-2xl sm:text-3xl text-pink-500"></i></button>
                    </div>
                    <p class="text-white text-xs text-shadow-sm">Instagram</p>
                </div>
            </div>
            <p class="text-white text-opacity-80 text-xs text-shadow-sm mb-3">Choose a platform above to share your result directly to your social media.</p>
            <button id="close-modal" class="mt-1 w-full py-1.5 px-3 bg-white bg-opacity-20 rounded-full text-white text-shadow-sm hover:bg-opacity-30 transition-all text-xs sm:text-sm">Close</button>
        </div>
    </div>

    <!-- How It Works Modal (hidden by default) -->
    <div id="how-it-works-modal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div class="modal-backdrop absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="glassmorphism-card p-4 sm:p-6 rounded-xl sm:rounded-2xl relative z-10 max-w-xs sm:max-w-md md:max-w-xl w-full mx-2 sm:mx-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <h3 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white text-shadow-sm">How It Works</h3>
            <div class="text-white text-opacity-90 text-shadow-sm space-y-2 sm:space-y-4 text-sm sm:text-base">
                <p>Our "Am I Handsome?" app uses advanced algorithms to analyze facial features and provide you with an honest assessment of your handsomeness.</p>
                
                <h4 class="text-lg sm:text-xl font-semibold mt-2 sm:mt-4">The Analysis Process:</h4>
                <ol class="list-decimal list-inside space-y-1 sm:space-y-2 pl-1 sm:pl-2 text-xs sm:text-sm">
                    <li>Click the "Check Now!" button to start the analysis</li>
                    <li>Our algorithm generates random scores for facial symmetry, feature balance, and expression</li>
                    <li>You receive a detailed analysis with percentage scores</li>
                    <li>Results are stored locally in your browser history</li>
                </ol>
                
                <h4 class="text-lg sm:text-xl font-semibold mt-2 sm:mt-4">Privacy Matters:</h4>
                <p class="text-xs sm:text-sm">No photos are used or stored. This is just a fun app to generate random results. We respect your privacy completely.</p>
                
                <h4 class="text-lg sm:text-xl font-semibold mt-2 sm:mt-4">Remember:</h4>
                <p class="text-xs sm:text-sm">Beauty is subjective and our app is meant for fun. True beauty comes from confidence, kindness, and being yourself!</p>
            </div>
            <button id="close-how-it-works" class="mt-4 sm:mt-6 w-full py-1.5 sm:py-2 px-3 sm:px-4 bg-white bg-opacity-20 rounded-full text-white text-shadow-sm hover:bg-opacity-30 transition-all text-xs sm:text-base">Got It</button>
        </div>
    </div>

    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
</body>
</html> 