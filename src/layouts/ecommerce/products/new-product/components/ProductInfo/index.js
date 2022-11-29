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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftEditor from "components/SoftEditor";
import SoftSelect from "components/SoftSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function ProductInfo() {
  const [editorValue, setEditorValue] = useState(
    "Descreva seu produto..."
  );

  return (
    <SoftBox>
      <SoftTypography variant="h5">Informações do Produto</SoftTypography>
      <SoftBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="nome do curso:" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Código SKU:" />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Descrição:&nbsp;&nbsp;
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
                  Formato:
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
                Categoria
              </SoftTypography>
            </SoftBox>
            <SoftSelect
              defaultValue={{ value: "administração", label: "Administração e Negócios" }}
              options={[
                { value: "administração", label: "Administração e Negócios" },
              ]}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default ProductInfo;
