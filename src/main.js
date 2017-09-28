import Vue from "vue"
import VueRouter from "vue-router"
import Element from "element-ui"
import "element-ui/lib/theme-default/index.css"
import App from "./App.vue"
import a from "./a.vue"
import b from "./b.vue"

Vue.use(Element)
Vue.use(VueRouter)
// Vue.component(Menu.name, Menu)
// Vue.component(Submenu.name, Submenu)
// Vue.component(MenuItem.name, MenuItem)

const router = new VueRouter({
    routes: [
        {
            path: '/a',
            component: a
        },{
            path: '/b',
            component: b
        }
    ]
})
new Vue({
    el:'#app',
    router,
    render: h=> h(App)
})