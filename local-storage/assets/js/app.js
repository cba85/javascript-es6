import storage from './storage'

console.log(storage)

storage.put('name', 'Clément').then((value) => {
    console.log('Set', value)
}).catch(() => {
     console.log('Error')
})

storage.get('name').then((value) => {
    console.log(value)
})
