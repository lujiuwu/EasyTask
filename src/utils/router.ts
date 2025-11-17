/**
 * @description 路由工具 -- 判断路由级别关系
 */

export function isDescendentOf (parent: string, child: string) {
  return child.startsWith(parent)
}
