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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function Header() {
  return (
    <SoftBox display="flex" justifyContent="space-between" alignItems="center">
      <SoftBox>
        <SoftBox mb={1}>
          <SoftTypography variant="h6" fontWeight="medium">
            Detalhes do pedido
          </SoftTypography>
        </SoftBox>
        <SoftTypography component="p" variant="button" fontWeight="regular" color="text">
          Pedido número. <span sx={{ fontWeight: "bold" }}>241342</span> feito em <span sx={{ fontWeight: "bold" }}>12/12/2021</span>
        </SoftTypography>
        <SoftTypography component="p" variant="button" fontWeight="regular" color="text">
          Código: <span sx={{ fontWeight: "bold" }}>32</span>
        </SoftTypography>
      </SoftBox>
      <SoftButton variant="gradient" color="primary">
        nota fiscal
      </SoftButton>
      <SoftButton variant="gradient" color="success">
        aprovar pedido
      </SoftButton>
    </SoftBox>
  );
}

export default Header;
