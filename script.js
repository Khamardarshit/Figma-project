
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });
});

const hiddenElements = document.querySelectorAll(
  '.fade-up, .fade-left, .fade-right'
);

// hiddenElements.forEach((el)=> observer.observe(el));