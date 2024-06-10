import { createMemoryHistory, createRouter } from "vue-router";

import MyTasksRouter from "../components/Modules/Tasks/router";
import MyRegRouter from "../components/Modules/Regist/router";
import MyAuthRouter from "../components/Modules/about/router";
import MyProfileRouter from "../components/Modules/Profile/router";
import MyTopRouter from "../components/Modules/top/router";

const routes = [
  ...MyRegRouter,
  ...MyTasksRouter,
  ...MyAuthRouter,
  ...MyProfileRouter,
  ...MyTopRouter,
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
