<template>
  <div>
    <section>
      <BaseTitle title="About" class-name="about" />
      <div
        class="grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:gap-8 xl:gap-10"
      >
        <div class="h-[20rem] xl:h-[25rem]">
          <img
            ref="aboutCover"
            src="../assets/images/about-cover.jpg"
            alt="about cover"
            class="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3>Hi👋 我是Yu Ricky~~~~</h3>
          <BaseParagraph
            text-content="2017年畢業於東吳日文系，畢業後便前往日本就職深造，但由於2020年深受疫情影響且日本發佈緊急事態宣言造成無法出外工作只能於自家待機，但危機就是轉機，正因為這一個多月讓我第一次認識到網路開發並且撰寫下人生第一行代碼Hello World!"
          />
          <BaseParagraph
            text-content="於2021年下半正式決定轉職前端工程師這條路後，便透過Udemy、YouTube、BiliBili等影音平台自學網路開發，從前端三劍客HTML、CSS、JavaScript到前端框架Vue，隨著各種知識的累積自己也從只能寫幾行代碼成長到能開發一個Single-page application。"
          />
          <BaseParagraph
            text-content="不過網頁發展如此快速，自己也深知還有很多不足的地方，接下來也會不斷的學習，讓每一天的自己都比昨天的自己更好，站穩這行業的腳步。"
          />
        </div>
      </div>
    </section>

    <section>
      <BaseTitle title="My Skills" class-name="my-skill" />
      <div class="grid-cols-tags grid place-content-center gap-5">
        <BaseTag
          v-for="(icon, skillName) in skills"
          :key="skillName"
          :name="skillName"
        >
          <component :is="icon"></component>
        </BaseTag>
      </div>
      <BaseParagraph
        text-content="目前專精:不管是Vue Option API或是Composition API都有所接觸，個人偏好使用Composition API開發，搭配script setup寫法後讓整個SFC更簡潔並且自由度更高，且對於封裝複用邏輯來說也相較於會造成引入來源不明確的mixins來說更加好處理。專案中也時常使用Vuex或Pinia做全局狀態管理。CSS部分除了喜歡使用預處理器SCSS開發外，對於熱門框架Tailwind也有所研究，非常喜歡Tailwind Utility-First的概念，大幅減少以往規劃CSS與想類名的時間，既可加快開發速度又能不失客製化的自由度。"
      />
      <BaseParagraph
        text-content="未來規劃:除了持續精進現有前端技能外，目前也正在學習Node.js培養後端能力讓自己更加了解整個前後端運作原理，並讓自己能製作的專案廣度能更廣而不受拘限。另外對於能提升SEO優化的Server-side rendering Nuxt.js也抱有強烈的興趣，當Node.js熟悉度更高後會是想著手學習的技術方向。"
      />
    </section>

    <section>
      <div class="mb-4">
        <BaseTitle title="Experience In Japan" class-name="Experience" />
        <p class="mb-10">
          2018-2021期間分別工作於日本熊本、廣島、兵庫、東京各地區
        </p>
      </div>
      <div class="flex flex-col items-center">
        <MyExperience
          v-for="(exp, index) in experience"
          :key="index"
          :experience="exp"
        />
      </div>
    </section>

    <section>
      <BaseTitle title="My Hobby" class-name="hobby" />
      <div
        class="grid grid-cols-1 place-items-center gap-12 md:grid-cols-2 xl:grid-cols-[1fr_40%]"
      >
        <div>
          <BaseParagraph
            text-content="在日期間喜歡到各地旅遊，旅行期間最喜歡做的事就是到每個地區體驗溫泉設施，不同地區特有的水質與風味讓每次泡湯都能有截然不同的享受，相較於台灣獨立室的溫泉屋，覺得大眾湯泡起來更有氣氛😂。"
          />
          <BaseParagraph
            text-content="平常熱愛遊玩家機遊戲，喜歡的遊戲為人中之龍、時空幻境、隻狼、與仁王等等，另外也熱愛觀看NBA，也因為NBA的原因讓自己也養成每周都有與朋友打籃球的習慣。"
          />
        </div>
        <div class="relative h-72 w-full overflow-hidden sm:h-80 md:h-96">
          <img
            ref="img1"
            src="../assets/images/about-1.jpg"
            alt="me"
            class="absolute top-0 left-0 h-full w-full object-cover"
          />
          <img
            ref="img2"
            src="../assets/images/about-2.jpg"
            alt="me"
            class="absolute top-0 left-0 h-full w-full object-cover"
          />
          <img
            ref="img3"
            src="../assets/images/about-3.jpg"
            alt="me"
            class="absolute top-0 left-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseTitle from "@/components/UI/BaseTitle.vue";
