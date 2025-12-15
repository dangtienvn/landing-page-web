// Khởi tạo Lenis
const lenis = new Lenis({
    duration: 1.5,        // tốc độ mượt
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing funtion
    smooth: true,
    smoothTouch: false   // mobile thường không cần smooth
});

// Update animation mỗi frame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
