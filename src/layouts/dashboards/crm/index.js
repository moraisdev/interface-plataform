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
import { useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import CategoriesList from "examples/Lists/CategoriesList";
import MessageCard from "examples/Cards/MessageCard";
import RankingsList from "examples/Lists/RankingsList";
import Calendar from "examples/Calendar";
import SoftButton from "components/SoftButton";
import Icon from "@mui/material/Icon";

// Data
import defaultLineChartData from "layouts/ecommerce/overview/data/defaultLineChartData";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import SoftBadgeDot from "components/SoftBadgeDot";
import Tooltip from "@mui/material/Tooltip";

import miniGradientLineChartData from "layouts/dashboards/crm/data/miniGradientLineChartData";
import categoriesListData from "layouts/dashboards/crm/data/categoriesListData";
import rankingsListData from "layouts/dashboards/crm/data/rankingsListData";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";

// Images
import ivancik from "assets/images/ivancik.jpg";
import kalVisualsSquare from "assets/images/kal-visuals-square.jpg";
import ChannelsChart from "layouts/ecommerce/overview/components/ChannelsChart";

function CRM() {
  const { visitorsChart, incomeChart } = miniGradientLineChartData;
  const { transactionsData, revenueData } = rankingsListData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                  <MiniGradientLineChart
                    title="Total Faturado"
                    description={
                      <SoftTypography variant="h5" fontWeight="bold">
                        R$40.832{" "}
                        <SoftTypography variant="button" color="success" fontWeight="bold">
                          +90%
                        </SoftTypography>
                      </SoftTypography>
                    }
                    chart={incomeChart}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MiniGradientLineChart
                    title="Total Líquido"
                    description={
                      <SoftTypography variant="h5" fontWeight="bold">
                        R$35.800{" "}
                      </SoftTypography>
                    }
                    chart={incomeChart}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MiniGradientLineChart
                    title="Transações"
                    description={
                      <SoftTypography variant="h5" fontWeight="bold">
                        50{" "}
                        <SoftTypography variant="button" color="success" fontWeight="bold">
                          +55%
                        </SoftTypography>
                      </SoftTypography>
                    }
                    chart={visitorsChart}
                  />
                </Grid>
                <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <ChannelsChart />
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
            <DefaultLineChart
                title="Receita Diária"
                description={
                  <SoftBox display="flex" justifyContent="space-between">
                    <SoftBox display="flex" ml={-1}>
                      <SoftBadgeDot color="info" size="sm" badgeContent="Curso CRIODAPRI" />
                      <SoftBadgeDot color="dark" size="sm" badgeContent="Curso ESTÉTICALUCRATIVA" />
                    </SoftBox>
                    <SoftBox mt={-5.25} mr={-1}>
                      <Tooltip title="Total de vendas pagas" placement="left" arrow>
                        <SoftButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          circular
                          iconOnly
                        >
                          <Icon>priority_high</Icon>
                        </SoftButton>
                      </Tooltip>
                    </SoftBox>
                  </SoftBox>
                }
                chart={defaultLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <Grid container spacing={3}>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RankingsList
              title="Novas Vendas"
              date="25 Nov - 27 Nov"
              rankings={transactionsData}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default CRM;
