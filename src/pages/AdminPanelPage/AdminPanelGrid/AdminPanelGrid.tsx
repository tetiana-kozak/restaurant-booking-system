import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Sidebar from 'shared/mainSidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from "react";



type Props = {}

const AdminPanelGrid = (props: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Grid container spacing={0} className="bg">
      <Grid item xs={isSidebarOpen ? 2 : false}>
        <Sidebar onToggle={handleToggleSidebar} />
      </Grid>
      <Grid item xs={isSidebarOpen ? 10 : 11}>
        <Container maxWidth='xl'>
          <Outlet />
        </Container>
      </Grid>
    </Grid>
  )
}

export default AdminPanelGrid;