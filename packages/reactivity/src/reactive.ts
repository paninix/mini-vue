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
}

export function readonly(target) {
}

export function shallowReadonly(target) {
}

export function isProxy(value) {
}

export function isReadonly(value) {
}

export function isReactive(value) {
}

export function toRaw(value) {
}

function createReactiveObject(target, proxyMap, baseHandlers) {
}
