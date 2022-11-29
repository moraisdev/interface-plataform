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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Automotive dashboard components
import AutomotiveMonitor from "layouts/dashboards/automotive/components/AutomotiveMonitor";

import { useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import CategoriesList from "examples/Lists/CategoriesList";
import MessageCard from "examples/Cards/MessageCard";
import RankingsList from "examples/Lists/RankingsList";
import Calendar from "examples/Calendar";

// Data
import miniGradientLineChartData from "layouts/dashboards/crm/data/miniGradientLineChartData";
import categoriesListData from "layouts/dashboards/crm/data/categoriesListData";
import rankingsListData from "layouts/dashboards/crm/data/rankingsListData";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";
import Cameras from "layouts/dashboards/smart-home/components/Cameras";
import Post from "layouts/pages/profile/teams/components/Post";

// Images
import pri from "assets/images/pri.jpg";
import prihermes from "assets/images/prihermes.jpg";

function Automotive() {
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
              </Grid>
              <Grid item xs={12}>
                <SoftBox mt={3}>
                  {useMemo(
                    () => (
                      <Calendar
                        header={{ title: "Calendario" }}
                        headerToolbar={false}
                        initialView="dayGridMonth"
                        initialDate="2021-08-10"
                        events={calendarEventsData}
                        selectable
                        editable
                      />
                    ),
                    [calendarEventsData]
                  )}
                </SoftBox>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <BackgroundBlogCard
                    image={pri}
                    title="Olá Aline!"
                    description={
                      <>
                        Acabamos de liberar um documento explicando<br />
                        tudo que você precisa saber para bombar no verão.
                      </>
                    }
                    buttonText="Leia agora"
                    action={{ type: "internal", route: "/dashboards/crm", label: "leia agora" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <CategoriesList title="Aviso" categories={categoriesListData} />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <MessageCard
                    image={prihermes}
                    text="Estamos ao VIVO no Instagram!"
                    button={{ color: "dark", text: "ASSISTIR AGORA!" }}
                    action={{
                      type: "internal",
                      route: "/dashboards/crm",
                      color: "primary",
                      label: "assistir agora!",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>        
      </SoftBox>
      <Grid container spacing={3}>
      <Grid item xs={12} xl={7}>
              <Cameras />
            </Grid>
      </Grid>
      <SoftBox mb={3}>
      <Grid container spacing={3}>

      <Grid item xs={12} lg={8}>
            <Post />
          </Grid>
      </Grid>
      </SoftBox>
        <SoftBox mb={3}>
          <AutomotiveMonitor />
        </SoftBox>
    </DashboardLayout>
  );
}

export default Automotive;
