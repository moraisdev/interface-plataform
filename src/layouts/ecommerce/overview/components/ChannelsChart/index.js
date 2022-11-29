/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftBadgeDot from "components/SoftBadgeDot";
import PieChart from "examples/Charts/PieChart";

// Data
import channelChartData from "layouts/ecommerce/overview/components/ChannelsChart/data";

function ChannelsChart() {
  return (
    <Card sx={{ overflow: "visible" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6">Transações por forma de pagamento</SoftTypography>
        <Tooltip title="* Os valores expressados neste gráfico são referentes a todos as compras" placement="bottom" arrow>
          <SoftButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </SoftButton>
        </Tooltip>
      </SoftBox>
      <SoftBox p={2} mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart chart={channelChartData} height="100%" />
          </Grid>
          <Grid item xs={5}>
            <SoftBox px={1}>
              <SoftBox mb={0.5}>
                <SoftBadgeDot color="info" size="sm" badgeContent="Cartão" />
              </SoftBox>
              <SoftBox mb={0.5}>
                <SoftBadgeDot color="primary" size="sm" badgeContent="Boleto pago" />
              </SoftBox>
              <SoftBox mb={0.5}>
                <SoftBadgeDot color="dark" size="sm" badgeContent="Pix pago" />
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox
        pt={4}
        pb={2}
        px={2}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        mt="auto"
      >
      </SoftBox>
    </Card>
  );
}

export default ChannelsChart;
