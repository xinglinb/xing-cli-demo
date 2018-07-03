<template>
	<div class="layout">
		<Layout class="layoutContent">
			<Header>
				<div class="layout-logo">
					药品信息管理系统
				</div>
				<Dropdown trigger="click" :style="{float: 'right',marginRight: '-10px'}">
					<Badge dot>
						<Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" :style="{cursor:'pointer'}" />
					</Badge>
					<DropdownMenu slot="list">
						<DropdownItem disabled>
							<Icon type="merge"></Icon>
							消息
							<Badge count="10"></Badge>
						</DropdownItem>
						<DropdownItem @click.native="logout">
							<Icon type="power"></Icon>
							退出登录
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Header>
			<Layout>
				<Sider breakpoint="md" ref="side" hide-trigger :collapsible="false" v-model="isCollapsed" :width="menuWidth" :style="{background: '#fff'}">
					<Menu :active-name="actLink" theme="light" width="auto" :class="menuitemClasses" :open-names="['test']">
						<div v-for="item in links" :key="item.path">
							<router-link :to="item.path" v-if="!item.children" :style="{color:'#495060',height:'50px'}">
								<MenuItem :name="item.path"  :style="{height:'50px'}">
								<Icon :type="item.icon"></Icon>
								<span>{{item.name}}</span>
								</MenuItem>
							</router-link>
							<Submenu :name="item.name" v-if="item.children">
								<template slot="title">
									<Icon :type="item.icon"></Icon>
									<span>{{item.name}}</span>
								</template>
								<router-link v-for="index in item.children" :key="index.path" :to="index.path" :style="{color:'#495060'}">
									<MenuItem :name="index.path">
									<Icon :type="index.icon" v-if="index.icon"></Icon>
									<span>{{index.name}}</span>
									</MenuItem>
								</router-link>
							</Submenu>
						</div>

					</Menu>
				</Sider>
				<Layout :style="{padding: '24px 24px 24px'}">
					<Content :style="{padding: '24px', minHeight: '280px', background: '#fff',overflow:'auto'}">
						<router-view/>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	</div>
</template>
<script>
import cookie from "@/tools/cookie.js";
export default {
  data() {
    return {
      isCollapsed: false,
      links: [
       {
          path: "/",
          name: "主页",
          icon: "ios-rose"
        },
        {
          path: "/test",
          name: "test",
          icon: "fork-repo"
		}
      ]
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    menuWidth() {
      return !this.isCollapsed ? 200 : 78;
    },
    actLink() {
      return this.$route.fullPath;
    }
  },
  methods: {
    logout() {
      cookie.clearCookie();
      this.$router.push("/login");
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layoutContent {
  height: 100%;
}
.layout-logo {
  float: left;
  position: relative;
  color: #fff;
  font-size: 25px;
  left: -18px;
  font-family: "楷体";
  font-weight: 700;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item {
  span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
}
.collapsed-menu {
  span {
    width: 0px;
    transition: width 0.2s ease;
  }
  i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
	font-size: 23px;
	
  }
}
</style>
