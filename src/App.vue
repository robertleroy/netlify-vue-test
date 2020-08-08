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
      <div class="wrapper">
        <h4>{{title}}</h4>

        <nav>
          <router-link to='/home'>Home</router-link> 
          <span>|</span>
          <router-link to='/about'>About</router-link>
        </nav>
      </div>
    </header>

    <main>
      <div class="wrapper">        
        <transition name='fade' mode='out-in'>
          <router-view/>
        </transition>
      </div>
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

    .wrapper {      
      width: 100%;
      max-width: 50em;
      margin: 0 auto;
    }
  }

  header .wrapper {
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
