// SkeletonTableRow.js
import React from "react";
import SkeletonTableCell from "../../atoms/Skeleton/SkeletonTableCell";

const SkeletonTableRow = ({ cellWidths }) => {
  return (
    <tr className="animate-pulse">
      {cellWidths.map((width, index) => (
        <SkeletonTableCell key={index} width={width} />
      ))}
    </tr>
  );
};

export default SkeletonTableRow;
