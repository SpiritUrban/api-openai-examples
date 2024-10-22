const container = document.querySelector('body');
const chipsContainer = document.querySelector('#top');

const linksArray = [
    {
        title: "Home",
        link: "../../index.html"
      },
    {
      title: "OpenAI Docs",
      link: "https://platform.openai.com/docs/api-reference/introduction"
    },
    {
      title: "NPM Module",
      link: "https://www.npmjs.com/package/openai"
    },
    {
      title: "Страница статуса OpenAI",
      link: "https://status.openai.com/"
    },
    {
      title: "Управления аккаунтом",
      link: "https://platform.openai.com/usage"
    },
    {
      title: "Статус своей подписки",
      link: "https://platform.openai.com/settings/organization/billing/overview"
    },
    {
      title: "API ключ OpenAI",
      link: "https://platform.openai.com/api-keys"
    }
  ];

  linksArray.forEach((item, i) => {
    if (item.links) {
      // Если у элемента есть массив вложенных ссылок
      item.links.forEach((subItem) => {
        chipsContainer.innerHTML += `
          <a class="short" target="_blank" href="${subItem.link}">${subItem.title}</a>
        `;
      });
    } else {
      // Обычные ссылки
      chipsContainer.innerHTML += `
        <a class="short" target="_blank" href="${item.link}">${item.title}</a>
      `;
    }
  });
  



// cyrcle
// imgStyle: 'border: 10px black solid; border-radius: 10rem; filter: invert(100%); height: 10rem; width: 10rem; margin: auto;',

const sources = [
//     {
//     href: '../../doc/pages/lesson-1.html',
//     img: '../../doc/src/img/ForYoutube-1.png',
//     imgStyle: 'border: 1px solid #fff;',
//     text: 'ChatGPT API',
//   },
];

// sources.forEach((item, i) => {
//   container.innerHTML += `
//        <a href="${item.href}" target="_blank">
//         <img src="${item.img}" alt="" style="${item.imgStyle}">  
//         <span>
//             ${item.text}
//         </span>
//       </a>
//   `;
// });