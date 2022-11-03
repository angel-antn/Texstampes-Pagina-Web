const colocar = (entradas, observador)=> {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting){
            entrada.target.classList.add('visible');
            entrada.target.classList.add('acomodarX');
        }
    });
}

const hero_img = document.querySelector('.hero__img');
const hero_text = document.querySelector('.hero__text');
const servicios_h3 = document.querySelector('.main__section--servicios__h3');

const observador = new IntersectionObserver(colocar, {
    root: null,
    rootMargin: '0px 500px -100px',
    threshold: 0.5
});

const grid_elements = document.querySelectorAll('.main__section--servicios__grilla__elemento');
const nosotros_h3 = document.querySelector('.main__section--nosotros__h3');
const nosotros_text = document.querySelectorAll('.main__section--nosotros__text');
const contacto_h3 = document.querySelector('.main__section--contacto__h3');
const contacto_text = document.querySelector('.main__section--contacto__text');
const flex_elements = document.querySelectorAll('.main__section--contacto__element');

hero_img.classList.add('visible');
hero_img.classList.add('acomodarX')
hero_text.classList.add('visible');
hero_text.classList.add('acomodarY');

observador.observe(servicios_h3);
grid_elements.forEach(grid_element => observador.observe(grid_element));
observador.observe(nosotros_h3);
nosotros_text.forEach(p => observador.observe(p));
observador.observe(contacto_h3);
observador.observe(contacto_text);
flex_elements.forEach(flex_element => observador.observe(flex_element));

const links = document.querySelectorAll('.link');
links.forEach(link =>{
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
});