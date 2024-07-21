import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BiSolidTrash } from "react-icons/bi";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./Details.scss";

interface Column {
  id: "num" | "book" | "amount" | "cost" | "subtotal" | "actions";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "num", label: "Num", minWidth: 170 },
  { id: "book", label: "Book", minWidth: 100 },
  { id: "amount", label: "Amount", minWidth: 100 },
  { id: "cost", label: "Cost", minWidth: 100 },
  { id: "subtotal", label: "Subtotal", minWidth: 100 },
  { id: "actions", label: "", minWidth: 100 },
];

interface Data {
  num: number;
  book: string;
  amount: string;
  cost: string;
  subtotal: string;
  actions: string;
}

function createData(
  num: number,
  book: string,
  amount: string,
  cost: string,
  subtotal: string,
  actions: string,
): Data {
  return { num, book, amount, cost, subtotal, actions };
}

const rows = [
  createData(
    1, 
    "IN", 
    (<div>aadasa</div>), 
    "36 AED", 
    "36 AED", 
    (<div className="table_action_btn"><BiSolidTrash /></div>)
  ),
  createData(2, "CN", 'sas', "36 AED", "36 AED", 'actions'),
];

const Details = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div id="Details_bx">
        <Card className="cost_container">
          <CardContent className="content_bx">
            <h3>{t("products_detailes")}</h3>

            <div className="mt-4">
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.num}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Details;
