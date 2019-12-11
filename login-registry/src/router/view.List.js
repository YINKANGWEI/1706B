export const viewList = [{
    path:"/index/submit",
    meta:{
        title: "提交成绩",
        isAside: true,
        name: "submit"
    },
    component: () => import('../views/Submit/index.vue')
},{
    path:"/index/show",
    meta:{
        title: "成绩查看",
        isAside: true,
        name: "show"
    },
    component: () => import('../views/Show/index.vue')
}]
