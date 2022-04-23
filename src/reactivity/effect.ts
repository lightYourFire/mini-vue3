/*
 * @Author: yl.huang
 * @Date: 2022-04-23 16:12:30
 * @LastEditors: yl.huang
 * @LastEditTime: 2022-04-23 16:16:08
 * @FilePath: \mini-vue3\src\reactivity\effect.ts
 * @Description: 
 */
class ReactiveEffect {
  private _fn: any
  constructor(fn) {
    this._fn = fn
  }

  run() {
    this._fn()
  }
}

export function effect(fn) {
  // fn
  const _effect = new ReactiveEffect(fn)

  _effect.run()
}