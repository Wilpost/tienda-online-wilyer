export const IS_INVALID_URL = url => {
  try {
    return Boolean(new URL(url))
  } catch (error) {
    return false
  }
}

export const STYLE_INPUT_ERROR =
  'border-[1px] text-red-500 border-red-500 shadow-errorInput shadow-red-300'
