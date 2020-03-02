const inpText = document.querySelector('textarea');
const inpBtn = document.querySelector('[type="button"]');
const messageDis = document.createElement('p');
const passed = document.querySelector('.passed');
messageDis.classList.add('generate');

const handleClick = e => {
  messageDis.textContent = inpText.value;
  if (messageDis.textContent === '' || messageDis.textContent === ' ') {
    messageDis.textContent = 'Please Enter some text';
    messageDis.style.backgroundColor = 'red';
  }
  passed.insertAdjacentElement('beforeend', messageDis);
  inpText.value = '';
};

inpBtn.addEventListener('click', handleClick);
