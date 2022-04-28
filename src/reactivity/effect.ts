/*
 * @Author: yl.huang
 * @Date: 2022-04-23 16:12:30
 * @LastEditors: yl.huang
 * @LastEditTime: 2022-04-28 21:37:35
 * @FilePath: \mini-vue3\src\reactivity\effect.ts
 * @Description: 
 */
class ReactiveEffect {
  private _fn: any
  constructor(fn) {
    this._fn = fn
  }

  run() {
    activeEffect = this
    this._fn()
  }
}

const targetMap = new Map()
export function track(target, key) {
  // 映射关系 target -> key -> dep
  let depsMap = targetMap.get(target)

  // 初始化时边界处理
  if(!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Set()
  }

  dep.push(activeEffect)
}

let activeEffect
export function effect(fn) {
  // fn
  const _effect = new ReactiveEffect(fn)

  _effect.run()
}