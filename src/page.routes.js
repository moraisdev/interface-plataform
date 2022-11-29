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

/** 
  All of the routes for the page layout of Soft UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the DefaultNavbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `name` key is used for the name of the route on the DefaultNavbar.
  3. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  4. The `icon` key is used for the icon of the route on the DefaultNavbar, you have to add a node.
  5. The `collapse` key is used for making a collapsible item on the DefaultNavbar that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  6. The `route` key is used to store the route location which is used for the react router.
  7. The `href` key is used to store the external links location.
*/

// Soft UI Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";
import SpaceShip from "examples/Icons/SpaceShip";

const pageRoutes = [
  {
    name: "Dashboards",
    key: "dashboards",
    icon: <Shop size="12px" color="white" />,
    collapse: [
      {
        name: "Dashboard User",
        key: "automotive",
        route: "/dashboards/automotive",
      },
      { name: "Dashboard ADM", key: "crm", route: "/dashboards/crm" },
    ],
  },
  {
    name: "ADM",
    key: "adm",
    icon: <Shop size="12px" color="white" />,
    collapse: [
      {
        name: "Dashboard User",
        key: "automotive",
        route: "/dashboards/automotive",
      },
      { name: "Dashboard ADM", key: "crm", route: "/dashboards/crm" },
    ],
  },
  {
    name: "Users",
    key: "users",
    icon: <Office size="12px" color="white" />,
    collapse: [
      {
        name: "Reports",
        key: "reports",
        route: "/pages/users/reports",
      },
      {
        name: "Novo Usuário",
        key: "new-user",
        route: "/pages/users/new-user",
      },
    ],
  },
  {
    name: "Extra",
    key: "extra",
    icon: <Document size="12px" color="white" />,
    collapse: [
    ],
  },
  {
    name: "Account",
    key: "account",
    icon: <CustomerSupport size="12px" color="white" />,
    collapse: [
      {
        name: "Settings",
        key: "settings",
        route: "/pages/account/settings",
      },
      {
        name: "Billing",
        key: "billing",
        route: "/pages/account/billing",
      },

      {
        name: "Security",
        key: "security",
        route: "/pages/account/security",
      },
    ],
  },
  {
    name: "Projects",
    key: "projects",
    icon: <Cube size="12px" color="white" />,
    collapse: [
      {
        name: "General",
        key: "general",
        route: "/pages/projects/general",
      },
      {
        name: "Timeline",
        key: "timeline",
        route: "/pages/projects/timeline",
      },
      {
        name: "New Project",
        key: "new-project",
        route: "/pages/projects/new-project",
      },
    ],
  },
  {
    name: "Orders",
    key: "orders",
    icon: <Document size="12px" color="white" />,
    collapse: [
      {
        name: "Pedidos ADM",
        key: "order-list",
        route: "/ecommerce/orders/order-list",
      },
      {
        name: "Detalhes do pedido ADM",
        key: "order-details",
        route: "/ecommerce/orders/order-details",
      },
    ],
  },
  {
    name: "General",
    key: "general",
    icon: <Cube size="12px" color="white" />,
    collapse: [
    ],
  },
  {
    name: "Sign In",
    key: "sign-in",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-in/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-in/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-in/illustration",
      },
    ],
  },
  {
    name: "Sign Up",
    key: "sign-up",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-up/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-up/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-up/illustration",
      },
    ],
  },
  {
    name: "Reset Password",
    key: "reset-password",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/reset-password/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/reset-password/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/reset-password/illustration",
      },
    ],
  },
  {
    name: "Lock",
    key: "lock",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/lock/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/lock/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/lock/illustration",
      },
    ],
  },
  {
    name: "2-Step Verification",
    key: "2-step-verification",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/verification/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/verification/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/verification/illustration",
      },
    ],
  },
  {
    name: "Error",
    key: "error",
    collapse: [
      {
        name: "Error 404",
        key: "error-404",
        route: "/authentication/error/404",
      },
      {
        name: "Error 500",
        key: "error-500",
        route: "/authentication/error/500",
      },
    ],
  },

];

export default pageRoutes;
