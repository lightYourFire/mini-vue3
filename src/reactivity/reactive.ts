/*
 * @Author: yl.huang
 * @Date: 2022-04-23 12:01:06
 * @LastEditors: yl.huang
 * @LastEditTime: 2022-04-23 15:59:43
 * @FilePath: \mini-vue3\src\reactivity\reactive.ts
 * @Description: 
 */
export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // target: {foo: 1}
      // key: foo
      const res = Reflect.get(target, key)
      
      // TODO 依赖收集
      return res
    },

    set(target, key, value) {
      const res = Reflect.set(target, key, value)

      // TODO 触发依赖
      return res
    }
  })
}
