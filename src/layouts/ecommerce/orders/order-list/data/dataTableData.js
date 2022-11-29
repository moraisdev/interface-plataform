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
// ProductsList page components
import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import ivana from "assets/images/ivana-squares.jpg";

const dataTableData = {
  columns: [
        {
      Header: "produto",
      accessor: "product",
      Cell: ({ value }) => {
        const [name, data] = value;

        return (
          <DefaultCell
            value={typeof value === "string" ? value : name}
            suffix={data.suffix || false}
          />
        );
      },
    },
    {
      Header: "comprador",
      accessor: "customer",
      Cell: ({ value: [name] }) => (
        <CustomerCell name={name} />
      ),
    },
    { Header: "valor", accessor: "revenue", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Forma de Pagamento", accessor: "id" },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ value }) => {
        let status;

        if (value === "pago") {
          status = <StatusCell icon="done" color="success" status="Pago" />;
        } else if (value === "reembolsado") {
          status = <StatusCell icon="replay" color="dark" status="Reembolsado" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Cancelado" />;
        }

        return status;
      },
    },
    {
      Header: "data da compra",
      accessor: "date",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },


  ],

  rows: [
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "reembolsado",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "pago",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "pago",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "close",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "reembolsado",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "close",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "pago",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "pago",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "pago",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "pago",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
    {
      product: "curso CRIODAPRI",
      customer: ["Larissa Fernanda", { image: team2 }],
      revenue: "R$$140,20",
      id: "Boleto",
      status: "pago",
      date: "21-11-2022 - 21H57",
      revenue: "R$140,20",
    },
  ],
};

export default dataTableData;
