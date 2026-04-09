const cardLinks = document.querySelectorAll('.card__list li');
// console.log(cardLinks);

cardLinks.forEach((item, index) => {
  // console.log(index, item);
  
  let staggerAmount = 200;
  let animationDelay = index * staggerAmount;
  
  // console.log(animationDelay);
  
  item.style.animationDelay = animationDelay + 'ms';
});

