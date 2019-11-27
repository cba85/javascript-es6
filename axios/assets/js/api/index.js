import axios from 'axios'

export const getTopic = (page = 1) => {
    return axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json').then((response) => {
        return response
    })
}
