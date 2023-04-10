import { IconButton } from "@mui/material"
import { AddOutlined } from '@mui/icons-material';
import { DashboardLayout } from "../layout/DashboardLayout"
import { AgendaPage } from "./AgendaPage"
import { NoteView, NothingSelectedView } from '../views';

export const DashboardPage = () => {
  return (
    <DashboardLayout>
     
      <AgendaPage />

    </DashboardLayout>
  )
}
