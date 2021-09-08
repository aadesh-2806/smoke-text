const text = document.querySelector('.text');
const h3 = document.querySelector('h3');
text.innerHTML = text.textContent.replace(/\S/g , '<span>$&</span>');
h3.innerHTML = h3.textContent.replace(/\S/g , '<span>$&</span>');

const letter = document.querySelectorAll('span');
for(let i=0; i<letter.length;i++){
    letter[i].addEventListener('mouseenter' , ()=>{
        letter[i].classList.add('active');
    })
}
