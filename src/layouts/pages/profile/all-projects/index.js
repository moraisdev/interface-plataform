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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import prihermes from "assets/images/prihermes.jpg";

// Project page components
import Header from "layouts/pages/profile/components/Header";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAsana from "assets/images/small-logos/logo-asana.svg";
import logoInvision from "assets/images/small-logos/logo-invision.svg";

function AllProjects() {
  // ComplexProjectCard dropdown menu state
  const [slackBotMenu, setSlackBotMenu] = useState(null);
  const [premiumSupportMenu, setPremiumSupportMenu] = useState(null);
  const [designToolsMenu, setDesignToolsMenu] = useState(null);
  const [lookingGreatMenu, setLookingGreatMenu] = useState(null);
  const [developerFirstMenu, setDeveloperFirstMenu] = useState(null);

  // TeamProfileCard dropdown menu handlers
  const openSlackBotMenu = (event) => setSlackBotMenu(event.currentTarget);
  const closeSlackBotMenu = () => setSlackBotMenu(null);
  const openPremiumSupportMenu = (event) => setPremiumSupportMenu(event.currentTarget);
  const closePremiumSupportMenu = () => setPremiumSupportMenu(null);
  const openDesignToolsMenu = (event) => setDesignToolsMenu(event.currentTarget);
  const closeDesignToolsMenu = () => setDesignToolsMenu(null);
  const openLookingGreatMenu = (event) => setLookingGreatMenu(event.currentTarget);
  const closeLookingGreatMenu = () => setLookingGreatMenu(null);
  const openDeveloperFirstMenu = (event) => setDeveloperFirstMenu(event.currentTarget);
  const closeDeveloperFirstMenu = () => setDeveloperFirstMenu(null);

  // Dropdown menu template for the ComplexProjectCard
  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
    >
      <MenuItem onClick={close}>Baixar</MenuItem>
      <MenuItem onClick={close}>Mudar Turma</MenuItem>
      <MenuItem onClick={close}>Excluir</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <SoftBox pt={5} pb={2}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <SoftBox mb={1}>
              <SoftTypography variant="h5">Meus arquivos</SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
        <SoftBox mt={{ xs: 1, lg: 3 }} mb={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                image={prihermes}
                title="Ebook - Como fazer lipo"
                description="Nesse ebook você vai aprender como fazer lipo"
                dateTime="02.03.22"
                dropdown={{
                  action: openSlackBotMenu,
                  menu: renderMenu(slackBotMenu, closeSlackBotMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                image={prihermes}
                title="Ebook - Como fazer lipo"
                description="Nesse ebook você vai aprender como fazer lipo"
                dateTime="22.11.21"
                dropdown={{
                  action: openPremiumSupportMenu,
                  menu: renderMenu(premiumSupportMenu, closePremiumSupportMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                image={prihermes}
                title="Ebook - Como fazer lipo"
                description="Nesse ebook você vai aprender como fazer lipo"
                dateTime="06.03.20"
                dropdown={{
                  action: openDesignToolsMenu,
                  menu: renderMenu(designToolsMenu, closeDesignToolsMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                image={prihermes}
                title="Ebook - Como fazer lipo"
                description="Nesse ebook você vai aprender como fazer lipo"
                dateTime="14.03.24"
                dropdown={{
                  action: openLookingGreatMenu,
                  menu: renderMenu(lookingGreatMenu, closeLookingGreatMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                image={prihermes}
                title="Ebook - Como fazer lipo"
                description="Nesse ebook você vai aprender como fazer lipo"
                dateTime="16.01.22"
                dropdown={{
                  action: openDeveloperFirstMenu,
                  menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <PlaceholderCard title={{ variant: "h5", text: "Add Novo Arquivo" }} />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AllProjects;
