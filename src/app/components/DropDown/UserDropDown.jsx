import { MoreVertical, Pencil, Trash2, Download } from 'lucide-react';
import { deleteUserService } from "../../services/UserService/DeleteService";
import { exportUserService } from "../../services/UserService/ExportService";
import Link from 'next/link';

const UserDropDown = ({ userId, fetchUsers }) => {
    const handleDelete = async () => {
        await deleteUserService(userId);
        fetchUsers();
    }

    const handleExport = async () => {
        await exportUserService(userId);
    }

    return (
        <div>
            <div className="dropdown">
                <span className="mx-2" tabIndex="0">
                    <MoreVertical size={16} className='flex justify-center items-center text-sm font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' />
                </span>
                <div className="dropdown-menu dropdown-menu-left-bottom">
                    <span className="dropdown-item text-sm text-gray-400">Account settings</span>
                    <Link href={`/users/${userId}`}>
                        <span className="dropdown-item text-sm block">
                            <Pencil size={16} className="mr-2 inline-block" />
                            Edit
                        </span>
                    </Link>
                    <Link href="#" className="dropdown-item text-sm block" onClick={handleExport}>
                        <Download size={16} className="mr-2 inline-block" />
                        Export
                    </Link>
                    <div className="dropdown-divider" role="separator"></div>
                    <span className="dropdown-item text-sm text-gray-400">Danger Zone</span>
                    <Link href="#" className="dropdown-item text-sm block text-red-400" onClick={handleDelete}>
                        <Trash2 size={16} className="mr-2 inline-block" />
                        Delete
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserDropDown;