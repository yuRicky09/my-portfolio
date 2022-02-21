import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import { projects } from "@/data";

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
    beforeEnter: (to) => {
      const projectName = to.params.projectName;
      const isExist = projects.some((project) => project.name === projectName);

      if (!isExist)
        return {
          name: "NotFound",
          params: { pathMatch: to.path.slice(1).split("/") },
        };
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "About | Yu Ricky",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "Not Found 404 | Yu Ricky",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 60,
        behavior: "smooth",
      };
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
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
