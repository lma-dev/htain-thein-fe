import { PencilLine, Trash2, MoreVertical, Lock } from 'lucide-react';

const ReportDropDown = () => {
    return (
        <div className="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-custom-icon-trigger" type="button" className="hs-dropdown-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <MoreVertical className='text-gray-500' size={16} />
            </button>

            <div className="border divide-y divide-gray-100 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-custom-icon-trigger">
                <div class="py-2 first:pt-0 last:pb-0">
                    <span class="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-500 text-left">
                        Settings
                    </span>

                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                        <PencilLine size={16} /> Edit
                    </a>
                </div>
                <div class="py-2 first:pt-0 last:pb-0">
                    <span class="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-500 text-left">
                        Danger Zone
                    </span>

                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                        <Trash2 size={16} /> Delete

                    </a>
                </div>


            </div>
        </div >
    )
}

export default ReportDropDown