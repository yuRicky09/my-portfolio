export const projects = [
  {
    name: "YuStory",
    brief:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quasi itaque voluptatibus! Voluptas, officia. Nisi, architecto itaque. Corporis, fugiat.",
    description:
      "YUSTORY部落格的發想是源自於Traversy Media頻道發佈的「Vue.js & Firebase Project - FireBlogs」此教學影片。由於剛好在學習 Vue.js 與 Firebase，且也想製作一個可分享自己日本生活趣聞的網站，便決定以此影片為基礎，開發出功能更加完善的部落格網站當作自己的 side project。 如有興趣也歡迎到YUSTORY參觀整個網站架構，體驗發文流程。",
    tags: ["Vue", "Sass"],
    cover: "yustory",
    repositoryUrl: "https://github.com/yuRicky09/YuStory",
    siteUrl: "https://yustory-ded59.firebaseapp.com/",
    features: [
      "隨時儲存故事備份",
      "即時預覽故事發佈時排版狀況",
      "可自訂故事封面",
      "依照內容、標籤、作者三大分類查找相關故事",
      "收藏、點讚、留言功能",
      "RWD 響應式設計",
    ],
    skills: [
      "Vue2 Option API",
      "Vuex",
      "Vue-Router",
      "vee-validate",
      "vue2-editor",
      "Firebase",
    ],
    problems: [
      "規劃功能時要想得更加全面，而不是想一步寫一步，這樣寫的組件會常常只能是當下的情況才能使用，而不是一個可複用率高的組件。",
      "變數與 class 命名要更加精準且有結構，發現自己有些變數名命名的太模糊，過一陣子再看也會忘記造成不易維護，class 名命之後想嘗試使用 BEM 命名方式。",
      "想好資料要如何儲存於 db，特別是多對多關係的資料，不然會造成後續 query 查詢不易，如果使用 firebase 的話，可於 doc 下再建一個 collection 並且使用collection groupquery 方法達成跨 collection 查詢。",
    ],
    purpose: [
      "規劃功能時要想得更加全面，而不是想一步寫一步，這樣寫的組件會常常只能是當下的情況才能使用，而不是一個可複用率高的組件。",
      "規劃功能時要想得更加全面，而不是想一步寫一步，這樣寫的組件會常常只能是當下的情況才能使用，而不是一個可複用率高的組件。",
    ],
    learn: [
      "更加熟習如何使用 Vue Option API、Vuex與Vue-Router。",
      "學會如何使用Firebase來幫助完成專案後端部分。",
      "學會如何使用vee-validate等套件更加完善整個網站且加快開發速度，並且不只依賴套件也嘗試自己手刻分頁等常見功能組件。",
    ],
    images: ["yustory", "designo", "234558"],
  },
  {
    name: "Yutify",
    brief:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quasi itaque voluptatibus! Voluptas, officia. Nisi, architecto itaque. Corporis, fugiat.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quasi itaque voluptatibus! Voluptas, officia. Nisi, architecto itaque. Corporis, fugiat.",
    tags: ["Vue", "Sass"],
    cover: "designo",
    repositoryUrl: "https://github.com/yuRicky09/designo-website",
    siteUrl: "https://designo-website-vue.netlify.app/",
  },
];
