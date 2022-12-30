/** ******************************************************************************
 *  (c) 2020 Zondax GmbH
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */

import Zemu, { DEFAULT_START_OPTIONS } from '@zondax/zemu'
import { newTernoaApp } from '@zondax/ledger-substrate'
import { APP_SEED, models, txOperation, defaultOptions } from './common'

jest.setTimeout(180000)

beforeAll(async () => {
  await Zemu.checkAndPullImage()
})
describe('System', function () {
  // test.each(models)('can start and stop container', async function (m) {
  //   const sim = new Zemu(m.path)
  //   try {
  //     await sim.start({ ...defaultOptions, model: m.name })
  //   } finally {
  //     await sim.close()
  //   }
  // })
  test.each(models)('tx_system_fillBlock_normal', async function (m) {
    const blob_system_fillBlock = '00001b1c5e3400041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await txOperation(sim, app, blob_system_fillBlock, m, 'tx_system_fillBlock_normal');
    } finally {
      await sim.close()
    }
  })
  test.each(models)('tx_system_fillBlock_expert', async function (m) {
    const blob_system_fillBlock = '00001b1c5e3400041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await sim.clickRight()
      await sim.clickBoth()
      await sim.clickLeft()
      await txOperation(sim, app, blob_system_fillBlock, m, 'tx_system_fillBlock_expert');
    } finally {
      await sim.close()
    }
  })
test.each(models)('tx_system_remark_normal', async function (m) {
    const blob_system_remark = '00011468656c6c6f00041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await txOperation(sim, app, blob_system_remark, m, 'tx_system_remark_normal');
    } finally {
      await sim.close()
    }
  })
  test.each(models)('tx_system_remark_expert', async function (m) {
    const blob_system_remark = '00011468656c6c6f00041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await sim.clickRight()
      await sim.clickBoth()
      await sim.clickLeft()
      await txOperation(sim, app, blob_system_remark, m, 'tx_system_remark_expert');
    } finally {
      await sim.close()
    }
  })
test.each(models)('tx_system_setCode_normal', async function (m) {
    const blob_system_setCode = '00031468656c6c6f00041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await txOperation(sim, app, blob_system_setCode, m, 'tx_system_setCode_normal');
    } finally {
      await sim.close()
    }
  })
  test.each(models)('tx_system_setCode_expert', async function (m) {
    const blob_system_setCode = '00031468656c6c6f00041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await sim.clickRight()
      await sim.clickBoth()
      await sim.clickLeft()
      await txOperation(sim, app, blob_system_setCode, m, 'tx_system_setCode_expert');
    } finally {
      await sim.close()
    }
  })
test.each(models)('tx_system_setCodeWithoutChecks_normal', async function (m) {
    const blob_system_setCodeWithoutChecks = '00041468656c6c6f00041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await txOperation(sim, app, blob_system_setCodeWithoutChecks, m, 'tx_system_setCodeWithoutChecks_normal');
    } finally {
      await sim.close()
    }
  })
  test.each(models)('tx_system_setCodeWithoutChecks_expert', async function (m) {
    const blob_system_setCodeWithoutChecks = '00041468656c6c6f00041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await sim.clickRight()
      await sim.clickBoth()
      await sim.clickLeft()
      await txOperation(sim, app, blob_system_setCodeWithoutChecks, m, 'tx_system_setCodeWithoutChecks_expert');
    } finally {
      await sim.close()
    }
  })
test.each(models)('tx_system_remarkWithEvent_normal', async function (m) {
    const blob_system_remarkWithEvent = '00081468656c6c6f00041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await txOperation(sim, app, blob_system_remarkWithEvent, m, 'tx_system_remarkWithEvent_normal');
    } finally {
      await sim.close()
    }
  })
  test.each(models)('tx_system_remarkWithEvent_expert', async function (m) {
    const blob_system_remarkWithEvent = '00081468656c6c6f00041300002cf61a24a2290b0000000100000018bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6aced2b169b41debe3843d84ec7baca76ccdad3408cb6ed0a8ce7fa3f3f0119cd8db'
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newTernoaApp(sim.getTransport())
      await sim.clickRight()
      await sim.clickBoth()
      await sim.clickLeft()
      await txOperation(sim, app, blob_system_remarkWithEvent, m, 'tx_system_remarkWithEvent_expert');
    } finally {
      await sim.close()
    }
  })

})