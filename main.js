let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    menu.classList.remove('active');
}
let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// esconder o menu e a caixa de pesquisa quando rolar
window.onscroll = () =>{
    menu.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0)
});
    const menuItems = document.querySelectorAll('.navbar a');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remova a classe "active" de todos os itens de menu
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Adicione a classe "active" apenas ao item clicado
            item.classList.add('active');
        });
    });