/*
 * @Author: yl.huang
 * @Date: 2022-04-21 17:22:10
 * @LastEditors: yl.huang
 * @LastEditTime: 2022-04-21 19:56:57
 * @FilePath: \mini-vue3\src\reactivity\tests\index.spec.ts
 * @Description: 
 */
import { add } from '../index'
it("init", () => {
  expect(add(1, 2)).toBe(3)
})
