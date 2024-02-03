export const IS_INVALID_URL = url => {
  try {
    return Boolean(new URL(url))
  } catch (error) {
    return false
  }
}
