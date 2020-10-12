// App Imports
import params from '../../../setup/config/params'
import Dashboard from '../../../modules/admin/Dashboard'

// Admin dashboard routes
// string of endpoint name space thee endpt occupies
// component is whats rendered for that endpoint
// auth set to true, then for this path, check to see if there is permission to access
// if auth is false, you can go! if not, takes you back to home
// role checks role
// console.log(params.user.roles.admin)
export const dashboard = {
  path: '/admin/dashboard',
  component: Dashboard,
  auth: true,
  role: params.user.roles.admin
}