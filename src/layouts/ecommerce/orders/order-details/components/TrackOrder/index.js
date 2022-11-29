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

// Soft UI Dashboard PRO React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <>
      <SoftTypography variant="h6" fontWeight="medium">
      Acompanhar Pedido
      </SoftTypography>
      <SoftBox mt={2}>
        <TimelineItem
          color="secondary"
          icon="notifications"
          title="Pedido recebido"
          dateTime="22 NOV 7H20"
        />
        <TimelineItem
          color="secondary"
          icon="inventory_2"
          title="Pedido processado id #32"
          dateTime="22 NOV 7H20"
        />
        <TimelineItem
          color="success"
          icon="done"
          title="Pedido aprovado"
          dateTime="22 NOV 7H21"
        />
      </SoftBox>
    </>
  );
}

export default OrdersOverview;
