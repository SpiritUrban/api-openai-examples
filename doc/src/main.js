const container = document.querySelector('body');
const chipsContainer = document.querySelector('#top');


const linksArray = [
  {
    title: "Clipboard",
    link: "https://codepen.io/Spirit_Urban/pen/XWvrmdZ"
  },
  {
    title: "AI",
    links: [
      { title: "GPT", link: "https://chatgpt.com/" },
      { title: "Gemini", link: "https://gemini.google.com/app/0326a07bf06c176c?sjid=5640220372156092064-EU" }
    ]
  },
  {
    title: "Calendar",
    link: "https://calendar.google.com/calendar"
  },
  {
    title: "Keep",
    link: "https://keep.google.com/u/0/#home"
  },
  {
    title: "Translator",
    links: [
      { title: "Google", link: "https://translate.google.com/?sl=ru&tl=en&op=translate" },
      { title: "Reverso", link: "https://context.reverso.net/" }
    ]
  }
];

linksArray.forEach((item, i) => {
  if (item.links) {
    // Если у элемента есть массив вложенных ссылок (двойной элемент)
    chipsContainer.innerHTML += `
      <span class="short split">
        ${item.title}
        ${item.links.map(subItem => `
          <a class="short" target="_blank" href="${subItem.link}">${subItem.title}</a>
        `).join('')}
      </span>
    `;
  } else {
    // Обычные ссылки
    chipsContainer.innerHTML += `
      <a class="short" target="_blank" href="${item.link}">${item.title}</a>
    `;
  }
});




// cyrcle
// imgStyle: 'border: 10px black solid; border-radius: 10rem; filter: invert(100%); height: 10rem; width: 10rem; margin: auto;',

const sources = [{
    href: './doc/pages/lesson-1.html',
    img: './doc/src/img/ForYoutube-1.png',
    imgStyle: 'border: 1px solid #fff;',
    text: 'ChatGPT API',
  },{
    href: './doc/pages/lesson-2.html',
    img: './doc/src/img/ForYoutube-2.png',
    imgStyle: 'border: 1px solid #fff;',
    text: 'Первичные настройки, роли в сообщенях API Chat GPT',
  },
];

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