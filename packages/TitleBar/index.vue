<template>
    <header id="header">
        <div class="header-wrapper">
            <div class="header-left" @dblclick="dblclick">
                <slot name="extend-left" />
            </div>
            <div class="header-center">
                <slot name="extend-center" />
            </div>

            <div class="header-right">
                <slot name="extend-right" />
                <window-controls :isOntoped="isOntoped" :OnTopWindow="OnTopWindow" :isMaximised="isMaximised"
                    :isMinimised="isMinimised" :WindowMinimise="WindowMinimise" :WindowClose="WindowClose"
                    :WindowMaximise="WindowMaximise" />
                <!-- <old-window-controls /> -->
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import WindowControls from "./includes/WindowControls/index.vue";

defineProps<{
    isOntoped: Boolean,
    OnTopWindow: Function,
    dblclick: (payload: MouseEvent) => void,
    isMaximised: Boolean,
    isMinimised: Boolean,
    WindowMinimise: (payload: MouseEvent) => void,
    WindowClose: (payload: MouseEvent) => void,
    WindowMaximise: (payload: MouseEvent) => void,
}>()

</script>


<style scoped lang="less">
@import url("../__Styles/main.less");

header {
    width: 100vw;
    overflow: hidden;
    height: @header-height;
    //background-color: transparent;
    //background-color: @background-secondary;
    background-color: var(--background-secondary);
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        background-color: var(--border-primary);
    }

    .header-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        .header-left {
            margin-right: auto;
            display: flex;
            align-items: center;
        }

        .header-right {
            margin-left: auto;
            display: flex;
            flex-direction: row;

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
        }
    }
}
</style>