import { useState } from "react";
import Container from "@material-ui/core/Container";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { GeneratorForm } from "./components/GeneratorForm/GeneratorForm";
import { ScheduleTable } from "./components/ScheduleTable/ScheduleTable";
import { getMonthlyPayments } from "./lib/get-monthly-payments/get-monthly-payments";

const App = () => {
  const [id, setId] = useState<string | undefined>();
  const [duration, setDuration] = useState(0);
  const [paymentSchedule, setPaymentSchedule] = useState<
    Payments | undefined
  >();

  const generateSchedule = (input: GeneratorFormData) => {
    const { employeeId, startDate, monthDuration } = input;
    const payments = getMonthlyPayments(startDate, monthDuration);

    setId(employeeId);
    setDuration(monthDuration);
    setPaymentSchedule(payments);
  };

  return (
    <AppLayout>
      <Container maxWidth="sm">
        <GeneratorForm onSubmit={generateSchedule} />
        <ScheduleTable
          employeeId={id}
          duration={duration}
          data={paymentSchedule}
        />
      </Container>
    </AppLayout>
  );
};

export default App;
