/*
export const substr = (string, length = 50) => {
    return string.length > length ? `${string.substr(0, length)}...` : string
}
*/

/*
const substr = (string, length = 50) => {
    return string.length > length ? `${string.substr(0, length)}...` : string
}

const trim = (string) => {
    return string.trim()
}

export { substr, trim }
*/

export * from './substr'
export * from './trim'
