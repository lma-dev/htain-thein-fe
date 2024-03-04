const startsWithBackSlash = /^\/app/;

export const isPathStartsWithBackSlash  = (path) => {
  return startsWithBackSlash.test(path)
}

