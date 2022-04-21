/*
 * @Author: yl.huang
 * @Date: 2022-04-21 20:23:57
 * @LastEditors: yl.huang
 * @LastEditTime: 2022-04-21 20:45:00
 * @FilePath: \mini-vue3\src\reactivity\tests\effect.spec.ts
 * @Description: 
 */

/**
 * effect
 * effect为了解决vue2的问题，依赖收集（即添加观察者/通知观察者）模块单独出来，就是现在的effect
 * 用来生成/处理/追踪reactiveEffect数据，主要是收集数据依赖（观察者），通知收集的依赖（观察者）
 * effect是将传入的函数转化为reactiveEffect格式的函数；
 * track主要功能是将reactiveEffect添加为target[key]的观察者；
 * trigger主要功能是通知target[key]的观察者（将观察者队列函数一一取出来执行）；
 */

/**
 * 
 */

describe("effect", () => {
  it('happy path', () => {
    const user = reactive({
      age: 10
    })

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
