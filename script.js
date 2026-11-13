document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.getElementById('searchInput');
  const searchBtn   = document.getElementById('searchBtn');
  const bookCards   = document.querySelectorAll('.book-card');
  const noResults   = document.getElementById('noResults');

  function filterBooks() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    bookCards.forEach(card => {
      const title    = card.querySelector('h3').textContent.toLowerCase();
      const category = card.querySelector('.category').textContent.toLowerCase();
      const matches  = title.includes(query) || category.includes(query);

      card.style.display = matches ? 'flex' : 'none';
      if (matches) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  searchInput.addEventListener('input', filterBooks);
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    filterBooks();
  });

  
  const form        = document.getElementById('newsletterForm');
  const emailInput  = document.getElementById('emailInput');
  const formMessage = document.getElementById('formMessage');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email === '') {
      formMessage.textContent = '⚠ Please enter your email address.';
      formMessage.style.color = '#fca5a5';
      return;
    }

    if (!emailPattern.test(email)) {
      formMessage.textContent = '⚠ Please enter a valid email address.';
      formMessage.style.color = '#fca5a5';
      return;
    }

    formMessage.textContent = '✓ Thank you for subscribing!';
    formMessage.style.color = '#4ade80';
    emailInput.value = '';
  });



  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  
  document.getElementById('exploreBtn').addEventListener('click', () => {
    document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
  });

  
  document.getElementById('viewAllLink').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Showing all available books. More titles coming soon!');
  });

  
  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      alert(`Book details:\n\n"${title}"\n\nThis resource is available in the EduBooks library.`);
    });
  });

});