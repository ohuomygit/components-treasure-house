<template>
    <div class="partCard">
        <div class="title"><span></span><span>{{title}}</span></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'PartCard',
    props: {
        title: String
    }
}
</script>

<style scoped lang="scss">
.partCard{
    margin-bottom: 24px;
    .title{
        display: flex;
        align-items: center;
        font-size: 24px;
        line-height: 24px;
        margin-bottom:16px;
        & :first-child{
            display: inline-block;
            width: 10px;
            height: 24px;
            margin-right: 20px;
            background: green;
        }
    }
}
</style>