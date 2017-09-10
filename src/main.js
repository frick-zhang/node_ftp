import Vue from "vue"
import Element from "element-ui"
import "element-ui/lib/theme-default/index.css"
import App from "./App.vue"

Vue.use(Element)
// Vue.component(Menu.name, Menu)
// Vue.component(Submenu.name, Submenu)
// Vue.component(MenuItem.name, MenuItem)

new Vue({
    el:'#app',
    render: h=> h(App)
})