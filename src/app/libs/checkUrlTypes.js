const startsWithBackSlash: RegExp = /^\/app/;

export const isPathStartsWithBackSlash  = (path: string): boolean => {
  return startsWithBackSlash.test(path)
}

