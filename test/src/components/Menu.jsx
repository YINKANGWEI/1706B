import React, { Component } from "react"
import { Menu, Icon } from 'antd';

import { NavLink, withRouter } from 'dva/router';

// 引入路由配置表
import routes from '../routes/router.config';

const { SubMenu } = Menu;

function createMenu(ary) {
    return ary.map((item, index) => {
        if (item.path) {
            return item.show && <Menu.Item key={item.path}>
                <NavLink to={item.path}>{item.title}</NavLink>
            </Menu.Item>
        } else {
            return <SubMenu key={item.title} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
                {createMenu(item.children)}
            </SubMenu>
        }
    })
}

class MenuBar extends Component {
    render() {
        const { pathname } = this.props.location
        return <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={[pathname]}
            defaultOpenKeys={[routes.pages[0].title]}
            mode="inline">
            {createMenu(routes.pages)}
        </Menu>
    }
}

export default withRouter(MenuBar)