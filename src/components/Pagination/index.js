
import React from "react";
import classNames from "classnames/bind";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from "./Pagination.module.scss";

const cx = classNames.bind(styles);
export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={cx("pagination")}>
        <Stack className={cx("pagination-part")} spacing={2}>
          <Typography className={cx("page")}></Typography>
          <Pagination className={cx("paging")} count={10} page={page} onChange={handleChange} size="large" fon variant="outlined" color="secondary" showFirstButton showLastButton/>
        </Stack>
      <Stack className={cx("pagination-part")} spacing={2}>
        <Pagination className={cx("count-page")} count={10} page={page} size="large" onChange={handleChange} variant="outlined" />
      </Stack>
    </div>
  );
}