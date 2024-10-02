import { initProps } from "./componentProps";
import { initSlots } from "./componentSlots";
import { emit } from "./componentEmits";
import { PublicInstanceProxyHandlers } from "./componentPublicInstance";
import { proxyRefs, shallowReadonly } from "@mini-vue/reactivity";
export function createComponentInstance(vnode, parent) {
 
}

export function setupComponent(instance) {
}

function setupStatefulComponent(instance) {
}

function createSetupContext(instance) {
}

function handleSetupResult(instance, setupResult) {
}

function finishComponentSetup(instance) {
}

function applyOptions() {
  // 兼容 vue2.x
  // todo
  // options api
}

let currentInstance = {};
// 这个接口暴露给用户，用户可以在 setup 中获取组件实例 instance
export function getCurrentInstance(): any {
}

export function setCurrentInstance(instance) {
}

let compile;
export function registerRuntimeCompiler(_compile) {
}
