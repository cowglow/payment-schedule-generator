import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { getMonthName } from "../../lib/get-month-name/get-month-name";

interface ScheduleTableProps {
  employeeId?: string;
  duration?: number;
  data?: Payments;
}

export const ScheduleTable: React.FC<ScheduleTableProps> = ({
  employeeId,
  duration,
  data,
}) => {
  if (!data) {
    return <></>;
  }

  return (
    <Table arial-label={`Scheduled Payments for ${employeeId}`}>
      <TableHead>
        <TableRow>
          <TableCell>Month</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell>Bonus</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from(Array(duration).keys()).map((entry, index) => (
          <TableRow key={index}>
            <TableCell>{getMonthName(data.salary[entry].getMonth())}</TableCell>
            <TableCell>{data.salary[entry].toDateString()}</TableCell>
            <TableCell>
              {data.bonuses[entry]?.toDateString() ?? "---"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
