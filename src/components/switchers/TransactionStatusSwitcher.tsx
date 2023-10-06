import { Chip, SxProps } from '@mui/material';
import React from 'react';

interface Props {
  fullWidth?: boolean;
  status: string;
}

export default function TransactionStatusSwitcher({ status, fullWidth }: Props) {
  const sx: SxProps = {
    width: fullWidth ? '100%' : 'inherit',
    height: fullWidth ? '100%' : 'initial'
  };

  switch (status) {
    case 'processing':
      return <Chip color="warning" label="В обработке" size="small" variant="light" sx={sx} />;
    case 'created':
      return <Chip color="warning" label="Создана" size="small" variant="light" sx={sx} />;
    case 'reviewing':
      return <Chip color="warning" label="Оспаривается" size="small" variant="light" sx={sx} />;
    case 'repeated_reviewing':
      return <Chip color="warning" label="Оспаривается повторно" size="small" variant="light" sx={sx} />;
    case 'paid':
      return <Chip color="info" label="Оплачена" size="small" variant="light" sx={sx} />;
    case 'failed':
      return <Chip color="error" label="Не зачислена" size="small" variant="light" sx={sx} />;
    case 'closed_failed':
      return <Chip color="error" label="Спор отклонён" size="small" variant="light" sx={sx} />;
    case 'repeated_closed_failed':
      return <Chip color="error" label="Повторный cпор отклонён" size="small" variant="light" sx={sx} />;
    case 'successed':
      return <Chip color="success" label="Зачислена" size="small" variant="light" sx={sx} />;
    case 'accepted_successed':
      return <Chip color="success" label="Спор принят" size="small" variant="light" sx={sx} />;
    case 'repeated_accepted_successed':
      return <Chip color="success" label="Повторный спор принят" size="small" variant="light" sx={sx} />;
    case 'confirmed':
      return <Chip color="info" label="Оплачена" size="small" variant="light" sx={sx} />;
    default:
      return <></>;
  }
}
