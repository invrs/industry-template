function patch(ignore, type) {
  for (let name in this.functions()) {
    if (ignore[type].indexOf(name) == -1) {
      let fn = this[name]
      this[name] = (...args) =>
        runAndReturn({ args, bind_to: this, fn, name })
    }
  }
}

function runAndReturn({ args, bind_to, fn, name }) {
  let output = fn.bind(bind_to)(...args)
  return output
}

export let template = Class =>
  class extends Class {
    beforeInit() {
      patch.bind(this)(this.Class.industry().ignore, "instance")
      super.beforeInit()
    }
  }
