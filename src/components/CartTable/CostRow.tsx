import * as React from "react";

const CostRow: React.FC<{
  bold?: boolean;
  mediumScreen: boolean;
  heading: string;
  cost: React.ReactNode;
}> = ({ bold, mediumScreen, heading, cost }) => (
  <tr>
    <td colSpan={mediumScreen ? 4 : 3} className="cart-table__cost">
      {heading}
    </td>
    <td colSpan={2} className={bold ? "bold" : undefined}>
      {cost}
    </td>
  </tr>
);

export default CostRow;
