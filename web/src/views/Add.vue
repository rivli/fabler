<template>
  <div class="add">
    <input
      class="titleInput"
      type="text"
      v-model="title"
      placeholder="Название"
    />
    <tiptap v-model="textt" />
    <div class="btn btn-outlined border--primary" @click="save()">Save</div>
  </div>
</template>

<script>
import axios from "axios";
import Tiptap from "../components/Tiptap.vue";

export default {
  name: "Add",
  components: {
    Tiptap,
  },
  data: () => ({
    textt: "",
    title: "",
  }),
  methods: {
    async save() {
      try {
        const res = axios.post("http://localhost:8000/articles/create", {
          text: this.textt,
          title: this.title,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.titleInput {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  line-height: 1.1;
}
</style>
