export const preprocessBoolean = (val:any) => {
  if (val === "true" || val === "1" || val === 1) return true;
  if (val === "false" || val === "0" || val === 0) return false;
  return val;
};

export const preprocessNumber = (val:any) => {
  if (typeof val === "string" && val.trim() !== "") {
    const parsed = parseFloat(val);
    return isNaN(parsed) ? val : parsed;
  }
  return val;
};

export const preprocessDate = (input: unknown): Date => {
  if (typeof input === 'string' || input instanceof Date) {
    return new Date(input);
  }
  throw new Error('Invalid date format');
};
