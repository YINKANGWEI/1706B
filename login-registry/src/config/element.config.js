//配置element-ui的配置模块

import Vue from "vue"
import 'element-ui/lib/theme-chalk/index.css';
import { Form, FormItem, Button, Input, Container, Select, Option, Aside, Header, Main } from "element-ui"

Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)

Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
