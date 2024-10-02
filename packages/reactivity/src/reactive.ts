import {
  mutableHandlers,
  readonlyHandlers,
  shallowReadonlyHandlers,
} from "./baseHandlers";

export const reactiveMap = new WeakMap();
export const readonlyMap = new WeakMap();
export const shallowReadonlyMap = new WeakMap();

export const enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
  IS_READONLY = "__v_isReadonly",
  RAW = "__v_raw",
}

export function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandlers);
}

export function readonly(target) {
  return createReactiveObject(target, readonlyMap, readonlyHandlers);
}

export function shallowReadonly(target) {
  return createReactiveObject(target, shallowReadonlyMap, shallowReadonlyHandlers);
}

export function isProxy(value) {
  // TODO: 这里和源码不一样
  return isReactive(value) || isReadonly(value)
}

export function isReadonly(value) {
  return !!( value && (value[ReactiveFlags.IS_READONLY]))
}

export function isReactive(value) {
  return !!( value && (value[ReactiveFlags.IS_REACTIVE]))
}

export function toRaw(value) {
  // TODO: 这里和源码不一样
  // 对返回的value[ReactiveFlags.RAW] 再做一层toRaw 防止返回的还是Proxy
  return  isProxy(value) ? toRaw(value[ReactiveFlags.RAW]) : value;
}

function createReactiveObject(target, proxyMap, baseHandlers) {
  if(proxyMap.has(target)) {
    // target already has a reactive proxy, return it.
    return proxyMap.get(target);
  }

  const proxyObj =  new Proxy(target, baseHandlers);
  proxyMap.set(target, proxyObj);
  return proxyObj;
}
