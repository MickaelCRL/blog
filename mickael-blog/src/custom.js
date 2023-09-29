const header = document.getElementById('header');

// Function to handle the scroll event
function handleScroll() {
  if (window.scrollY > 0) {
    // When scrolling down, set the background color to white
    header.style.backgroundColor = 'white';
  } else {
    // When at the top, set the background color to transparent
    header.style.backgroundColor = 'transparent';
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);