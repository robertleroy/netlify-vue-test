## Vue Starter Files

* main.js
* app.vue
* store.js
  * modules
  * local-storage plugin
* router.js

<br>

___

#### main.js
``` js 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./filters/filters"; 
// import SvgIcon from "./components/SvgIcon/SvgIcon";
// Vue.component("SvgIcon", SvgIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

<br>

___

#### app.vue
``` html
<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Vue',
      };
    },
    computed: {},
    methods: {},
    mounted() {},
  };
</script>

<template>
  <section id='app' v-cloak>
    <header>
      <h4>{{title}}</h4>

      <nav>
        <router-link to='/home'>Home</router-link> 
        <span>|</span>
        <router-link to='/about'>About</router-link>
      </nav>
    </header>

    <main>
      <transition name='fade' mode='out-in'>
        <router-view/>
      </transition>
    </main>

  </section>
</template>

<style lang='scss'>
  @import './scss/baseline';
  #app {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }

  header, main {
    padding: 1rem 2rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 1rem;

    span {
      margin: 0 1rem;
    }
  }

  main {
    overflow-y: auto;
  }

</style>
```

<br>

___

#### store.js
``` js
import Vue from 'vue'
import Vuex from 'vuex'
// import module from './module';

Vue.use(Vuex)

export default new Vuex.Store({
  // modules: { module, },

  state: {
    version: "0.0.0",
  },

  getters: {},

  mutations: {},

  actions: {}
});
```

#### module.js 
``` js
const state = {};

const getters = {};

const mutations = {};

const actions = {};

export default {
  state,getters,actions,mutations
}
```

#### local-storage plugin
```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storagePlugin = store => {
  const store_key = "app";
  const Version = "0.1.0";

  store.subscribe((mutation, state) => {
    /* 
    localStorage.setItem 
    ==== obj || state ====
    */
    let obj = {
      version: state.version,
    };
    
    localStorage.setItem(
      store_key, JSON.stringify(obj)
    );

  })

  let storage_obj = JSON.parse( 
    localStorage.getItem(store_key)
  );
  
  if ( storage_obj ) {   
    if ( storage_obj.version === Version ) { 
      Object.assign(store.state, storage_obj);      
      // store.replaceState(storage_obj);
    } else {      
      store.commit("updateVersion", Version);  
    }
  }  
}


export const store = new Vuex.Store({
  // plugins: [storagePlugin],
  state: {
    version: "0.0.0",
  },

  getters: {
      
  },

  mutations: {
      
  },
  
  actions: {
      
  }
});
```

<br>

___

#### router.js
``` js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```