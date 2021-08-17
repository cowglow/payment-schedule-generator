import { ChangeEvent, SyntheticEvent, useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

interface GeneratorFormProps {
  onSubmit?: (data: GeneratorFormData) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

export const GeneratorForm: React.FC<GeneratorFormProps> = ({ onSubmit }) => {
  const classes = useStyles();
  const [employeeId, setEmployeeId] = useState("04-1-2019");
  const [monthDuration, setMonthDuration] = useState(6);
  const [startDate, dateChangeHandler] = useState<any>(new Date());

  const processData = (event: SyntheticEvent) => {
    if (onSubmit) {
      onSubmit({
        employeeId,
        monthDuration,
        startDate,
      });
    }
  };

  const employeeIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setEmployeeId(value);
  };

  const monthCountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setMonthDuration(parseInt(value));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="employeeId">Employee Id</InputLabel>
          <Input
            id="employeeId"
            placeholder="xx-x-xxxx"
            value={employeeId}
            onChange={employeeIdChangeHandler}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              label="Start Date"
              id="startDate"
              value={startDate}
              onChange={dateChangeHandler}
              format="dd/MM/yyyy"
              disablePast
            />
          </MuiPickersUtilsProvider>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="monthCount">Length</InputLabel>
          <Input
            id="monthCount"
            type="number"
            value={monthDuration}
            onChange={monthCountChangeHandler}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={processData}
        >
          Generate Schedule
        </Button>
      </CardActions>
    </Card>
  );
};
