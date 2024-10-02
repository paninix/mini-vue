import { createDep } from "./dep";
import { extend } from "@mini-vue/shared";

let activeEffect = void 0;
let shouldTrack = false;
const targetMap = new WeakMap();

// 用于依赖收集
export class ReactiveEffect {
  constructor() {
    console.log("创建 ReactiveEffect 对象");
  }
  run() {
  }

  stop() {
  }
}

function cleanupEffect(effect) {
}

export function effect(fn, options = {}) {
}

export function stop(runner) {
}

export function track(target, type, key) {
}

export function trackEffects(dep) {
 
}

export function trigger(target, type, key) {
 
}

export function isTracking() {
}

export function triggerEffects(dep) {
}
