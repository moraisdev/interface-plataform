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

// Soft UI Dashboard PRO React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import PaymentMethod from "layouts/pages/account/billing/components/PaymentMethod";
import Invoices from "layouts/pages/account/billing/components/Invoices";
import BillingInformation from "layouts/pages/account/billing/components/BillingInformation";
import Transactions from "layouts/pages/account/billing/components/Transactions";

function Billing() {
  return (
    <BaseLayout stickyNavbar>
      <SoftBox mt={4}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </SoftBox>

      </SoftBox>
    </BaseLayout>
  );
}

export default Billing;
