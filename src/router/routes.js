const routes = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import( /* webpackChunkName: "login" */ '../layout/login'),
  },
  {
    path: '/',
    name: 'baseLayout',
    component: () =>
      import( /* webpackChunkName: "baseLayout" */ '../layout/baseLayout'),
    children: [
      {
        path: '/',
        component: () =>
          import( /* webpackChunkName: "helloWorld" */ '../view/HelloWorld.vue'),
      },
      {
        path: '/test',
        component: () =>
          import( /* webpackChunkName: "test" */ '../view/test.vue'),
      }
    ]
  }
]

export default routes
