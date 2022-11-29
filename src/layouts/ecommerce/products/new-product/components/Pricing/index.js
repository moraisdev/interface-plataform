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
import SoftSelect from "components/SoftSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Pricing() {
  return (
    <SoftBox>
      <SoftTypography variant="h5">Oferta</SoftTypography>
      <SoftBox mt={3}>
        <Grid container spacing={3}>
      <Grid item xs={12} sm={1.5}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Moeda
              </SoftTypography>
            </SoftBox>
            <SoftSelect
              defaultValue={{ value: "real", label: "R$" }}
              options={[
                { value: "real", label: "R$" },
              ]}
            />
          </Grid>
          </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Valor" placeholder="0,00" />
          </Grid>

          <Grid item xs={12} sm={5}>
            <FormField type="text" label="SKU" placeholder="71283476591" />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mt={1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Project Tags
              </SoftTypography>
            </SoftBox>
            <SoftSelect
              defaultValue={[
                { value: "in stock", label: "In Stock" },
                { value: "out of stock", label: "Out of Stock" },
              ]}
              options={[
                { value: "black friday", label: "Black Friday" },
                { value: "expired", label: "Expired", isDisabled: true },
                { value: "out of stock", label: "Out of Stock" },
                { value: "in stock", label: "In Stock" },
                { value: "sale", label: "Sale" },
              ]}
              size="large"
              isMulti
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default Pricing;