import BaseParagraph from "@/components/UI/BaseParagraph.vue";
import BaseTag from "@/components/UI/BaseTag.vue";
import CSS from "@/assets/images/svg/css3.svg";
import HTML from "@/assets/images/svg/html5.svg";
import JavaScript from "@/assets/images/svg/javascript.svg";
import SCSS from "@/assets/images/svg/sass.svg";
import Tailwind from "@/assets/images/svg/tailwind-css.svg";
import Vue from "@/assets/images/svg/vuejs.svg";
import Firebase from "@/assets/images/svg/firebase.svg";
import Git from "@/assets/images/svg/git.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
import MyExperience from "@/components/about/MyExperience.vue";

gsap.registerPlugin(ScrollTrigger);

const skills = {
  CSS,
  HTML,
  JavaScript,
  Vue,
  SCSS,
  Tailwind,
  Firebase,
  Git,
};

const experience = [
  {
    time: "2019/6",
    place: "九州熊本",
    company: "杖立溫泉 肥前屋",
    position: "飯店櫃檯人員",
    jobDescription: [
      "辦理住房與退房的登記",
      "電話接聽與人員接待",
      "彙整飯店最新情況，協助飯店各部門達成工作",
    ],
    achievements: [
      "因優秀的中日雙語能力，多次受上層指派成為台灣雄獅、可樂、五福等60多人大型來日旅遊團的負責人，協助台灣旅客入住、用餐安排、溫泉接駁車預約等各項手續辦理",
      "工作期間與同僚共同達成各大旅遊訂房網站如樂天、じゃらん的網路評價皆提升到4.5顆星以上(滿分5顆星，入職時為4.2顆星左右)",
    ],
  },
  {
    time: "2020/3",
    place: "兵庫縣",
    compony: "城崎溫泉 東山莊",
    position: "日式傳統旅館 接待員(仲居)",
    jobDescription: [
      "顧客接待",
      "早、晚餐的伙食準備、提供",
      "鋪床、房務清掃等",
    ],
    achievements: [
      "為此家旅館第一次聘用的外國籍員工，工作期間幫助了很多因有語言隔閡而無法與日本員工溝通的外國旅客，因此約到期前多次受到店長挽留",
    ],
  },
  {
    time: "2020/12",
    place: "東京原宿",
    compony: "THE NORTH FACE KIDS ",
    position: "門市銷售人員",
    jobDescription: [
      "店內服飾銷售",
      "倉庫庫存管理",
      "彙整飯店最新情況，協助飯店各部門達成工作",
    ],
    achievements: [
      "工作期間於2020年1月、3月、8月此3個月成為店內業績銷售榜第一名",
      "受到COVID-19 的影響實體店面客源大幅減少下，仍然於多個月達成個人業績銷售破百萬日幣，期間也因優異表現多次支援其他店鋪",
    ],
  },
];

const aboutCover = ref(null);
const img1 = ref(null);
const img2 = ref(null);
const img3 = ref(null);

onMounted(() => {
  // cover animation
  gsap.from(aboutCover.value, {
    duration: 0.8,
    autoAlpha: 0,
    transformOrigin: "top",
    scaleY: 0,
    ease: "bounce.out",
  });

  // image slide animation
  const timeline = gsap.timeline({ repeat: -1 });

  timeline
    .to(img1.value, { duration: 2, translateY: "-100%" }, 4)
    .from(img2.value, { duration: 2, translateY: "100%" }, "<")
    .to(img2.value, { duration: 2, translateX: "100%" }, "+=4")
    .from(img3.value, { duration: 2, translateX: "-100%" }, "<")
    .to(img3.value, { duration: 2, translateY: "100%" }, "+=4")
    .to(img1.value, { duration: 2, translateY: "0%" }, "<");
});
</script>
