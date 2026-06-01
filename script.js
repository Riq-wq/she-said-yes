let userName = '';
let userContact = '';
let selectedDate = '';
let selectedTime = '';
let selectedFood = '';

emailjs.init('-kKYV0aFaLIjimXr0'); // Replace with your EmailJS public key

function goToPage(pageNumber) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show the target page
  document.getElementById('page' + pageNumber).classList.add('active');
}

function submitStart() {
  const name = document.getElementById('nameInput').value.trim();
  const contact = document.getElementById('contactInput').value.trim();

  if (!name || !contact) {
    alert('Please enter your name and contact number! 💕');
    return;
  }

  userName = name;
  userContact = contact;

  goToPage(2);
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
  document.getElementById('foodBtn').textContent = 'Next →';
}

function finishFlow() {
  goToPage(5);
  sendEmail();
}

function sendEmail() {
  const templateParams = {
    name: userName,
    contact: userContact,
    date: selectedDate,
    time: selectedTime,
    food: selectedFood || 'Not selected',
  };

  emailjs
    .send('service_0e7lich', 'template_99tnjst', templateParams)
    .then(
      () => console.log('Email sent successfully!'),
      (err) => console.error('Email failed:', err)
    );
}
