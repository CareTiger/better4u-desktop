import Vue from "vue";
import Router from "vue-router";

import Home from '../components/Home.vue';
// Account Components
import Register from '../components/account/Register.vue';
import Login from '../components/account/Login.vue';
// Activities components
import Upload from '../components/activities/Upload.vue';
import Canvas from '../components/activities/Canvas.vue';
import Calendar from '../components/activities/Calendar.vue';
import Tasks from '../components/activities/Tasks.vue';


Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/account/register", name: "Register", component: Register },
    { path: "/account/login", name: "Login", component: Login },
    { path: "/activities/upload", name: "Upload", component: Upload },
    { path: "/activities/canvas", name: "Canvas", component: Canvas },
    { path: "/activities/tasks", name: "Calendar", component: Calendar },
    { path: "/activities/calendar", name: "Tasks", component: Tasks },
  ]
});

/*
import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home.vue";
import Settings from "../components/account/Settings.vue";
import Register from "../components/account/Register.vue";
import Login from "../components/account/Login.vue";
import ResetPassword from "../components/account/ResetPassword.vue";
import Firebase from "../components/tests/Firebase.vue";
import Calendar from "../components/activities/Calendar.vue";
import Storage from "../components/activities/Storage.vue";
import Tasks from "../components/activities/Tasks.vue";
import TasksNew from "../components/activities/TasksNew.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/account/settings", name: "Settings", component: Settings },
    { path: "/account/register", component: Register, name: "register" },
    { path: "/account/login", component: Login, name: "login" },
    { path: "/account/reset", component: ResetPassword, name: "reset" },
    { path: "/tests/firebase", component: Firebase, name: "firebase" },
    { path: "/tasks", component: Tasks, name: "Tasks" },
    { path: "/tasksnew", component: TasksNew, name: "TasksNew" },
    { path: "/calendar", component: Calendar, name: "Calendar" },
    { path: "/storage", component: Storage, name: "Storage" }
  ]
});
*/

