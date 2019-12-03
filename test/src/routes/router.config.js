
import IndexPage from '../views/IndexPage';
import GovList from '@/views/main/gov/index/index';
import NewGov from '@/views/main/gov/new/index';
import Detail from '../views/main/gov/detail/index'
import Edit from '../views/main/gov/edit/index'

export default {
    routes: [{
        path: "/main",
        component: IndexPage,
        children: [{
            path: "/main/govList",
            component: GovList
        }, {
            path: "/main/addGov",
            component: NewGov
        }, {
            path: "/main/editGov/:id",
            component: Edit
        }, {
            path: "/main/detailGov/:id",
            component: Detail
        }, {
            path: '/main/addPro',
            component: () => <p>新建课程</p>,
        }, {
            path: '/main/editPro/:id?',
            component: () => <p>编辑课程</p>,
        }, {
            path: '/main/proError',
            component: () => <p>异常提示</p>,
        },
        // 班级路由
        {
            path: '/main/addClass',
            component: () => <p>新建班级</p>,
        }, {
            path: '/main/editClass/:id?',
            component: () => <p>编辑班级</p>,
        }, {
            path: '/main/detailClass',
            component: () => <p>班级详情</p>,
        }]
    }, {
        path: "/",
        redirect: "/main/govList"
    }],
    pages: [{
        title: "机构管理",
        icon: "",
        children: [{
            title: "机构列表",
            path: "/main/govList",
            show: true
        }, {
            title: "新增机构",
            path: "/main/addGov",
            show: true
        }, {
            title: "编辑机构",
            path: "/main/editGov/:id",
            show: false
        }, {
            title: "详情机构",
            path: "/main/detailGov/:id",
            show: false
        }]
    }, {
        title: "教务管理",
        children: [{
            title: "课程管理",
            children: [{
                title: "新建课程",
                path: "/main/addPro",
                show: true
            }, {
                title: "编辑课程",
                path: "/main/editPro",
                show: false
            }, {
                title: "异常提示",
                path: "/main/proError",
                show: false
            }]
        }, {
            title: "班级管理",
            children: [{
                title: "新建班级",
                path: "/main/addClass",
                show: true
            }, {
                title: "编辑班级",
                path: "/main/editClass/:id",
                show: false
            }, {
                title: "班级详情",
                path: "/main/detailClass",
                show: false
            }]
        }]
    }]
}