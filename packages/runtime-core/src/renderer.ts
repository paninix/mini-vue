import { ShapeFlags } from "@mini-vue/shared";
import { createComponentInstance } from "./component";
import { queueJob } from "./scheduler";
import { effect } from "@mini-vue/reactivity";
import { setupComponent } from "./component";
import { Fragment, normalizeVNode, Text } from "./vnode";
import { shouldUpdateComponent } from "./componentRenderUtils";
import { createAppAPI } from "./createApp";

export function createRenderer(options) {
  const {
    createElement: hostCreateElement,
    setElementText: hostSetElementText,
    patchProp: hostPatchProp,
    insert: hostInsert,
    remove: hostRemove,
    setText: hostSetText,
    createText: hostCreateText,
  } = options;

  const render = (vnode, container) => {
  };

  function patch() {
    
  }

  function processFragment(n1: any, n2: any, container: any) {
  }

  function processText(n1, n2, container) {
  }

  function processElement(n1, n2, container, anchor, parentComponent) {
  }

  function updateElement(n1, n2, container, anchor, parentComponent) {
  }

  function patchProps(el, oldProps, newProps) {
  }

  function patchChildren(n1, n2, container, anchor, parentComponent) {
  }

  function patchKeyedChildren() {

  }

  function mountElement(vnode, container, anchor) {
  
  }

  function mountChildren(children, container) {
   
  }

  function processComponent(n1, n2, container, parentComponent) {
  
  }

  // 组件的更新
  function updateComponent(n1, n2, container) {
   
  }

  function mountComponent(initialVNode, container, parentComponent) {
    
  }

  function setupRenderEffect(instance, initialVNode, container) {
  
  }

  function updateComponentPreRender(instance, nextVNode) {
    
  }

  return {
    render,
    createApp: createAppAPI(render),
  };
}

function getSequence(arr: number[]): number[] {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = (u + v) >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
