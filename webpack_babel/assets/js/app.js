// TEST
const name = "Clement"
console.log(name)

// VARIABLES

let firstname = "Clement"
var lastname = "Barbaza"

var results = []

for (var i = 0; i < 10; i++) {
    let firstname = "Jacques"
    var lastname = "Hugues"
}

console.log(lastname) // Hugues
console.log(firstname) // Clement

// Results using var
for (var i = 0; i < 10; i++) {
    console.log(i) // 0, 1, 2, 3...
    results.push(function() {
        console.log(i) // 10, 10, 10...
        return i % 2 === 0 ? 'even' : 'odd'
    })
}

results.forEach(function (result) {
    console.log(result()) // (10) Even
})

// Results using let
for (let i = 0; i < 10; i++) {
    console.log(i) // 0, 1, 2, 3...
    results.push(function() {
        console.log(i) // 10, 10, 10...
        return i % 2 === 0 ? 'even' : 'odd'
    })
}

results.forEach(function (result) {
    console.log(result()) // (10) Even
})


// Works only using let and not var
var messages = ['Hello', 'I am good', 'How are you my friend?']

for (let i = 0; i < messages.length; i++) {
    setTimeout(function() {
        console.log(messages[i])
    }, i * (Math.floor(Math.random () * 2500 + 1500)))
}

// CONSTANTS

const tax = 20
// tax = 10 // app.js:1 Uncaught Error: "tax" is read-only
console.log(tax)

// Not overwritten but you can modify
const names = ['Clement', 'Jacques']
names.push('Tomy')
console.log(names)

const user = {
    authenticated: true,
    name: 'Clement'
}

user.authenticated = false

console.log(user)

// ARROW FUNCTIONS

/*
var calc = function calc(one, two) {
    return one + two
}
*/

/*
var calc = (one, two) => {
    return one + two
}
*/

var calc = (one, two) => one + two

console.log(calc(1, 2))

localStorage.setItem('token', 'abc')

var storage = {
    get (key, callback) {
        callback(localStorage.getItem(key))
    }
}

storage.get('token', value => console.log(value))

var component = {
    data: {
        token: null
    },
    /*
    run: function () {
        var that = this
        storage.get('token', function (value) {
            this.data.token = value // Cannot set property 'token' of undefined
            that.data.token = value // OK
        })
    }
    */
   run: function () {
        storage.get('token', value => this.data.token = value)
    }
}

component.run()
console.log(component)

// FUNCTION PARAMETERS DEFAUT

/*
var greet = (greeting, name) => {
    if (typeof greeting === 'undefined') {
        greeting = "Hello"
    }

    if (typeof name === 'undefined') {
        name = "Clement"
    }

    return greeting + ' ' + name
}
*/

var greet = (greeting = "Hello", name = "Clement") => {
    return greeting + ' ' + name
}

console.log(greet())

// SHORTHAND OBJECT PROPERTIES

var animal = {
    username: "Marou",
    sound: () => {
        return 'Meow'
    }
}

var animal = {}
animal.username = 'Marou'
animal.sound = () => {
    return 'Meow'
}

var username = "Marou"
var sound = () => {
    return 'Meow'
}

var animal = { username, sound }

console.log(animal.sound())
console.log(animal)

var sounds = {
    meow() {
        return "Meow"
    },
    hiss() {
        return "Hiss"
    },
}

var username = "Marou"
var marou = { name, sounds }
console.log(marou)

// OBJECT DESTRUCTURING

var form = {
    username: 'Clement',
    password: 'admin'
}

/*
var login = (username, password) => {
    console.log(username)
}

login(form.username, form.password)
*/

var login = ({ username, password }) => {
    console.log(username)
}

login(form)

var api = {
    register (payload) {
        console.log(payload)
    }
}

/*
var register = (email, username, password) => {
    api.register({ email, username, password })
}

var component = {
    data: {
        email: "clement@barbaza.com",
        username: "clement",
        password: "password"
    }
}

register(component.data.email, component.data.username, component.data.password)
*/

var register = ({ email, username, password }) => {
    api.register({ email, username, password })
}

