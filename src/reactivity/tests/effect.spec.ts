/*
 * @Author: yl.huang
 * @Date: 2022-04-21 20:23:57
 * @LastEditors: yl.huang
 * @LastEditTime: 2022-04-23 16:09:07
 * @FilePath: \mini-vue3\src\reactivity\tests\effect.spec.ts
 * @Description: 
 */

/**
 * reactivity happy path的过程：创建一个响应式对象user，用effect进行包裹，当响应式的值发生改变时，nextAge的值会更新；
 * 
 * 响应式对象，有一个容器，需要收集所有的依赖的；
 * 
 * 依赖收集：
 * 如何依赖收集？ 通过effect, effect参数接口fn回调函数，调用fn 执行了user.age + 1，于是触发了get操作，
 * 这时响应式对象就能当前fn收集起来，这收集完成，这个动作就是依赖收集；
 * 
 * update 触发依赖：
 *  user.age ++, 触发set操作，它会把之前容器收集起来的fn依赖call调用下；
 * 
 */
import { reactive } from '../reactive'

describe("effect", () => {
  it.skip('happy path', () => {
    const user = reactive({
      age: 10
    })

    console.log(user, 'user<===============')

    let nextAge
    effect(() => {
      nextAge = user.age + 1
    })

    expect(nextAge).toBe(11)

    // update 触发依赖
    user.age ++
    expect(nextAge).toBe(12)
  })
})
