import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


dayjs.locale('uk');

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
      <style>
          {`
            .MuiPickersCalendar-week {
              margin-bottom: 16px; // Збільште відступ між тижнями за потребою
            }
          `}
        </style>
        <DateCalendar
          referenceDate={dayjs()}
          views={['year', 'month', 'day']}
          className="w-665"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};