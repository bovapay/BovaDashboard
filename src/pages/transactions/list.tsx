import React from 'react';

import { TableCell, TableRow, Typography } from '@mui/material';
import TableLoader from 'components/shared/TableLoader';
import { useNavigate } from 'react-router';
import { IDealItem } from 'store/api/deals/deals.types';
import { parseDate } from 'utils/parseDate';
import { transformCurrencyValue } from 'utils/transformCurrencyValue';
import { EmptyTable } from 'components/third-party/ReactTable';
import TableError from 'components/shared/TableError';
import CardNumberFormat from 'components/shared/CardNumberFormat';
import TransactionStatusSwitcher from 'components/switchers/TransactionStatusSwitcher';

interface IList {
  isLoading: boolean;
  isError: boolean;
  isRefetching;
  list: IDealItem[];
}

const DEFAULT_USDT_REIT = 99.81;
const DEFAULT_MAGIC_VALUE = 105.81;

export default function List({ isError, isLoading, isRefetching, list }: IList) {
  const navigate = useNavigate();

  if (isLoading || isRefetching) {
    return (
      <TableRow>
        <TableCell colSpan={7}>
          <TableLoader />
        </TableCell>
      </TableRow>
    );
  }

  if (isError) {
    return <TableError colSpan={7} />;
  }

  if (list.length === 0) {
    return <EmptyTable msg="Транзакций не найдено" colSpan={7} />;
  }

  return (
    <>
      {list.map((row, index) => {
        return (
          <TableRow sx={{ textDecoration: 'none', cursor: 'pointer' }} key={index}>
            <TableCell onClick={() => navigate(`/transaction/${row.id}`)}>{row.id && `${row.id?.slice(0, 8)}...`}</TableCell>
            <TableCell onClick={() => navigate(`/transaction/${row.id}`)}>
              {transformCurrencyValue(+row.amount, { currency: row.currency as 'rub' })}
            </TableCell>
            <TableCell onClick={() => navigate(`/transaction/${row.id}`)}>
              {transformCurrencyValue(+row.amount / DEFAULT_USDT_REIT, { currency: '' as 'usdt' })}
            </TableCell>
            <TableCell onClick={() => navigate(`/transaction/${row.id}`)}>
              {transformCurrencyValue(+row.amount / DEFAULT_MAGIC_VALUE, { currency: '' as 'usdt' })}
            </TableCell>
            <TableCell onClick={() => navigate(`/transaction/${row.id}`)}>
              <CardNumberFormat value={row?.resipient_card?.number} />
            </TableCell>
            <TableCell onClick={() => navigate(`/transaction/${row.id}`)} sx={{ padding: 0, height: '1px' }}>
              <TransactionStatusSwitcher fullWidth status={row.state} />
            </TableCell>
            <TableCell onClick={() => navigate(`/transaction/${row.id}`)}>
              <Typography color="secondary">{parseDate(row.created_at)}</Typography>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
