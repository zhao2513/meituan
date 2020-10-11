<template>
  <Row class="changeRate">
    <Col span="24">
      <Rate disabled icon allow-half v-model="value"> </Rate>
    </Col>
  </Row>
</template>
<script>
export default {
  props: {
    valueCustomText: {
      default: '5',
      type: String|Number,
    },
  },
  computed:{
    //对父组件传回的数据进行转换
    value(){
      console.log(typeof this.valueCustomText);
      return parseFloat(this.valueCustomText);
    }
  }
};
</script>

<style lang="scss" scoped>
.changeRate >>> .ivu-rate {
  font-size: 16px;
}

.changeRate >>> .ivu-rate-star {
  margin-right: 0px;
}
</style>
