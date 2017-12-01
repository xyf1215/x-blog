export default (moduleName = '', defines = {}) => {
  const modules = {}
  Object.keys(defines).forEach(name => {
    name = name.toUpperCase()
    const children = defines[name]
    if (children && children.length) {
      modules[name] = {}
      children.forEach(defName => {
        modules[name][defName] = `${moduleName}:${name}.${defName}`
      })
    }
  })
  return modules
}
