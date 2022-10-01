<template>
    <div class="occupation">
        <div>职业规划与技能学习</div>
        <div>学习旅程</div>
        <DevelopList
            :DevelopListData="qianduanLData"
        />
        <div class="text">这是一些高级职业，前端转职!!!</div>
         <DevelopList
            :DevelopListData="zhishengData"
        />
    </div>
</template>

<script>
import DevelopList from '@/components/DevelopList.vue'
export default {
    name: 'OccupationPage',
    components: {DevelopList},
    data() {
        return {
            qianduanLData: [
                {
                    title: '前端工程师',
                    children: [
                        {
                            value: ['HTML5', 'CSS3', 'JavaScript', '浏览器基础', 'http']
                        },
                        {
                            value: ['vue+cli+ele+sass+ts', 'react+uni+antD+jsx+less', '微信小程序']
                        },
                        {
                            value: ['npm的使用', 'git的使用', 'webpack构建项目基础',  '脚手架基础']
                        },
                    ]
                },
                {
                    title: '进阶',
                    children: [
                        {
                            value: ['计算机组成原理', '计算机网络', '数据结构与算法', '操作系统']
                        },
                    ]
                },
                {
                    title: '高级前端工程师(全栈)',
                    children: [
                        {
                            value: ['深入了解浏览器原理', 'web抓包与http', 'V8引擎原理']
                        },
                        {
                            value: ['node.js', '了解JAVA', '了解C', 'sh']
                        },
                    ]
                },
            ],
            zhishengData: [
                {
                    title: '项目构建流水化专家',
                    children: [
                        
                    ]
                },
                {
                    title: '音频处理专家',
                    children: [
                        
                    ]
                },
                {
                    title: '视屏处理专家',
                    children: [
                        
                    ]
                },
                 {
                    title: 'Unity专家',
                    children: [
                        
                    ]
                },
                {
                    title: 'SEO专家',
                    children: [
                        
                    ]
                },
                {
                    title: '鸿蒙开发',
                    children: [
                        
                    ]
                },
                {
                    title: '架构师',
                    children: [
                        
                    ]
                },
                {
                    title: '网络安全',
                    children: [
                        
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.text{
    margin: 50px 0px;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
}
</style>