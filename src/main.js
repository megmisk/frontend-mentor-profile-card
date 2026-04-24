// Modify to use generic data selectors to include images, text, and links
const cardLinks = document.querySelectorAll('.card__list li');


cardLinks.forEach((item, index) => {
  
  let staggerAmount = 200;
  let animationDelay = index * staggerAmount;
    
  item.style.animationDelay = animationDelay + 'ms';
});


const email = 'megmisk@gmail.com';

const emailButton = document.getElementById('email-button');
const alertSuccess = document.getElementById('alert-success');

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
    // Have UI feedback for success
    alertSuccess.classList.add('active');
    // Remove the active class after 3 seconds
    setTimeout(() => {
      alertSuccess.classList.remove('active');
    }, 5000);
  } catch (err) {
    console.error('Failed to copy: ', err);
    // Have UI feedback for failure
  }
}

emailButton.addEventListener('click', () => copyToClipboard(email));






// gh pr create --web --title "Your PR Title" --body "Your description"