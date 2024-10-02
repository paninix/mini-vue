// 源码里面这些接口是由 runtime-dom 来实现
// 这里先简单实现

import { isOn } from "@mini-vue/shared";
import { createRenderer } from "@mini-vue/runtime-core";

// 后面也修改成和源码一样的实现
function createElement(type) {
}

function createText(text) {
}

function setText(node, text) {
}

function setElementText(el, text) {
}

function patchProp(el, key, preValue, nextValue) {
}

function insert(child, parent, anchor = null) {
}

function remove(child) {
}

let renderer;

function ensureRenderer() {
}

export const createApp = (...args) => {
};

export * from "@mini-vue/runtime-core"
