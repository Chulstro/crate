// App Imports
import * as dashboard from './dashboard'
import * as product from './product'
import * as crate from './crate'
import * as subscription from './subscription'
import * as user from './user'

// also add a styles route
// Admin routes

// own index, bundles up all of its endpoints, data we are using and format of the request and format of response
const admin = {
  ...dashboard,
  ...product,
  ...crate,
  ...subscription,
  ...user
}

export default admin
