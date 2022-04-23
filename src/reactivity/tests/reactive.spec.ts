/*
 * @Author: yl.huang
 * @Date: 2022-04-23 11:47:55
 * @LastEditors: yl.huang
 * @LastEditTime: 2022-04-23 15:50:33
 * @FilePath: \mini-vue3\src\reactivity\tests\reactive.spec.ts
 * @Description: 
 */
import { reactive } from '../reactive'

describe('reactive', () => {
  it('happy path', () => {
    const original = { foo: 1 }
    const observed = reactive(original)
    expect(observed).not.toBe(original)
    expect(observed.foo).toBe(1)
  })
})
