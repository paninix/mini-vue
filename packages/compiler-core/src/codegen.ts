import { isString } from "@mini-vue/shared";
import { NodeTypes } from "./ast";
import {
  CREATE_ELEMENT_VNODE,
  helperNameMap,
  TO_DISPLAY_STRING,
} from "./runtimeHelpers";

export function generate(ast, options = {}) {

}

function genFunctionPreamble(ast: any, context: any) {
}

function genNode(node: any, context: any) {
}

function genCompoundExpression(node: any, context: any) {
 
}

function genText(node: any, context: any) {
 
}

function genElement(node, context) {
}

function genNodeList(nodes: any, context: any) {
}

function genNullableArgs(args) {
}

function genExpression(node: any, context: any) {
}

function genInterpolation(node: any, context: any) {
}

function genModulePreamble(ast, context) {
}

function createCodegenContext(
  ast: any,
  { runtimeModuleName = "vue", runtimeGlobalName = "Vue", mode = "function" }
): any {
}
