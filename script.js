document.addEventListener('DOMContentLoaded', () => {
    // 1. Cuộn mượt khi click vào menu
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Xử lý Form Liên Hệ cơ bản (chỉ in ra console)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Lấy dữ liệu form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('--- Dữ liệu Form Liên Hệ ---');
            console.log('Họ và Tên:', name);
            console.log('Email:', email);
            console.log('Nội dung:', message);

            // Thông báo thành công cơ bản (thực tế cần AJAX để gửi dữ liệu)
            alert('Yêu cầu tư vấn của bạn đã được gửi đi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // 3. Tùy chọn: Thêm class "scrolled" cho navbar khi cuộn (cho hiệu ứng)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // Thêm CSS cho hiệu ứng này vào style.css nếu cần:
    /*
    .scrolled {
        padding: 5px 0;
    }
    */
});
