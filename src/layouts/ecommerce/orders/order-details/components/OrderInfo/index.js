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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
const orderImage =
  "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

function OrderInfo() {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <SoftBox display="flex" alignItems="center">
          <SoftBox mr={2}>
            <SoftAvatar variant="rounded" size="xxl" src={orderImage} alt="Gold Glasses" />
          </SoftBox>
          <SoftBox lineHeight={1}>
            <SoftTypography variant="h6" fontWeight="medium">
            Curso CRIODAPRI
            </SoftTypography>
            <SoftBox mb={2}>
            </SoftBox>
            <SoftBadge
              variant="gradient"
              color="success"
              size="xs"
              badgeContent="pago"
              container
            />
          </SoftBox>
        </SoftBox>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
