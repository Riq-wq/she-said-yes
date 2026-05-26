let selectedDate = '';
let selectedTime = '';
let selectedFood = '';

function goToPage(pageNumber) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show the target page
  document.getElementById('page' + pageNumber).classList.add('active');
}

function moveButton() {
  const noBtn = document.getElementById('noBtn');
  const container = document.querySelector('.card');
  
  // Get random position within the card
  const maxX = container.offsetWidth - noBtn.offsetWidth - 60;
  const maxY = container.offsetHeight - noBtn.offsetHeight - 60;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
}

function saveDateTime() {
  const dateInput = document.getElementById('dateInput').value;
  const timeInput = document.getElementById('timeInput').value;
  
  if (!dateInput || !timeInput) {
    alert('Please pick both a date and time! 📅⏰');
    return;
  }
  
  selectedDate = dateInput;
  selectedTime = timeInput;
  
  goToPage(4);
}

function selectFood(food) {
  selectedFood = food;
  
  // Remove selected class from all items
  document.querySelectorAll('.food-item').forEach(item => {
    item.classList.remove('selected');
  });
  
  // Add selected class to clicked item
  event.target.closest('.food-item').classList.add('selected');
  
  // Enable the button
  document.getElementById('foodBtn').disabled = false;
  document.getElementById('foodBtn').textContent = 'skip omg! →';
}
