import React from "react";


const OverAllStatusCard = ({
    balanceData
}) => {
    return (

        <div>
            <h1 className="pb-4 text-xl font-semibold text-gray-500">
                OverAll Status
            </h1>
            <div className="h-96 rounded-lg border p-5 shadow-lg">
                <h3 className="pb-2 text-lg font-semibold text-gray-500">
                    Available Balance
                </h3>
                <h1 className="w-auto rounded-lg border bg-gray-100 p-4 md:text-4xl sm:text-lg font-semibold text-gray-800">
                    <span
                        className={`mt-1 block rounded-md bg-gray-100 px-4 py-2 font-semibold ${balanceData?.availableBalance < 0 ? "text-red-500" : "text-green-500"
                            }`}
                    >
                        {balanceData?.availableBalance?.toLocaleString()} $
                    </span>
                </h1>
                <div className="pt-6">
                    <h3 className="text-xl font-bold text-gray-500">
                        Overview Analysis
                    </h3>
                    <div className="mt-4">
                        <span className="block text-sm text-gray-500 font-semibold">
                            Regular Deposit:
                        </span>
                        <span className="mt-1 block rounded-md bg-gray-100 px-4 py-2 font-semibold text-gray-800 ">
                            {balanceData?.regularCost} $
                        </span>
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <div className="flex-1">
                            <span className="block text-sm text-gray-500 font-semibold">
                                Most Deposit Person:
                            </span>
                            <span className="mt-1 block rounded-md bg-gray-100 px-4 py-2 font-semibold text-gray-800">
                                {balanceData?.mostDepositPerson}
                            </span>
                        </div>
                        <div className="flex-1">
                            <span className="block text-sm text-gray-500 font-semibold">
                                Most Withdraw Person:
                            </span>
                            <span className="mt-1 block rounded-md bg-gray-100 px-4 py-2 font-semibold text-gray-800">
                                {balanceData?.mostWithdrawPerson}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OverAllStatusCard;
