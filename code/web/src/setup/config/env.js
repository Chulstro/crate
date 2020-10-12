// Imports
import dotenv from 'dotenv'

// Load .env
// node pagk, allows to access and use environemnts in a .env
dotenv.config()
// environment variable
// diff environements have diff urls bc we have 3 deployed versions of our app
// production environment- always be working
// development environment need to have works in progress that can be tested and deployed
// staging enviorn is in bt. should work, wehre things  can be reviewed 
// diff enviorn w diff api keys per environments (diff database)
// diff enviornments will use diff urls both for front end routing and backend api
// URL
export const APP_URL = process.env.APP_URL
export const APP_URL_API = process.env.APP_URL_API

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 3000
