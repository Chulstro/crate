// App Imports
import models from '../../setup/models'

// Create subscription
export async function create(parentValue, { styles }, { userId }) {
  if(auth.user && auth.user.id > 0) {
    return await models.UserStyle.create({
      userId: userId,
      styleId: // Order styles and pick two
    })
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}
