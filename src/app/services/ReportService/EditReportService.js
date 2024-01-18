import { editData } from "../../libs/ApiRequestHelper";

const EditReportService = async (reportId, newData) => {
    const response= await editData(`/reports/${reportId}`, newData);
    if (response && response.result == 1) {
      // updateSuccessToast();
      console.log('Success Edit Report Service');
      return response.data;
    }
   return 'Error in Edit Report Service';
  };

  export default EditReportService;