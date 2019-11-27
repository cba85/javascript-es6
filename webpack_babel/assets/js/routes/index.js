/*
export default () => {
    return 'Router'
}
*/

/*
import auth from '../app/auth/routes'
import home from '../app/home/routes'
*/

import routes from '../app/routes'

//console.log([...auth, ...home])

const router = () => {
   // return [home, auth]
   return routes
}

export default router
