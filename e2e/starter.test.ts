import { beforeAll, beforeEach, describe, it } from '@jest/globals'
import { device } from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show "View Without BlurView"', async () => {
    await expect(element(by.id('text'))).toHaveText('View Without BlurView')
  })

  it('should show "View With BlurView" after tapping button', async () => {
    await (element(by.id('button'))).tap()
    await expect(element(by.id('text'))).toHaveText('View With BlurView')
  })
})
