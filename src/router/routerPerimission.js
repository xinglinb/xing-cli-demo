import cookie from './../tools/cookie'
export default function routerPermission(router) {
  router.beforeEach((to, form, next) => {
    let hasLogin=cookie.getCookie('hasLogin')
    if (!hasLogin) {
      setTimeout(() => {
        router.replace({
          path: '/login'
        }, 0)
      })
      return next()
    }
    return next()
  })

}
