import { useSelector } from 'react-redux';

import { DashboardLayout } from "../layout/DashboardLayout"
import { AgendaPage } from "./AgendaPage"
import { CalendarPage } from './CalendarPage';
import { ChatPage } from './ChatPage';
import { TranslatorPage } from './TranslatorPage';


export const DashboardPage = () => {

  const  {selectedIndex} = useSelector( state => state.dashboard );

  const renderSection = (index) => {
    switch(index) {
      case 0:
        return <AgendaPage/>;
      case 1:
        return <CalendarPage/>;
      case 2:
        return <ChatPage/>;
      case 3:
        return <TranslatorPage/>;
      case 4:
        return '';
      default:
        return <AgendaPage/>;
    }
  }

  return (
    <DashboardLayout>
     
      {renderSection( selectedIndex )}

    </DashboardLayout>
  )
}
