export const checkIncomeAndOutCome = (
  incomePercentage = 0,
  outcomePercentage = 0
) => {
  return {
    isIncomeGreaterThanOutcome: incomePercentage > outcomePercentage,
  };
};
