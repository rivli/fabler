<template>
  <div class="home">
    <h1>Добро пожаловать</h1>
    <HelloWorld msg="s" />

    <h2>Articles</h2>

    <template v-for="(a, i) in articles" :key="i">
      <h3>{{ a.title }}</h3>
      <div v-html="a.text" />
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data: () => ({
    articles: [],
  }),
  async mounted() {
    try {
      const res = await axios.get("http://localhost:8000/articles");
      console.log(res);

      this.articles = res.data;
    } catch (error) {
      console.log(error);
    }
  },
})
export default class Home extends Vue {}
</script>
