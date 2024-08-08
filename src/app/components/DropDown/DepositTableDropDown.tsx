import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MoreVertical, Check, X } from "lucide-react";
import ConfirmBox from "../ModalBox/ConfirmBox";
import { ConfirmStatus } from "../../enums/ConfirmStatus";

type DepositTableDropDownProps = {
  id: number;
  t: any;
};
export default function DepositTableDropDown({ id, t }: DepositTableDropDownProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [status, setStatus] = useState();
  const handleReportAction = async (key: any) => {
    setOpenDialog(true);
    setStatus(key);
  };

  const renderConfirmBox = () => {
    return (
      <div>
        {openDialog && (
          <ConfirmBox
            id={id}
            status={status}
            setOpenDialog={setOpenDialog}
            openDialog={openDialog}
            t={t}
          />
        )}
      </div>
    );
  };

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium  border hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <MoreVertical
              size={16}
              className="flex justify-center items-center text-sm font-semibold text-gray-800 cursor-pointer disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y  divide-gray-100 rounded-md bg-white z-10 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <a
                  href="#"
                  className="text-sm block p-2 hover:bg-gray-200 w-full rounded"
                  onClick={() => handleReportAction(ConfirmStatus.ACCEPT)}
                  aria-label="confirm_accept"
                >
                  <Check size={16} className="mr-2 inline-block" />
                  {t("accept")}
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="text-sm block p-2 hover:bg-gray-200 w-full rounded"
                  onClick={() => handleReportAction(ConfirmStatus.REJECT)}
                  aria-label="reortReject"
                >
                  <X size={16} className="mr-2 inline-block" /> {t("reject")}
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {renderConfirmBox()}
    </div>
  );
}
