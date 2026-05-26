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
