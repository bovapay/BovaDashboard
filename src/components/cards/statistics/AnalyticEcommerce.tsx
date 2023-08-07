// material-ui
import { Box, Chip, ChipProps, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import { palette, useTheme } from '@mui/system';
import Theme from 'themes/theme';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

interface Props {
  title: string;
  count: string;
  percentage?: number;
  isLoss?: boolean;
  color?: ChipProps['color'];
  extra?: React.ReactNode;
  active?: boolean;
}

const AnalyticEcommerce = ({ color = 'primary', title, count, percentage, isLoss, extra, active }: Props) => {
  const theme = useTheme();
  return (
    <MainCard contentSX={{ p: 2.25 }} sx={active ? { borderColor: 'primary' } : {}}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
        <Grid container alignItems="center">
          <Grid item sx={{ pt: extra ? 0 : 2.25 }}>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
          </Grid>
          {percentage && (
            <Grid item>
              <Chip
                variant="combined"
                color={color}
                icon={
                  <>
                    {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                    {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                  </>
                }
                label={`${percentage}%`}
                sx={{ ml: 1.25, pl: 1 }}
                size="small"
              />
            </Grid>
          )}
        </Grid>
      </Stack>
      {extra && (
        <Box sx={{ pt: 2.25 }}>
          <Typography variant="caption" color="textSecondary">
            {/* <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}> */}
            {extra}
            {/* </Typography> */}
          </Typography>
        </Box>
      )}
    </MainCard>
  );
};

export default AnalyticEcommerce;
