import { factory } from "industry"
import { chain } from "industry-chain"
import { exception } from "industry-exception"
import { instance } from "industry-instance"
import { functions } from "industry-functions"
import { standard_io } from "industry-standard-io"
import { trace } from "../../"

describe("IndustryTemplate", () => {
  function makeTest() {
    return factory()
      .set("exception", exception)
      .set("instance", instance)
      .set("functions", functions)
      .set("trace", trace)
      .set("standard_io", standard_io)
      .set("chain", chain)
  }

  it("works", () => {
    let base = class {}
    let test = makeTest().base(base)
    test()
  })
})
