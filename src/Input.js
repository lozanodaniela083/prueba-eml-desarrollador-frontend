import { TextField } from "@mui/material";
import { Fragment } from "react";
import { Controller } from "react-hook-form";

const Input = ({ control, name, label, type, rules, className }) => {
  const InputComponet = (props) => {
    const {field, formState} = props;
    const {errors} = formState;

    return (
      <Fragment>
        <TextField
            className={className}
          id="outlined-basic"
          label={label}
          variant="outlined"
          type={type}
          value={field.value || ''}
          onChange={(e) => field.onChange(e)}
          style={{ width: "100%" }}
          margin="dense"
        />
        {errors[name] && (
            <span className="text-red-500 font-bold">{errors[name].message}</span>
        )}
      </Fragment>
    );
  };

  return <Controller control={control} name={name} render={InputComponet} rules={rules}/>;
};

export default Input;
