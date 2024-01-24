import { editData } from "../../libs/ApiRequestHelper";

const AcceptReportService = async (id) => {
    const response= await editData(`/reports/${id}/accept`);
    if (response && response.result == 1) {
      // updateSuccessToast();
      console.log('Accepted Service');
      return response.data;
    }
   return 'Error in Edit Report Service';
  };

  export default AcceptReportService;