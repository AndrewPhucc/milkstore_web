
// Lấy danh sách các slide và các nút điều khiển
const slides = document.querySelectorAll('.slideBox');
const nextBtn = document.querySelector('.fa-arrow-right');
const prevBtn = document.querySelector('.fa-arrow-left');

let currentSlide = 0; // Slide hiện tại

// Hàm để hiển thị slide tiếp theo
function nextSlide() {
    // Ẩn slide hiện tại
    slides[currentSlide].classList.remove('active');

    // Tăng chỉ số slide hiện tại
    currentSlide = (currentSlide + 1) % slides.length;

    // Hiển thị slide tiếp theo
    slides[currentSlide].classList.add('active');
}

// Hàm để hiển thị slide trước đó
function prevSlide() {
    // Ẩn slide hiện tại
    slides[currentSlide].classList.remove('active');

    // Giảm chỉ số slide hiện tại
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    // Hiển thị slide trước đó
    slides[currentSlide].classList.add('active');
}

// Hàm tự động chuyển đổi slide sau mỗi 1s
function autoSlide() {
    nextSlide();
}

// Bắt đầu tự động chuyển đổi slide
let slideInterval = setInterval(autoSlide, 2500);

// // Dừng tự động chuyển đổi slide khi rê chuột vào slide
// slides.forEach(slide => {
//     slide.addEventListener('mouseenter', () => {
//         clearInterval(slideInterval);
//     });
// });

// // Tiếp tục tự động chuyển đổi slide khi di chuột ra khỏi slide
// slides.forEach(slide => {
//     slide.addEventListener('mouseleave', () => {
//         slideInterval = setInterval(autoSlide, 1000);
//     });
// });

// Bắt sự kiện khi nhấn nút điều khiển
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
