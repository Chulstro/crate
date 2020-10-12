// App Imports
import { APP_URL_API } from '../config/env'
import admin from './admin'
import home from './home'
import user from './user'
import product from './product'
import crate from './crate'

// add a styles route here

// Combined routes
// collect all routes into 1 obj
// object.assign takes objs and puts them in a new target obj, immutable!
export const routes = Object.assign(admin, home, user, product, crate)

// API Routes
// common syntax is all caps for environment urls
export const routeApi = APP_URL_API

// Image
export const routeImage = APP_URL_API

//
