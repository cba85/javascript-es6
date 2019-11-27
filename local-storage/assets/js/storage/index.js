export default {
    get (key) {
        let value = localStorage.getItem(key)

        return new Promise((resolve, reject) => {
            if (value === null) {
                reject('No value')
            }

            resolve(value)
        })
    },
    put (key, value) {
        return new Promise((resolve, reject) => {
            localStorage.setItem(key, value)

            resolve(value)
            // resolve(this.get(key))
        })
    }
}
