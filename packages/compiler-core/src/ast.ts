import { CREATE_ELEMENT_VNODE } from "./runtimeHelpers";

export const enum NodeTypes {
  TEXT,
  ROOT,
  INTERPOLATION,
  SIMPLE_EXPRESSION,
  ELEMENT,
  COMPOUND_EXPRESSION
}

export const enum ElementTypes {
  ELEMENT,
}

export function createSimpleExpression(content) {
}

export function createInterpolation(content) {
}

export function createVNodeCall(context, tag, props?, children?) {
}
