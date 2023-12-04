const navbar = document.querySelector('.navBar');

// Listen for click events on navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent default link behavior

    const href = link.getAttribute('href'); // Get link href attribute

    // Check if the link is an internal link
    if (href.startsWith('#')) {
      const sectionId = href; // Get section ID from link
      const section = document.querySelector(sectionId); // Get section element

      const navbarHeight = navbar.offsetHeight; // Get navbar height
      const sectionTop = section.offsetTop; // Get section top offset
      const topPosition = sectionTop - navbarHeight; // Calculate top position for navbar

      navbar.classList.add('fixed'); // Add class to fix navbar position
      window.scrollTo({ top: topPosition, behavior: 'smooth' }); // Scroll to section
    } else {
      // The link is an external link, perform default behavior
      window.open(href, '_blank');
    }
  });
});

// Listen for scroll events to unfix navbar position
window.addEventListener('scroll', () => {
  if (window.pageYOffset === 0) {
    navbar.classList.remove('fixed');
  }
});


// Select the "Learn More" button element
const learnMoreButton = document.querySelector('.home button');

// Add click event listener to the "Learn More" button
learnMoreButton.addEventListener('click', e => {
  e.preventDefault(); // Prevent default button behavior

  const aboutSectionId = '#about'; // Set the ID of the about section
  const aboutSection = document.querySelector(aboutSectionId); // Get about section element

  const navbarHeight = navbar.offsetHeight; // Get navbar height
  const sectionTop = aboutSection.offsetTop; // Get section top offset
  const topPosition = sectionTop - navbarHeight; // Calculate top position for navbar

  navbar.classList.add('fixed'); // Add class to fix navbar position
  window.scrollTo({ top: topPosition, behavior: 'smooth' }); // Scroll to about section
});


// Select the "My Work" button element
const myWorkButton = document.querySelector('.aboutButton button');

// Add click event listener to the "My Work" button
myWorkButton.addEventListener('click', e => {
  e.preventDefault(); // Prevent default button behavior

  const portfolioSectionId = '#portfolio'; // Set the ID of the portfolio section
  const portfolioSection = document.querySelector(portfolioSectionId); // Get portfolio section element

  const navbarHeight = navbar.offsetHeight; // Get navbar height
  const sectionTop = portfolioSection.offsetTop; // Get section top offset
  const topPosition = sectionTop - navbarHeight; // Calculate top position for navbar

  navbar.classList.add('fixed'); // Add class to fix navbar position
  window.scrollTo({ top: topPosition, behavior: 'smooth' }); // Scroll to portfolio section
});



 // START -- Night Mode Toggle Feature
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
      
      localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
// END -- Night Mode Toggle Feature 

// Hamburger Menu Start

function NavDisplay() {
  var x = document.getElementById("navBar");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// Hamburger Menu End