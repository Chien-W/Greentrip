<template>
  <div class="list">
    <div class="list-item" v-for="(v, i) in 10" :key="i">
      <div class="item-left">
        <h3 class="title">【疫情日报】柳叶刀发布陈薇团队疫苗试验结果：志愿者全产生免疫应答</h3>
        <div class="detail">
          <span class="pubtime">2020-02-02</span>
        </div>
      </div>
      <div class="item-right">
        <img
          src="//cms-bucket.ws.126.net/2020/0523/afbc4bebp00qas1ts0022c0009c005uc.png?imageView&thumbnail=234y146&quality=45&interlace=1&enlarge=1&type=webp"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foundList",
  data() {}
};
</script>

<style scoped>
.list {
}

.list-item {
  display: flex;
  padding: 0.24rem 0.22rem;
  border-bottom: 2px solid #f5f7f9;
}

.list-item > .item-right {
  width: 6rem;
}

.list-item > .item-left > .title {
  font-weight: normal;
  max-height: 2.4rem;
  overflow: hidden;
  line-height: 1.2rem;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-break: break-word;
}

.list-item > .item-left > .detail > .pubtime {
  font-size: 0.99rem;
  color: #b4b4b4;
  margin-right: 1.12rem;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 1rem;
}

.list-item > .item-right > img {
  height: 3.74rem;
}
</style>