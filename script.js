// JavaScript
document.querySelector('.toggle-btn').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent the document click event from firing
  const dropdownMenu = document.querySelector('.dropdown_menu');
  dropdownMenu.classList.toggle('show');

  if (dropdownMenu.classList.contains('show')) {
      document.body.style.overflow = 'hidden';
  } else {
      document.body.style.overflow = 'initial';
  }
});

document.addEventListener('click', function(event) {
  const dropdownMenu = document.querySelector('.dropdown_menu');

  if (!dropdownMenu.contains(event.target) && dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
      document.body.style.overflow = 'initial';
  }
});