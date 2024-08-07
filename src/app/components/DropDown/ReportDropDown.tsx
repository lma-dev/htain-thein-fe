"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MoreVertical, Pencil, Trash2, Eye } from "lucide-react";
import { DeleteReportService } from "../../services/ReportService/DeleteReportService";
import ConfirmDialog from "../Dialog/ConfirmDialog";
import Link from "next/link";
import { UserRole } from "../../enums/UserRole";
import { parseCookies } from "nookies";
import { useLocale } from "../../context/LangContext";

export default function ReportDropDown({ reportId, t }) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const deleteMutation = DeleteReportService();
  const userRole = parseCookies().userRole;
  const { currentLocale } = useLocale();
  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    await deleteMutation.mutate(reportId);
    setOpenDeleteDialog(false);
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
                <Link
                  href={`/${currentLocale}/reports/${reportId}`}
                  className="text-sm block p-2 hover:bg-gray-200 w-full rounded"
                >
                  <Eye size={16} className="mr-2 inline-block" />
                  {t("detail")}
                </Link>
              </Menu.Item>
              {(userRole === UserRole.ADMIN ||
                userRole === UserRole.SUPER_ADMIN) && (
                  <div>
                    <Menu.Item>
                      <Link
                        href={`/${currentLocale}/reports/${reportId}/edit`}
                        className="text-sm block p-2 hover:bg-gray-200 w-full rounded"
                      >
                        <Pencil size={16} className="mr-2 inline-block" />
                        {t("edit")}
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="#"
                        className="p-2 hover:bg-gray-200 w-full rounded text-sm block text-red-400"
                        onClick={handleDelete}
                      >
                        <Trash2 size={16} className="mr-2 inline-block" />
                        {t("delete")}
                      </Link>
                    </Menu.Item>
                  </div>
                )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ConfirmDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        method={handleConfirmDelete}
        t={t}
      />
    </div>
  );
}
