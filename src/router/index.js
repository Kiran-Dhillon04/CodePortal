import Home from "../components/home.vue";
import { createRouter, createWebHistory } from "vue-router";
import Settings from "../components/settings.vue";
import Notifications from "../components/notifications.vue";
import Dashboard from "../components/Dashboard.vue";
import Profile from "../components/profile.vue";
import RegisteredUser from "../components/registeredUser.vue";
import Form from "../components/form.vue";
import Users from "../components/users.vue";

const auth = {
  isLoggedIn: true,
};

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    children: [
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
    ],
  },

  { path: "/profile/:id", name: "Profile", component: Profile },
  {
    path: "/registeredUser", name: "RegisteredUser", component: RegisteredUser, children: [
      { path: 'form', name: 'Form', component:Form}
    ]
  },
    { path: "/users", name: "Users", component: Users },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/pageNotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    alert("You must login first!");
    return next({ name: "Home" });
  }
  next();
});
