import { ElementTypes, NodeTypes } from "./ast";

const enum TagType {
  Start,
  End,
}

export function baseParse(content: string) {
}

function createParserContext(content) {
}

function parseChildren(context, ancestors) {
}

function isEnd(context: any, ancestors) {
}

function parseElement(context, ancestors) {
}

function startsWithEndTagOpen(source: string, tag: string) {
}

function parseTag(context: any, type: TagType): any {
}

function parseInterpolation(context: any) {
}

function parseText(context): any {
}

function parseTextData(context: any, length: number): any {
}

function advanceBy(context, numberOfCharacters) {
}

function createRoot(children) {
}

function startsWith(source: string, searchString: string): boolean {
  return false;
}
