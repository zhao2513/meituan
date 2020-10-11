<template>
  <div class="left-header common-one">
    <div class="left-header-container">
      <div class="left-header-wraper" v-for="item in  navList" :key="item.target">
        <div class="label">
          <span class="fenlei">{{item.target}}</span>
          <a href="#"><span class="all"> 全部</span></a>
        </div>
        <div class="tags" :class="{meishi:type==item.target}">
          <div class="tag" v-for="(i,v) in item.content" :key="v">
            <dropDown :dropName="i.title" :dropList="i.children"/>
          </div>
        </div>
      </div>
   
    </div>
  </div>
</template>

<script>
import dropDown from "@/components/dropdown";
export default {
  data() {
    return {
      type:'分类',
      name: "美食",
      navList: [
        {
          target: "分类",
          content: [
            {
              title: "美食",
              children: [
                "全部",
                "日本菜",
                "火锅",
                "自助餐",
                "小吃",
                "快餐",
                "日韩料理",
                "聚餐宴请",
                "烧烤烤肉",
                "川湘菜",
                "香锅烤鱼",
                "粤菜",
                "中式烧烤/烤串",
                "生鲜蔬果",
                "江河湖海鲜",
              ],
            },
            {
              title: "酒店住宿",
              children: [
                "全部",
                "温泉酒店",
                "情侣酒店",
                "高端酒店",
                "高星酒店"
              ],
            },
            {
              title: "周边游",
              children: [
                "全部",
                "景点"
              ],
            },
            {
              title: "休闲娱乐",
              children: [
                "全部",
                "轰趴馆"
              ],
            },
            {
              title: "旅游",
              children: [
                "全部",
                "全国旅游"
              ],
            },
          ],
        },
        {
          target:'区域',
          content:[
            {
              title:'推荐商圈',
              children: [
                "北京路商业区",
                "东圃",
                "花城汇/高德置地",
                "市桥",
                "棠下",
                "大学城",
                "东晓南路沿线",
                "天河城/体育西"
              ]
              
            },
            
            {
              title:'越秀区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'天河区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'番禺区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
              
            },
            {
              title:'海珠区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'白云区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'荔湾区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'黄埔区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'增城市',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'花都区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'从化市',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
            {
              title:'南沙区',
              children:[
                '全部',
                '中山二三路/东山口',
                '五羊新城',
                '海珠广场',
                '北京路商业区',
                '麓湖公园'
              ]
            },
          ]
        }
      ],
    };
  },
  components: {
    dropDown,
  },
};
</script>

<style>
</style>