<template>
    <Dropdown placement="bottom-start" class="defined-drop">
        <a href="javascript:void(0)">
            {{dropName}}
           <Icon type="md-arrow-dropdown" />
        </a>
        <DropdownMenu slot="list">
            <DropdownItem class="drop-title">{{dropName}}</DropdownItem>
            <DropdownItem v-for="(item,i) in dropList" :key="item+i">{{item}}</DropdownItem>
            
        </DropdownMenu>
    </Dropdown>
    
</template>
<script>
    export default {
        props:{
            dropName:String,
            dropList:Array
            
        }
    }
</script>

<style lang="scss" scoped>
.defined-drop >>>.ivu-select-dropdown{
    width: 510px;
}
.defined-drop  >>> ul{
    width: 100%;
    display: flex;
        padding: 19px 15px;
    padding-bottom: 9px;
        flex-wrap: wrap;

}
.defined-drop  >>> li.drop-title{
        color: #ccc;
    font-size: 16px  !important;
    margin-bottom: 11px;
    cursor: default;
    width: 510px;
    height: 22px;
    line-height: 22px;
}
.defined-drop  >>> li{
    min-width: 120px;
    color: #333;
        cursor: auto;
    user-select: text;
    white-space: normal;
    font-size: 12px !important;
    line-height: 1.5;
    font-weight: 500;
    text-align: left;
}
.defined-drop  >>> a{
    color: #666;
}
</style>
