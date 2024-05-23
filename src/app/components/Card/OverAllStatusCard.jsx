import React from "react";

const OverAllStatusCard = ({ calculations, t }) => {
  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-gray-500">
        {t("overviewAnalysis")}
      </h1>
      <div className="h-96 rounded-lg border p-5 shadow-lg bg-white">
        <h3 className="pb-2 text-lg font-semibold text-gray-500">
          {t("availableBalance")}
        </h3>
        <h1 className="w-auto rounded-lg border bg-gray-100 p-4 md:text-4xl sm:text-lg font-semibold text-gray-800">
          <span
            className={`mt-1 block rounded-md bg-gray-100 px-4 py-2 font-semibold ${
              calculations?.data?.availableBalance < 0
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {calculations?.data?.availableBalance?.toLocaleString()} $
          </span>
        </h1>
        <div className="pt-6">
          <h3 className="text-xl font-bold text-gray-500">Overview Analysis</h3>
          <div className="mt-4">
            <span className="block text-sm text-gray-500 font-semibold">
              {t("regularDeposit")}:
            </span>
            <span className="mt-1 block rounded-md bg-gray-100 px-4 py-2 font-semibold text-gray-800 ">
              {calculations?.data?.regularCost} $
            </span>
          </div>
          <div className="mt-4 flex space-x-4">
            <div className="flex-1">
              <span className="block text-sm text-gray-500 font-semibold">
                {t("mostDepositPerson")}:
              </span>
              <span className="mt-1 block rounded-md bg-gray-100 px-4 py-2 font-semibold text-gray-800">
                {calculations?.data?.mostDepositPerson}
              </span>
            </div>
            <div className="flex-1">
              <span className="block text-sm text-gray-500 font-semibold">
                {t("mostWithdrawPerson")}:
              </span>
              <span className="mt-1 block rounded-md bg-gray-100 px-4 py-2 font-semibold text-gray-800">
                {calculations?.data?.mostWithdrawPerson}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverAllStatusCard;
