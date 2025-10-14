document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle Contact Form Submission (Example - no backend)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // In a real application, you would send this data to a server
            console.log('Form Submitted:', { name, email, subject, message });

            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            
            // Clear the form
            contactForm.reset();
        });
    }

    // Optional: Add a "back to top" button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑ Lên đầu trang';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add styles for back-to-top button dynamically if not in CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .back-to-top {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--secondary-color);
            color: var(--white);
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 1001;
            transition: background-color 0.3s ease;
        }
        .back-to-top:hover {
            background-color: var(--primary-color);
        }
    `;
    document.head.appendChild(style);
});
