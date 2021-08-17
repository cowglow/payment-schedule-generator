type GeneratorFormData = {
  employeeId: string;
  startDate: Date;
  monthDuration: number;
};

type Payments = {
  salary: Date[];
  bonuses: (string | Date)[];
};
