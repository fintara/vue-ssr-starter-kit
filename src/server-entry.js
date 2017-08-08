import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    const { url } = context
    const fullPath = router.resolve(url).route.fullPath

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }

    // set router's location
    router.push(url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute,
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
