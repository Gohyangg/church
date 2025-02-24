let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        
        // 모든 슬라이드를 숨김
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // 모든 점에서 'active' 클래스를 제거
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }

        // 현재 슬라이드 표시
        slides[slideIndex - 1].style.display = "block";

        // 현재 점을 활성화
        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 4000); // 4초마다 슬라이드 전환
    }

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex > 3) { slideIndex = 1; }
        if (slideIndex < 1) { slideIndex = 3; }
        showSlides();
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlides();
    }

    showSlides();