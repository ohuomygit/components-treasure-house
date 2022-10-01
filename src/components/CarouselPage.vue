<template>
    <div class="carouselPage">
        <div class="but">
          <el-button icon="el-icon-arrow-left" circle @click="() => {currentIndex = moveItem('window-wrap' , -1, this.currentIndex)}"></el-button>
        </div>
        <div class="window">
            <div id="window-wrap">
                <slot></slot>
            </div>
        </div>
        <div class="but" @click="() => {currentIndex = moveItem('window-wrap' , 1, this.currentIndex)}">
          <el-button icon="el-icon-arrow-right" circle></el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselPage',
    props: {

    },
    data() {
        return {
            currentIndex: 1
        }
    },
    methods: {
        moveItem(moveEleID, moveN, currentN){
            //transform: "translateX(100px)"
            const parentsEle = document.getElementById(moveEleID)
            const childEle = parentsEle.children[0]
            const childTotal = parentsEle.children.length
            const parentsValue = parentsEle.style.transform ? parentsEle.style.transform.split('translateX(')[1].split('px)')[0] * 1 : 0
            let finnalMoveN = 0 //最终要移动的数
            // console.log(moveN ,parentsValue, childEle.offsetWidth)
            const nextFn = () => {
                if(moveN > 0){//向后移动， 减法。
                    finnalMoveN =  Math.abs(moveN) < (childTotal - currentN) ? moveN : (childTotal - currentN)
                    return
                }
                if(moveN < 0){//向后移动， 减法。
                    finnalMoveN =  Math.abs(moveN) < (currentN - 1) ? moveN : -(currentN - 1)
                    // console.log(moveN, finnalMoveN)
                    return
                }
            }
            nextFn()
            parentsEle.style.transform = `translateX(${parentsValue - finnalMoveN * childEle.offsetWidth}px)`
            return currentN + finnalMoveN
        }
    }
}
</script>

<style lang="scss" scoped>
.carouselPage{
    box-sizing: border-box;
    width: 100%;
    display: flex;
    background: linear-gradient(to right, #7a7374, #73575c);
    border-radius: 20px;
    padding: 0px 10px;
    .window{
        flex-grow: 1;
        overflow: hidden;
        margin: 10px;
        #window-wrap{
            display: flex;
            width: fit-content;
            transition: transform 1s ease-in-out;
        }
    }
    .but{
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
}
</style>