export const template = function (template, data) {
    return template.replace(/{{([^{}]*)}}/g, (a, b) => {
        const r = data[b]
        if (r === undefined) return ''
        return r.toString()
    })
}