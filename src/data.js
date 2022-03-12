export const projects = [
  {
    name: "YuAnime",
    brief: "一個可依照動畫季度查詢動畫相關最新情報的網站",
    description:
      "YuAnime的啟發是由於在思考如何設計自己專案樣式時，時常會藉由觀看動畫官網的視覺設計來獲得靈感，並且自己也有追動畫的習慣，想說不如就自己建一個動畫資料查詢網站，於是藉由Annict提供的 API，一個彙整動畫官網、Twitter、聲優等相關資料的網站 YuAnime 就此誕生。",
    tags: ["Vue", "Tailwind"],
    repositoryUrl: "https://github.com/yuRicky09/YuAnime",
    siteUrl: "https://yu-anime.vercel.app/",
    features: [
      "可依照動畫季度搜尋動畫",
      "可依照動畫名搜尋動畫",
      "動畫詳情頁彙整了所查詢動畫的官網、Twitter、聲優、工作人員等資訊",
      "RWD 響應式設計",
    ],
    skills: ["Vue3 Compostion API", "Pinia", "Vue-Router", "Tailwind CSS"],
    purpose: [
      "開發出一個有多種便利搜尋方式的動畫資料查找網站，大幅減少平常查找動畫最新資訊的瑣碎時間。",
      "藉由YuAnime此專案練習串接第三方API、Vue3 Composition API、Pinia等技術。",
    ],
    learn: [
      "更加熟習如何使用Vue Composition API、TailwindCSS，特別是Composition API搭配script setup的寫法讓以往Option API寫法的巢狀結構，或Setup配置中繁瑣的return都刪減掉讓整個SFC更加簡潔好提升閱讀性。",
      "使用Vue官方推薦狀態管理套件Pinia，對於一般的小專案來說相較於Vuex我想使用Pinia會方便許多，移除Vuex中稍嫌繁瑣的Mutation改為僅有state、getter、action三階段，且分別對應option API中的data、computed、method三個觀念用起來更直覺，另外也提供了許多直接操作state的API與訂閱store等特性，使用起來確實更輕巧方便。",
      "由於動畫資料不是一次性全部fetch下來存於全局狀態管理中，而是透過query來指定要的資料，為了讓每次fetch資料時能有更好的畫面呈現與使用者體驗，製作了組件的Skeleton讓資料尚未載入完畢時也能有骨架支撐版面，減少畫面大幅變動",
    ],
    problems: [
      "雖然此次使用了Pinia來管理狀態，但此次的專案規模不大，大多數的資料也都不會有過於複雜的組件間流動甚至只需自己使用，一些局部資料存於Pinia感覺稍嫌不適當。接下來的專案也將打算繼續使用Pinia來理解它真正強大的地方，並且相信隨著經驗的累積自己能更加活用好Pinia規劃好局部與全局的狀態劃分。",
      "有別於另一個專案YUSTORY是初次就載入所有資料，這次YuAnime的資料是按需載入，對於資料的處理邏輯與分頁功能是此次花費最多的部分，最終使用onBeforeRouteUpdate來達成每次query變更時再次fetch新的資料，並且透過Skeleton防止等待資料時畫面布局空洞的問題。",
    ],
    cover: "yuanime-cover",
    fullpage: "yuanime-fullpage",
    images: ["yuanime-sample1", "yuanime-sample3", "yuanime-sample2"],
  },
  {
    name: "YuStory",
    brief: "藉由Vue2與Firebase開發出的部落格網站",
    description:
      "YUSTORY部落格的發想是源自於Traversy Media頻道發佈的「Vue.js & Firebase Project - FireBlogs」此教學影片。由於剛好在學習 Vue.js 與 Firebase，且也想製作一個可分享自己日本生活趣聞的網站，便決定以此影片為基礎，開發出功能更加完善的部落格網站當作自己的 side project。 如有興趣也歡迎到YUSTORY參觀整個網站架構，體驗發文流程。",
    tags: ["Vue", "Scss"],
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
    purpose: [
      "一個功能完整的部落格網站對資料的增、刪、改、查功能必不會少，想藉由YUSTORY專案提升自己CRUD的操作觀念。",
      "首次利用前端框架Vue來開發專案，希望藉此專案提升自己對Vue、Vuex、vue-router整個生態圈的技術熟練度。",
      "原先啟發影片為只有基本CRUD的部落格網站，藉由自行添加如備份、點讚、收藏等各式功能，讓自己不再只是透過影片被動接收知識而是實際弄髒自己的手，當添加功能遇到問題時再自行尋找答案與解決方法，提升工程師最需要的解決問題能力。",
    ],
    problems: [
      "由於是首次使用Vue，對於slot等很多觀念都還不是很熟悉，造成有些組件都寫得太hard code複用率不高只適合當下狀況。之後規劃功能時要想得更加全面，而不是想一步寫一步，多利用slot、prop、自定義事件等方式讓組件需要的資料可動態接收而不是寫死。",
      "專案途中遇到如留言、收藏、點讚等不是單純的一對一，而是一對多或多對多的資料關聯，這部分的資料存取讓我遇到很多困難，如用戶更改頭像時不僅自己的所有文章的頭像要改，於他人文章下的所有留言的頭像也要同步更改，又或是資料該以Object還是Array來存取才好等問題都讓我認知到了資料庫的設計真的很不簡單。最終發現使用firebase的話，可於doc下再建一個collection並且使用collection groupquery 方法達成跨collection查詢，藉由在每個文章(doc)下再建立留言集合(collection)後，當用戶於某個文章留言時用戶的資料便會存與此文章的留言集合下，當用戶更新資料時再一次查找所有有存放用戶資料的集合同步更新",
      "變數與class命名要更加精準且有結構，發現自己有些變數名命名的太模糊，過一陣子再看也會忘記造成不易維護，class名命之後想嘗試使用BEM命名方式。",
    ],
    learn: [
      "更加熟習如何使用Vue Option API、Vuex與Vue-Router。藉由此專案的開發對於響應式的概念、組件每個生命週期各代表的意義與該處理的事、Vuex中state、getter、action、mutation的操作流程、又或是router的push、replace的差異等等的觀念都有很大的提升。",
      "學會如何使用Firebase來幫助完成專案後端部分，如圖片上傳、CRUD、第三方登入、權限認證等。",
      "學會如何使用vee-validate等套件更加完善整個網站且加快開發速度，並且不只依賴套件也嘗試自己手刻分頁等常見功能組件。",
      "從網站外觀該如何設計、資料庫的存取方式、網站的流程操作、到網站的部屬各方面雖然都遇到許多困難，但藉由不斷的思考與不斷的透過各種資源尋找解法，最終還是順利的完成了此次作品，儘管仍然有許多可以再改善的地方，但透過此專案讓我獲得很大的成就感，深刻感受到網頁開發的樂趣",
    ],
    cover: "yustory-cover",
    fullpage: "yustory-fullpage",
    images: [
      "yustory-sample1",
      "yustory-sample2",
      "yustory-sample3",
      "yustory-sample4",
      "yustory-sample5",
      "yustory-sample6",
    ],
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
