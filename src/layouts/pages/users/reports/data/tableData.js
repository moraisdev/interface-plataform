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
import SoftBadgeDot from "components/SoftBadgeDot";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

const tableData = {
  columns: [
    { name: "nome", align: "left" },
    { name: "curso", align: "left" },
    { name: "review", align: "left" },
    { name: "email", align: "center" },
    { name: "compra", align: "center" },
    { name: "id", align: "center" },
  ],

  rows: [
    {
      nome: "Luisa Fernanda",
      curso: "curso CRIODAPRI",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positiva" />
        </SoftBox>
      ),
      email: "john@user.com",
      compra: "23/04/18",
      id: "43431",
    },
    {
      nome: "Luisa Fernanda",
      curso: "curso CRIODAPRI",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positiva" />
        </SoftBox>
      ),
      email: "john@user.com",
      compra: "23/04/18",
      id: "43431",
    },    {
      nome: "Luisa Fernanda",
      curso: "curso CRIODAPRI",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positiva" />
        </SoftBox>
      ),
      email: "john@user.com",
      compra: "23/04/18",
      id: "43431",
    },    {
      nome: "Luisa Fernanda",
      curso: "curso CRIODAPRI",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positiva" />
        </SoftBox>
      ),
      email: "john@user.com",
      compra: "23/04/18",
      id: "43431",
    },    {
      nome: "Luisa Fernanda",
      curso: "curso CRIODAPRI",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positiva" />
        </SoftBox>
      ),
      email: "john@user.com",
      compra: "23/04/18",
      id: "43431",
    },    {
      nome: "Luisa Fernanda",
      curso: "curso CRIODAPRI",
      review: (
        <SoftBox ml={-1.325}>
          <SoftBadgeDot size="xs" badgeContent="positiva" />
        </SoftBox>
      ),
      email: "john@user.com",
      compra: "23/04/18",
      id: "43431",
    },
  ],
};

export default tableData;
