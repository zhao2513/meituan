<template>
  <Page :total="num" class-name="changeList" />
</template>
<script>
export default {
  props: {
    num: Number,
  },
};
</script>
<style lang="scss" scoped>

.changeList {
  display: inline-block;
  
}
.changeList >>> li {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    float: left;
    margin: 0 10px;
    text-align: center;
    font-size: 16px;
    color: #999;
    cursor: pointer;
    user-select: none;
    -webkit-transition: background-color 500ms;
    -ms-transition: background-color 500ms;
    transition: background-color 500ms;
    box-sizing: content-box;
  }
.changeList >>> .ivu-page-item-active {
  background: linear-gradient(to bottom right, #ffd000, #ffbd00);
  border: 1px solid #ffd000;
  cursor: default;
  a {
    color: #222222;
  }
}
.changeList >>> a {
  color: #999;
}
</style>
