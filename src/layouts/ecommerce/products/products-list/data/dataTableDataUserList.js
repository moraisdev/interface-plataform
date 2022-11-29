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

/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components
import SoftBadge from "components/SoftBadge";

// ProductsList page components
import ProductCell from "layouts/ecommerce/products/products-list/components/ProductCell";
import ActionCell from "layouts/ecommerce/products/products-list/components/ActionCell";

// Images
import adidasHoodie from "assets/images/ecommerce/adidas-hoodie.jpeg";
import macBookPro from "assets/images/ecommerce/macbook-pro.jpeg";
import metroChair from "assets/images/ecommerce/metro-chair.jpeg";
import alchimiaChair from "assets/images/ecommerce/alchimia-chair.jpeg";
import fendiCoat from "assets/images/ecommerce/fendi-coat.jpeg";
import offWhiteJacket from "assets/images/ecommerce/off-white-jacket.jpeg";
import yohjiYamamoto from "assets/images/ecommerce/yohji-yamamoto.jpeg";
import mcqueenShirt from "assets/images/ecommerce/mcqueen-shirt.jpeg";
import yellowChair from "assets/images/ecommerce/yellow-chair.jpeg";
import heronTshirt from "assets/images/ecommerce/heron-tshirt.jpeg";
import livingChair from "assets/images/ecommerce/living-chair.jpeg";
import orangeSofa from "assets/images/ecommerce/orange-sofa.jpeg";
import burberry from "assets/images/ecommerce/burberry.jpeg";
import dgSkirt from "assets/images/ecommerce/d&g-skirt.jpeg";
import undercover from "assets/images/ecommerce/undercover.jpeg";

// Badges
const outOfStock = (
  <SoftBadge variant="contained" color="error" size="xs" badgeContent="desativado" container />
);
const inStock = (
  <SoftBadge variant="contained" color="success" size="xs" badgeContent="ativo" container />
);

const dataTableDataUserList = {
  columns: [
    {
      Header: "Nome",
      accessor: "product",
      width: "40%",
    },
    { Header: "Último acesso", accessor: "category" },
    { Header: "Bloqueado no anti-pirataria", accessor: "price" },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ value }) => (value === "in stock" ? inStock : outOfStock),
    },
    { Header: "Ação", accessor: "action" },
  ],

  rows: [
    {
      product: "Larissa Ferreira",
      category: "10/02/2022",
      price: "SIM",
      status: "out of stock",
      action: <ActionCell />,
    },
    {
        product: "Larissa Ferreira",
        category: "10/02/2022",
        price: "SIM",
        status: "out of stock",
        action: <ActionCell />,
      },
    {
        product: "Larissa Ferreira",
        category: "10/02/2022",
        price: "NÃO",
        status: "in stock",
        action: <ActionCell />,
      },
  ],
};

export default dataTableDataUserList;
