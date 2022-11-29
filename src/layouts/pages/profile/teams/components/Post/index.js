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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftAvatar from "components/SoftAvatar";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import bruceMars from "assets/images/bruce-mars.jpg";
import pricurso from "assets/images/pricurso.jpg";


function Post() {
  const { borderWidth, borderColor } = borders;

  const [comments] = useState([
    {
      image: team1,
      name: "Larissa Fernanda",
      text: "Amei!",
    },
    {
      image: team5,
      name: "jessica stones",
      text: "Muito bom!",
    },
  ]);

  const renderComments = comments.map(({ image, name, text, like, share }, key) => (
    <SoftBox key={name} display="flex" mt={key === 0 ? 0 : 3}>
      <SoftBox flexShrink={0}>
        <SoftAvatar src={image} alt={name} />
      </SoftBox>
      <SoftBox flexGrow={1} ml={2}>
        <SoftTypography variant="h5" fontWeight="medium" textTransform="capitalize">
          {name}
        </SoftTypography>
        <SoftBox mt={1} mb={2} lineHeight={0.75}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            {text}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  ));

  return (
    <Card>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", sm: "row" }}
        borderBottom={`${borderWidth[1]} solid ${borderColor}`}
        py={2}
        px={3}
      >
        <SoftAvatar src={team4} alt="profile-image" variant="rounded" />
        <SoftBox mx={2} lineHeight={1}>
          <SoftTypography component="a" href="#" variant="button" fontWeight="regular">
            Vinicius
          </SoftTypography>
          <SoftTypography component="div" variant="button" color="text" fontWeight="regular">
            2 dias atrás
          </SoftTypography>
        </SoftBox>
        <SoftBox ml={{ xs: 0, sm: "auto" }} mt={{ xs: 2, sm: 0 }}>
        </SoftBox>
      </SoftBox>
      <SoftBox p={3}>
        <SoftBox mb={3}>
          <SoftTypography variant="body2" color="text">
          5ª TURMA #DIÁSTASEPH
          </SoftTypography>
        </SoftBox>
        <SoftBox component="img" src={pricurso} shadow="lg" borderRadius="xl" width="100%" />
        <SoftBox mt={3} mb={1} px={1}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6}>
              <SoftBox display="flex" alignItems="center">
                <SoftBox display="flex" alignItems="center" mr={2}>
                  <SoftTypography component="a" href="#" variant="body2" color="text">
                    <Icon>thumb_up</Icon>&nbsp;
                  </SoftTypography>
                  <SoftTypography variant="button" fontWeight="regular" color="text">
                    150
                  </SoftTypography>
                </SoftBox>
                <SoftBox display="flex" alignItems="center" mr={2}>
                  <SoftTypography component="a" href="#" variant="body2" color="text">
                    <Icon>mode_comment</Icon>&nbsp;
                  </SoftTypography>
                  <SoftTypography variant="button" fontWeight="regular" color="text">
                    36
                  </SoftTypography>
                </SoftBox>
                <SoftBox display="flex" alignItems="center" mr={2}>
                </SoftBox>
              </SoftBox>
            </Grid>

          </Grid>
          <Divider />
          {renderComments}
          <SoftBox display="flex" alignItems="center" mt={3}>
            <SoftBox flexShrink={0} mr={2}>
              <SoftAvatar src={team4} alt="profile picture" />
            </SoftBox>
            <SoftBox flexGrow={1}>
              <SoftInput placeholder="Escreva um comentário" multiline />
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Post;
