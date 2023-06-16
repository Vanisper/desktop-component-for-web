<template>
    <on-top :OnTopWindow="OnTopWindow" :isOntoped="isOntoped" />
    <div title="最小化" class="frameless-titlebar-button frameless-titlebar-minimize" @click="WindowMinimise">
        <svg width="10" height="10">
            <path :d="minimizePath" />
        </svg>
    </div>
    <div title="最大化" class="frameless-titlebar-button frameless-titlebar-toggle" @click="WindowMaximise">
        <svg width="10" height="10">
            <path :d="isMaximised ? restorePath : maximizePath" />
        </svg>
    </div>
    <div title="关闭" class="frameless-titlebar-button frameless-titlebar-close" @click="WindowClose">
        <svg width="10" height="10">
            <path :d="closePath" />
        </svg>
    </div>
</template>
  
<script setup lang="ts">
import { minimizePath, maximizePath, closePath, restorePath } from "../../assets/window-controls";
import onTop from "./components/onTop.vue";


defineProps<{
    isOntoped: Boolean,
    OnTopWindow: Function,
    isMaximised: Boolean,
    isMinimised: Boolean,
    WindowMinimise: (payload: MouseEvent) => void,
    WindowClose: (payload: MouseEvent) => void,
    WindowMaximise: (payload: MouseEvent) => void,
}>()
</script>
  
<style scoped lang="less">
@import url("../../../__Styles/main.less");

.frameless-titlebar-button {
    position: relative;
    display: block;
    width: 46px;
    height: @header-height;
    fill: var(--text-primary);
    cursor: pointer;

    svg {
        position: absolute;
        display: inline-flex;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    &.frameless-titlebar-close:hover {
        background-color: rgb(228, 79, 79);

        svg {
            fill: #fff;
        }
    }

    &.frameless-titlebar-minimize:hover,
    &.frameless-titlebar-toggle:hover {
        background-color: var(--button-hover);
    }
}
</style>