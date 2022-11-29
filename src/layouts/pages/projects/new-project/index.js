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
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";
import SoftDatePicker from "components/SoftDatePicker";
import SoftEditor from "components/SoftEditor";
import SoftDropzone from "components/SoftDropzone";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function NewProject() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [editorValue, setEditorValue] = useState(
    "<p>Descreva sua live!</p>"
  );

  const handleSetStartDate = (newDate) => setStartDate(newDate);
  const handleSetEndDate = (newDate) => setEndDate(newDate);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={3} mb={4}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={9}>
            <Card sx={{ overflow: "visible" }}>
              <SoftBox p={2} lineHeight={1}>
                <SoftTypography variant="h6" fontWeight="medium">
                  Nova transmissão
                </SoftTypography>
                <Divider />
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Nome da transmissão&nbsp;&nbsp;
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput placeholder="Soft UI Dashboard PRO React" />
                </SoftBox>
                <SoftBox mt={3} mb={2}>
                </SoftBox>
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <SoftBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Descrição&nbsp;&nbsp;
                    </SoftTypography>
                  </SoftBox>
                  <SoftEditor value={editorValue} onChange={setEditorValue} />
                </SoftBox>

                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <SoftBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Turma
                    </SoftTypography>
                  </SoftBox>
                  <SoftSelect
                    defaultValue={[
                      { value: "choice 1", label: "turma 1 CRIODAPRI" },
                      { value: "label two", label: "turma 2 CRIODAPRI" },
                    ]}
                    options={[
                      { value: "choice 1", label: "turma 1 CRIODAPRI" },
                      { value: "label two", label: "turma 2 CRIODAPRI" },
                    ]}
                    isMulti
                  />
                </SoftBox>

                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <SoftBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <SoftBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Data de início
                        </SoftTypography>
                      </SoftBox>
                      <SoftDatePicker value={startDate} onChange={handleSetStartDate} />
                    </SoftBox>
                  </Grid>
                  <Grid item xs={6}>
                    <SoftBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <SoftBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Hora de início
                        </SoftTypography>
                      </SoftBox>
                      <SoftDatePicker value={endDate} onChange={handleSetEndDate} />
                    </SoftBox>
                  </Grid>
                </Grid>
                <SoftBox display="flex" justifyContent="flex-end" mt={3}>
                  <SoftBox mr={1}>
                    <SoftButton color="light">cancelar</SoftButton>
                  </SoftBox>
                  <SoftButton variant="gradient" color="info">
                    criar live
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewProject;
