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

// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const profilesListData = [
  {
    image: kal,
    name: "Fernanda Maria",
    description: "Estou adorando a aula..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
    },
  },
  {
    image: marie,
    name: "Ana Maria",
    description: "Estou adorando a aula..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
    },
  },
  {
    image: ivana,
    name: "Ivanna",
    description: "Estou adorando a aula..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
    },
  },
];

export default profilesListData;
