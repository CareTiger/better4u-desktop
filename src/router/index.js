import Vue from "vue";
import Router from "vue-router";

import Home from '../components/Home.vue';
import Upload from '../components/Upload.vue';


Vue.use(Router);

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/upload', component: Upload, name: 'upload' },
];

export default routes;

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
