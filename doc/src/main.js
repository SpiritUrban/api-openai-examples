const container = document.querySelector('body');


// cyrcle
// imgStyle: 'border: 10px black solid; border-radius: 10rem; filter: invert(100%); height: 10rem; width: 10rem; margin: auto;',

const sources = [{
    href: 'https://codepen.io/Spirit_Urban/pen/PorqVOo?editors=0010',
    img: './doc/src/img/ForYoutube-1.png',
    imgStyle: 'border: 1px solid #fff;',
    text: 'ChatGPT API',
  },{
    href: 'https://codepen.io/Spirit_Urban/pen/PorqVOo?editors=0010',
    img: './doc/src/img/ForYoutube-2.png',
    imgStyle: 'border: 1px solid #fff;',
    text: 'Первичные настройки, роли в сообщенях API Chat GPT',
  }];

sources.forEach((item, i) => {
  container.innerHTML += `
       <a href="${item.href}" target="_blank">
        <img src="${item.img}" alt="" style="${item.imgStyle}">  
        <span>
            ${item.text}
        </span>
      </a>
  `;
});