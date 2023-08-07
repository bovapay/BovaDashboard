import { Grid, Typography } from '@mui/material';

import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { Dispatch, SetStateAction } from 'react';
import { useGetUserQuery } from 'store/api/user/user.api';
import { transformCurrencyValue } from 'utils/transformCurrencyValue';

const Accounts = ({ selectedCurrency, setCurrency }: { selectedCurrency: string; setCurrency: Dispatch<SetStateAction<string>> }) => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Счета</Typography>
      </Grid>
      {data?.p2p_balances.map((p2pRub) => (
        <Grid item xs={12} sm={6} lg={3}>
          <AnalyticEcommerce
            // active={selectedCurrency === p2pRub.currency}
            title={`P2P (${p2pRub.currency.toUpperCase()})`}
            count={p2pRub?.amount ? transformCurrencyValue(+p2pRub?.amount, { currency: p2pRub.currency as 'rub' }) : 'Нет данных'}
          />
        </Grid>
      ))}
    </>
  );
};
export default Accounts;
