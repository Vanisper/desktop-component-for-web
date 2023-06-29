<template>
    <!-- 置顶——状态切换 -->
    <span :title="isOntoped ? '取消置顶' : '置顶'" class="sticky iconfont icon-zhiding" @click="onTopWindow"></span>
</template>

<script setup lang="ts" >
import { ref, watch } from 'vue';

const props = defineProps<{
    isOntoped: Boolean,
    OnTopWindow: Function
}>()
const isOntoped = ref(props.isOntoped)
watch(() => props.isOntoped, (value) => isOntoped.value = value)

const style = ref({
    stickyRotate: isOntoped.value ? "-45deg" : "0deg",
    stickyColor: isOntoped.value ? "limegreen" : "var(--text-primary)",
})

async function onTopWindow() {
    // OnTopWindow
    await props.OnTopWindow()
    if (isOntoped.value) {
        style.value.stickyRotate = "-45deg"
        style.value.stickyColor = "limegreen"
    } else {
        style.value.stickyRotate = "0deg"
        style.value.stickyColor = "var(--text-primary)"
    }
}
</script>



<style lang="less" scoped>
span {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    //width: 47px;
    overflow: hidden;
    padding: 2px;
    position: relative;
    transition: background-color 300ms;

    &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.sticky {
    //color: @sticky-color;
    color: v-bind("style.stickyColor");
    width: 43px;
    height: unset;

    &::before {
        transition: transform 300ms;
        transform: translate(-50%, -50%) rotate(v-bind("style.stickyRotate"));
    }

    &:hover {
        background-color: var(--button-hover);
    }
}
</style>