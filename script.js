let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // 모든 슬라이드와 점 비활성화
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // 기존 active 클래스 제거
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // 현재 슬라이드 활성화
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].classList.add("active"); // 새로운 active 클래스 추가
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 4000); // 4초마다 슬라이드 전환
}

function plusSlides(n) {
    slideIndex += n - 1; // 현재 슬라이드를 변경할 때 즉시 적용
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName("mySlides").length - 1;
    }
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// 처음 슬라이드 시작
showSlides();
