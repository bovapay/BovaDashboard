import React from 'react';
import { PatternFormat } from 'react-number-format';
import { Typography } from '@mui/material';

export default function CardNumberFormat({ value }) {
  return (
    <>
      <Typography variant="caption" color="primary" fontWeight={500}>
        [Карта]&nbsp;
      </Typography>
      <PatternFormat displayType="text" format="#### ##** **** ####" mask="_" defaultValue={value} />
    </>
  );
}
