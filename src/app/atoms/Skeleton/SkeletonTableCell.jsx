// SkeletonTableCell.js

const SkeletonTableCell = ({ width }) => {
    return (
        <td className="px-6 py-4 whitespace-nowrap">
            <div className={`bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 h-4 w-${width} rounded`}></div>
        </td>
    );
};

export default SkeletonTableCell;
