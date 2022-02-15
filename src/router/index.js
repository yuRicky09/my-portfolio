import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Yu Ricky | Portfolio",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
    meta: {
      title: "Contact | Yu Ricky",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
    meta: {
      title: "Projects | Yu Ricky",
    },
  },
  {
    path: "/projects/:projectName",
    name: "ProjectDetail",
    component: () => import("@/views/ProjectDetail.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  if (to.name === "ProjectDetail") {
    const projectName = to.params.projectName;
    document.title = `${projectName} | Yu Ricky`;
  } else {
    document.title = to.meta.title;
  }
});

export default router;
