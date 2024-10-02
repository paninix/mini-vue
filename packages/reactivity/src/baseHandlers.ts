import { track, trigger } from "./effect";
import {
  reactive,
  ReactiveFlags,
  reactiveMap,
  readonly,
  readonlyMap,
  shallowReadonlyMap,
} from "./reactive";
import { isObject } from "@mini-vue/shared";

const get = createGetter();
const set = createSetter();
const readonlyGet = createGetter(true);
const shallowReadonlyGet = createGetter(true, true);

function createGetter(isReadonly = false, shallow = false) {
  return function getter(target, key, receiver) {
    if(key === ReactiveFlags.IS_REACTIVE) {
      return !isReadonly;
    } else if(key === ReactiveFlags.IS_READONLY) {
      return isReadonly;
    } else if(
      key === ReactiveFlags.RAW && (
        receiver === reactiveMap.get(target) || 
        receiver === readonlyMap.get(target) || 
        receiver === shallowReadonlyMap.get(target)
      ) ) {
      return target;
    }
    const res = Reflect.get(target, key, receiver);

    if(shallow) {
      // 浅层处理
      return res;
    }

    if(isObject(res)) {
      return isReadonly? readonly(res) : reactive(res);
    }

    return res;
  }
}

function createSetter() {
}

export const readonlyHandlers = {
 get: readonlyGet,
 set: (key, value, target) =>{
   throw new Error("Set operation on key " + key + " is not allowed");
 }
};

export const mutableHandlers = {
  get,
  set
};

export const shallowReadonlyHandlers = {
  get: shallowReadonlyGet,
  set: (key, value, target) => {
    throw new Error("Set operation on key " + key + " is not allowed");
  }
};
