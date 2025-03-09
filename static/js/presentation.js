document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const slideImg = document.getElementById('current-slide');
    const audio = document.getElementById('slide-audio');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const slideCounter = document.getElementById('slide-counter');
    
    // State
    let currentSlideIndex = 0;
    let isPlaying = false;
    let autoAdvance = false;
    const slides = presentationData.slides;
    
    // Initialize
    updateSlideCounter();
    
    // Event listeners
    prevBtn.addEventListener('click', previousSlide);
    nextBtn.addEventListener('click', nextSlide);
    playBtn.addEventListener('click', startPresentation);
    pauseBtn.addEventListener('click', pausePresentation);
    
    // When audio ends, advance to next slide automatically
    audio.addEventListener('ended', function() {
        if (autoAdvance && currentSlideIndex < slides.length - 1) {
            setTimeout(nextSlide, 500); // Small delay before advancing
        } else if (currentSlideIndex === slides.length - 1) {
            // End of presentation
            autoAdvance = false;
            togglePlayPauseButtons();
        }
    });
    
    function previousSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSlide();
            updateControls();
        }
    }
    
    function nextSlide() {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            updateSlide();
            updateControls();
            
            if (autoAdvance) {
                audio.play();
            }
        } else if (autoAdvance) {
            // End of presentation
            autoAdvance = false;
            togglePlayPauseButtons();
        }
    }
    
    function updateSlide() {
        // Update image
        slideImg.src = slides[currentSlideIndex].image;
        slideImg.alt = `Slide ${currentSlideIndex + 1}`;
        
        // Update audio source
        audio.src = slides[currentSlideIndex].audio;
        
        updateSlideCounter();
    }
    
    function updateControls() {
        // Enable/disable navigation buttons
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === slides.length - 1;
    }
    
    function updateSlideCounter() {
        slideCounter.textContent = `Slide ${currentSlideIndex + 1} of ${slides.length}`;
    }
    
    function startPresentation() {
        autoAdvance = true;
        audio.play();
        togglePlayPauseButtons();
    }
    
    function pausePresentation() {
        autoAdvance = false;
        audio.pause();
        togglePlayPauseButtons();
    }
    
    function togglePlayPauseButtons() {
        if (autoAdvance) {
            playBtn.classList.add('hidden');
            pauseBtn.classList.remove('hidden');
        } else {
            pauseBtn.classList.add('hidden');
            playBtn.classList.remove('hidden');
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            previousSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === ' ') { // Space bar
            if (autoAdvance) {
                pausePresentation();
            } else {
                startPresentation();
            }
            e.preventDefault(); // Prevent page scrolling
        }
    });
});
