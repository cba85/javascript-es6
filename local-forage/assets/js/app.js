import localforage from 'localforage'

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: "localforage"
})

localforage.setItem('name', 'Billy').then((value) => {
    console.log(`${value} set`)
})

localforage.getItem('name').then((value) => {
    console.log(value)
})
