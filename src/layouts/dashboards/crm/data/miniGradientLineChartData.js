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

const miniGradientLineChartData = {
  visitorsChart: {
    labels: ["Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "Transações",
        color: "primary",
        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
      },
    ],
  },
  incomeChart: {
    labels: ["Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "Faturados",
        color: "primary",
        data: [1000, 1500, 750, 850, 67, 100, 90, 110, 120],
      },
    ],
    customTick: "R$",
  },
};

export default miniGradientLineChartData;
