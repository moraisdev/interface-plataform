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
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftEditor from "components/SoftEditor";
import SoftSelect from "components/SoftSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function ProductInfo() {
  const [editorValue, setEditorValue] = useState(
    `<p>
    Descreva seu produto...
    </p>`
  );

  return (
    <Card sx={{ overflow: "visible" }}>
      <SoftBox p={3}>
        <SoftTypography variant="h5">Informação do Produto</SoftTypography>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField type="text" label="Nome" defaultValue="curso CRIODAPRI" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField type="number" label="Código SKU:" defaultValue={24852} />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Description&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="regular" color="text">
                    (opcional)
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftEditor value={editorValue} onChange={setEditorValue} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Formato
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  defaultValue={{ value: "mentoria", label: "Mentoria" }}
                  options={[
                    { value: "mentoria", label: "Mentoria" },
                  ]}
                />
              </SoftBox>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  categoria
                </SoftTypography>
              </SoftBox>
              <SoftSelect
                defaultValue={{ value: "negocios", label: "Administração e Negócios" }}
                options={[
                  { value: "negocios", label: "Administração e Negócios" },
                ]}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default ProductInfo;
