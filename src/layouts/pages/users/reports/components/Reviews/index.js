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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftProgress from "components/SoftProgress";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function Reviews() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Reviews
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={2} px={2}>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <SoftBox component="li" w="100%" py={1} mb={0.5}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                Reviews positiva
              </SoftTypography>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                80%
              </SoftTypography>
            </SoftBox>
            <SoftProgress variant="gradient" value={80} />
          </SoftBox>
          <SoftBox component="li" w="100%" py={1} mb={0.5}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                Reviews neutras
              </SoftTypography>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                17%
              </SoftTypography>
            </SoftBox>
            <SoftProgress variant="gradient" color="dark" value={17} />
          </SoftBox>
          <SoftBox component="li" w="100%" py={1} mb={0.5}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                reviews negativas
              </SoftTypography>
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                3%
              </SoftTypography>
            </SoftBox>
            <SoftProgress variant="gradient" color="error" value={3} />
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <SoftBox pb={2} px={2} display="flex" flexDirection={{ xs: "column", sm: "row" }} mt="auto">
        <SoftBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
        </SoftBox>
        <SoftBox width={{ xs: "100%", sm: "40%" }} textAlign="right" mt={{ xs: 2, sm: "auto" }}>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Reviews;
