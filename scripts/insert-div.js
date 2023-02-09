let p = document.createElement('p');
p.className = "viber-p"
p.innerHTML = "Задай своє запитання у Viber";
divViber.prepend(p)

let messageViber = document.querySelector('.viber');
let triangleViber = document.querySelector('#triangle')
messageViber.onmouseover = function(event) {
    event.target = (setTimeout(() => p.remove(), 200))
    event.target = (setTimeout(() => triangleViber.remove(), 200))
};
