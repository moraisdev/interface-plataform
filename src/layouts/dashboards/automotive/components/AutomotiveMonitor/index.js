// react-leaflet map components
import { MapContainer, TileLayer } from "react-leaflet";

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";

function AutomotiveMonitor() {
  return (
    <SoftBox bgColor="#f8f9fa" borderRadius="xl" position="relative" variant="gradient">
      <SoftBox p={3}>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={4}>
            <SoftInput
              size="large"
              icon={{ component: "search", direction: "left" }}
              placeholder="Procurar ..."
            />
          </Grid>
          <SoftBox ml={{ xs: 1.5, sm: 3 }}>
                <SoftTypography variant="h5" color="secondary">
                  Procure um profissional proximo a você...
                </SoftTypography>
              </SoftBox>
        </Grid>
        <Divider light />
        <Grid container spacing={3}>
        </Grid>
      </SoftBox>
      <SoftBox width="100%" height="16rem">
        <MapContainer
          center={[38.89, -77.03]}
          zoom={11}
          maxZoom={19}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
        </MapContainer>
      </SoftBox>
    </SoftBox>
  );
}

export default AutomotiveMonitor;
