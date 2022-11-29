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
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";

// Soft UI Dashboard PRO React context
import { useSoftUIController } from "context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <SoftBox lineHeight={1}>
          <SoftTypography variant="h6" color="white">
            Precisa de Ajuda?
          </SoftTypography>
          <SoftBox mb={1.825} mt={-1}>
            <SoftTypography variant="caption" color="white" fontWeight="medium">
              Chame o suporte
            </SoftTypography>
          </SoftBox>
          <SoftButton
            component={Link}
            href=""
            target="_blank"
            rel="noreferrer"
            size="small"
            color="white"
            fullWidth
          >
            Whatsapp
          </SoftButton>
        </SoftBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
