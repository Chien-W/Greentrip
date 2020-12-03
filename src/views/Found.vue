<template>
  <div class="found">
    <div class="title">
      <p>发现</p>
    </div>
    <banner></banner>

    <found-list></found-list>
  </div>
</template>

<script>
import banner from "../components/found/banner";
import foundList from "../components/found/found_list";

export default {
  name: "found",
  components: {
    banner,
    foundList
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.title {
  height: 2rem;
  width: 100%;
  text-align: center;
}

.title p {
  line-height: 2rem;
  font-size: 1rem;
}
</style>