import { shallowMount } from '@vue/test-utils'
import TotalPoints from '@/components/home/TotalPoints.vue'

describe('TotalPoints.vue',() => {
  it('weight filter works currectly',() => {
    const comp = shallowMount(TotalPoints)
    expect(comp.vm.$options.filters['weight'](100)).toBe('100g')
    expect(comp.vm.$options.filters['weight'](1000)).toBe('1.000kg')
    expect(comp.vm.$options.filters['weight'](100100)).toBe('100.100kg')
  })
})
