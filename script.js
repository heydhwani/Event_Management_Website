// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
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
       // Close mobile menu after clicking
       navLinks.classList.remove('active');
   });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
   button.addEventListener('click', () => {
       const filter = button.getAttribute('data-filter');
       
       // Update active button
       filterButtons.forEach(btn => btn.classList.remove('active'));
       button.classList.add('active');
       
       // Filter portfolio items
       portfolioItems.forEach(item => {
           const category = item.getAttribute('data-category');
           if (filter === 'all' || category === filter) {
               item.style.display = 'block';
               item.style.animation = 'fadeInUp 0.5s ease';
           } else {
               item.style.display = 'none';
           }
       });
   });
});

// Form submission
const bookingForm = document.querySelector('.booking-form form');
bookingForm.addEventListener('submit', (e) => {
   e.preventDefault();
   
   // Get form data
   const formData = new FormData(bookingForm);
   const data = Object.fromEntries(formData.entries());
   
   // Simple form validation
   if (!data.name || !data.email || !data['event-type']) {
       alert('Please fill in all required fields.');
       return;
   }
   
   // Simulate form submission
   alert('Thank you for your inquiry! We will contact you within 24 hours to discuss your event details.');
   bookingForm.reset();
});

// Add some interactive animations
const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
       }
   });
}, observerOptions);

// Observe service cards and testimonial cards
document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
   observer.observe(card);
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
   const header = document.querySelector('header');
   if (window.scrollY > 100) {
       header.style.background = 'rgba(44, 62, 80, 0.95)';
       header.style.backdropFilter = 'blur(10px)';
   } else {
       header.style.background = '#2c3e50';
       header.style.backdropFilter = 'none';
   }
});