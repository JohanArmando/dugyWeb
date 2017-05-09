export function requireAuth (to, from, next) {
  if (!localStorage.token) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export function isLogin (to, from, next) {
  if (localStorage.token) {
    next('/admin/dashboard')
  } else {
    next()
  }
}

export function isAdmin (to, from, next) {
  next('/admin/dashboard')
}
