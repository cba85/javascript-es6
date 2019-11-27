/*
import axios from 'axios'

axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json').then((response) => {
    console.log(response.data)
}).catch((error) => {
    console.log(error.response)
})
*/

import * as api from './api'

api.getTopic().then((response) => {
    console.log(response)
})
