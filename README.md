# sample-vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Vue Js:-

npm init vue@latest (npm i)

npm run dev

npm install vue-router@next --save(manually install router if we do not opt at init)

npm install vuex@next --save

creating component, function call(normal + event handling), passing data from Parent to Child, passing data from Child to Parent, all types of css usage, conditional rendring, loops, watcher, computed property, routing, form in vue, life cycle hooks, two way binding, Class & Html Binding, slots, mixins, redux(any api call & show data on page)

views (all routes/pages files)(same like pages in react)
router(main page file)(same as router's index.js in react)
components(same as components)
App.vue same as App.js in react
main.js same as index.js in react
Life Cycle in Vue is same as Life Cycle in React(Create, Mount, Update, UnMount)

To split Vuex

import newsActions from './actions'
import newsGetter from './getters'
import newsMutations from './mutations'

const news = {
  namespaced: true,
  state() {
    // only way to access state is through getter functions
    return {
      // all state variables with their initial values
      news: []
    }
  },
  getters: {
    // functions to get state data in any files (selectors), key value pairs
    newsGetter
  },
  actions: {
    // actions are similar to mutations, the differences being that is instead of mutating the state, actions commit mutations + actions can contain arbitrary asynchronus operations
    newsActions
  },
  mutations: {
    // the only way to actually change state in a Vuex store is by committing a mutation (reducer)
    newsMutations
  }
}

export default news

