// dummy function
const save = async (userId: String, post: string) => true

/**************** ORIGINAL ****************/

/* // save a post, and return true for success, and false for failure
async function savePost(
  userId: string,
  post: string,
  group: string
): Promise<boolean> {
  if (group !== '') {
    if (group === 'author') {
      if (post.length > 1000) {
        return await save(userId, post)
      } else {
        return false
      }
    }
    if (group === 'admin') {
      if (post.length > 100) {
        return await save(userId, post)
      } else {
        return false
      }
    }
    if (post.length > 2000) {
      return await save(userId, post)
    }
  } else {
    return false
  }
} */

/**************** NEW ****************/

async function savePost(
  userId: string,
  post: string,
  group: string
): Promise<boolean> {
  if (group === '') return false

  const canSave = false

  if (post.length > 2000) {
    canSave = true
  }

  if (group === 'author' && post.length > 1000) {
    canSave = true
  }

  if (group === 'admin' && post.length > 100) {
    canSave = true
  }

  // if (canSave) return await save(userId, post)
  // else return false

  // still not that clear, happy path should have no conditions on final return

  if (!canSave) return false

  return await save(userId, post)
}
