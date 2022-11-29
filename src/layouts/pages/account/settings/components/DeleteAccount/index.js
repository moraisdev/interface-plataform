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
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function DeleteAccount() {
  return (
    <Card id="delete-account">
      <SoftBox p={3} lineHeight={1}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5">Deletar Conta</SoftTypography>
        </SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular">
        Depois de excluir sua conta, não há como voltar atrás. Por favor, tenha certeza.
        </SoftTypography>
      </SoftBox>
      <SoftBox
        pb={3}
        px={3}
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <SoftBox display="flex" alignItems="center" mb={{ xs: 3, sm: 0 }}>
          <Switch />
          <SoftBox ml={2} lineHeight={0}>
            <SoftTypography display="block" variant="button" fontWeight="medium">
              Confirmar
            </SoftTypography>
            <SoftTypography variant="caption" color="text">
              Eu quero deletar minha conta.
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <SoftBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <SoftButton variant="gradient" color="error" sx={{ height: "100%" }}>
              Deletar Conta
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default DeleteAccount;
