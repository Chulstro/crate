import models from '../../setup/models'

export async function create(parentValue, { styles }) {
  const topStyle = Math.max(...styles.selectClothing)
  console.log(topStyle)
  return await models.UserStyle.create({
    styleId,
    userId
  })
} else {
  throw new Error('Error')
}
