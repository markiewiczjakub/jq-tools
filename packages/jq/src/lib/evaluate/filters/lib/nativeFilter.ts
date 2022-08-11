import { DefAst } from '../../../parser/AST';

export type NativeFilter = (
  input: any,
  ...args: any[]
) => IterableIterator<any>;

export function isNativeFilter(
  val: DefAst | NativeFilter
): val is NativeFilter {
  return typeof val === 'function';
}
