import { exportData } from "../../libs/ApiRequestHelper";

export const exportUserService = async (userId) => {
  try {
    const response = await exportData(`/user-report/${userId}`);

    const currentDate = new Date().toISOString().replace(/:/g, ''); // Get current date and time without colons
    const filename = `${userId}ReportExports_${currentDate}.xlsx`;
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error); // Handle errors
  }
};