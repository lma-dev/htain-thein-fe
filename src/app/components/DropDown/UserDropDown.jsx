import { MoreVertical, Pencil, Trash2, Eye, Download } from 'lucide-react';
import { deleteUserService } from "../../services/UserService/DeleteService";
import { exportUserService } from "../../services/UserService/ExportService";

const UserDropDown = ({ userId, fetchUsers }) => {

    const handleDelete = async () => {
        try {
            const res = await deleteUserService(userId);
            fetchUsers();
            console.log(res); // Handle the response accordingly
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

    const handleEdit = () => {
        // Implement the logic for editing a user
        console.log(`Editing user with ID ${userId}`);
    }

    const handleView = () => {
        // Implement the logic for viewing a user
        console.log(`Viewing user with ID ${userId}`);
    }

    const handleExport = async () => {
        await exportUserService(userId);
    }

    return (
        <div>
            <div className="dropdown">
                <label className="btn btn-solid-primary mx-2" tabIndex="0">
                    <MoreVertical size={16} />
                </label>
                <div className="dropdown-menu dropdown-menu-left-bottom">
                    <span className="dropdown-item text-sm text-gray-400">Account settings</span>
                    <span className="dropdown-item text-sm block" onClick={handleEdit}>
                        <Pencil size={16} className="mr-2 inline-block" />
                        Edit
                    </span>
                    <a href="#" className="dropdown-item text-sm block" onClick={handleView}>
                        <Eye size={16} className="mr-2 inline-block" />
                        View
                    </a>
                    <a href="#" className="dropdown-item text-sm block" onClick={handleExport}>
                        <Download size={16} className="mr-2 inline-block" />
                        Export
                    </a>
                    <div className="dropdown-divider" role="separator"></div>
                    <span className="dropdown-item text-sm text-gray-400">Danger Zone</span>
                    <a href="#" className="dropdown-item text-sm block" onClick={handleDelete}>
                        <Trash2 size={16} className="mr-2 inline-block" />
                        Delete
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UserDropDown;