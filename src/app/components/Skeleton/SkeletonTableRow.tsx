// SkeletonTableRow.js
import React from "react";
import SkeletonTableCell from "../../atoms/Skeleton/SkeletonTableCell";

interface SkeletonTableRowProps {
  cellWidths: string[];
}
const SkeletonTableRow = ({ cellWidths }: SkeletonTableRowProps) => {
  return (
    <tr className="animate-pulse">
      {cellWidths.map((width: string, index: number) => (
        <SkeletonTableCell key={index} width={width} />
      ))}
    </tr>
  );
};

export default SkeletonTableRow;
