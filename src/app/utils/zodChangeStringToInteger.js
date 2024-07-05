export const preprocessBoolean = (val) => {
  if (val === "true" || val === "1" || val === 1) return true;
  if (val === "false" || val === "0" || val === 0) return false;
  return val;
};

export const preprocessNumber = (val) => {
  if (typeof val === "string" && val.trim() !== "") {
    const parsed = parseFloat(val);
    return isNaN(parsed) ? val : parsed;
  }
  return val;
};

export const preprocessDate = (val) => {
  if (typeof val === "string" || val instanceof Date) {
    const parsed = new Date(val);
    return isNaN(parsed.getTime()) ? val : parsed;
  }
  return val;
};