var component = {
    data: {
        email: "clement@barbaza.com",
        username: "clement",
        password: "password"
    }
}

register(component.data)

// SPREAD OPERATOR

var usernames = ['clement', 'jacques', 'tomy']
console.log(...usernames)

var register = (email, username, password) => {
    console.log('Registered', email, username, password)
}

var payload = ['clement@barbaza.com', 'clement', 'admin']

register(...payload)
register.apply(null, payload)

var posts = [
    { title: "Post 1", body: "Lorem ipsum 1" },
    { title: "Post 2", body: "Lorem ipsum 2" }
]

var newPosts = [
    { title: "New title 3", body: "New body 3" },
    { title: "New title 4", body: "New body 4" }
]

posts.push(...newPosts)

console.log(posts)

// STRING LITERALS

var username = "Clement"
var greeting = "Welcome " + name

var greeting = `Welcome ${name}`

console.log(greeting)

var url = "www.google.com"
var title = "Google"

var link = '<a href="' + url + '">' + title + '</a>'
var link = `<a href="${url}">${title}</a>`

var unreadMessages = 5
var readMessages = 20

var messagesTotal = `You have ${unreadMessages + readMessages}`
console.log(messagesTotal)

let text = () => {
    return 'Some value'
}

let anchor = `<a href="#">${text()}</a>`
console.log(anchor)

/*
let welcome = "Hi " +
"there"
*/

let welcome = `Hi
there`

console.log(welcome)

// TEMPLATE LITERALS

var emnum = (strings, ...keys) => {
    keys.forEach((value, index) => {
        if (typeof value == "number") {
            keys[index] = `<em>${value}</em>`
        }
    })

    var result = strings[0]
    for (let i = 0; i < keys.length;  i++) {
        result += keys[i] + strings[i + 1]
    }

    return result;
}

var username = "Clement"
var msgCount = 20

var greeting = emnum`Hi ${name}, you have ${msgCount} messages`
console.log(greeting)

// IMPORT AND EXPORTS

var message = "     It's a lovely day to learn ES6       "

//import { substr } from './helpers/index.js'
//import { substr, trim } from './helpers/index.js'
//console.log(substr(trim(message), 5))

import * as h from './helpers'
console.log(h.substr(h.trim(message), 5))

// EXPORT DEFAULT

//import { router } from './routes/router'
//import router from './routes/router'

//console.log(router())

// SPLITING UP FURTHER

import router from './routes'

console.log(router)

// PROMISES

/*
$.ajax({
    'url': 'abc.php',
    complete: function () {
        console.log('test')
    }
})
*/

var storage = {
    get (key, success, error) {
        let value = localStorage.getItem(key)

        if (value === null) {
            error(`${key} could not be found`)
            return
        }

        success(value)
    },
    put (key, value) {
        localStorage.setItem(key, value)
    }
}

//storage.put('name', 'Clement')

storage.get('name', (value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})

let p = new Promise((resolve, reject) => {
    resolve()
    //reject()
}).then(() => {
    console.log('Promise resolved')
}).catch(() => {
    console.log('Promise rejected')
})

let prom = new Promise((resolve, reject) => {
    var key = "abc"
    var value = null

    if (value) {
        resolve(value)
    }

    reject(`No key found ${key}`)
})

prom.then((value) => {
    console.log(value)
})

prom.catch((value) => {
    console.log(value)
})

let myApi = {
    register () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (false) {
                    reject({ 'error': 'Failed'})
                }

                resolve({'name' : 'Clement'})
            }, 2000)
        })
    }
}

let myComponent = {
    register () {
        myApi.register().then((response) => {
            console.log(response)
        }).catch(() => {
            console.log('Registration failed')
        })
    }
}

myComponent.register()

let doSomething = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Worked')
        }

        reject('Not worked')
    })
}

/*
doSomething().then((value) => {
    console.log(value)

    return `<em>${value}</em>`

}).then((value) => {
    console.log(value)
})
*/

doSomething().then((value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})

let promis = new Promise((resolve, reject) => {
    resolve({ 'name' : 'clement' })
})

console.log(promis)
