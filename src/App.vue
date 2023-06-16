<template>
  <windows-title-bar :dblclick="dblclick" :isOntoped="isOntoped" :OnTopWindow="OnTopWindow" :isMaximised="isMaximised"
    :isMinimised="isMinimised" :WindowMaximise="WindowMaximise" :WindowMinimise="WindowMinimise"
    :WindowClose="WindowClose">
    <template #extend-left>
      <!-- 左侧插槽 -->
      <span style="color: red;">{{ msg }}</span>
    </template>
    <template #extend-center>
      <!-- 中间插槽 -->
    </template>
    <template #extend-right>
      <span style="line-height: 32px;">右侧插槽</span>
    </template>
  </windows-title-bar>
  <div class="main" v-contextmenu="menus">
    <h3>可以右击此区域</h3>
    <h4>（移动端长按触发）</h4>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WindowsTitleBar from "../packages/TitleBar/index.vue";
import { IClickMenuItem } from "web-contextmenu/type/ContextMenuType";

const dblclick = () => {
  msg.value = "双击了logo区域"
}

const msg = ref("请点击右侧控制按钮")
const isOntoped = ref(true)
const isMaximised = ref(false)
const isMinimised = ref(false)

const OnTopWindow = () => {
  isOntoped.value = !isOntoped.value
  msg.value = "置顶切换事件Hook" + `(${isOntoped.value})`
}

const WindowMinimise = () => {
  msg.value = "最小化事件Hook" + `(${isMinimised.value})`
  isMinimised.value = !isMinimised.value
}

const WindowMaximise = () => {
  msg.value = "最大化事件Hook" + `(${isMaximised.value})`
  isMaximised.value = !isMaximised.value
}

const WindowClose = () => {
  msg.value = "关闭事件Hook"
}

const menus: IClickMenuItem[] = [
  {
    text: "右击菜单",
    subText: "副标题",
    action: (el, event, axis, menus, item, isDark) => {
      alert("F12 控制台查看点击事件接口可用参数")

      console.log("点击的dom", el);
      console.log("点击的原生事件", event);
      console.log("点击的坐标", axis);
      console.log("右击菜单的完整列表信息", menus);
      console.log("当前右击菜单信息", item);
      console.log("当前右击菜单是否使用夜间模式", isDark);
    }
  }
]

</script>



<style scoped lang="less">
.main {
  height: calc(100% - 32px);
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
