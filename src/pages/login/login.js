import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Input from "../../Input";

const Login = () => {
  const { control, setValue, handleSubmit } = useForm({ mode: "onChange" });
  let history = useNavigate();
  useEffect(() => {
    setValue("email", "admin@prueba.com");
    // eslint-disable-next-line
  }, []);

  const [islogged, setIsLogged] = useState(false);

  const login = (data) => {
    let user = "admin@prueba.com";

    if (user === data.email) {
      history("/dashboard");
    } else {
        setIsLogged(true);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center">
      <Grid container className="h-full">
        <Grid item lg={4} md={4} sm={4} className="flex items-center bg-[#f4f5fa]">
          <div className="mx-[30px] w-full">
            <Grid item lg={12}>
              <h1 className="text-2xl text-center font-bold text-[#9155fd] mb-[30px]">
                Bienvenido!
              </h1>
              <h3 className="text-lg text-center mb-[30px]">
                Para ingresar al sistema debes ingresar el correo electronico
                admin@prueba.com
              </h3>
            </Grid>
            <Input
              label="Correo electronico"
              control={control}
              name="email"
              type="email"
            />
            {islogged && (
              <small className="text-red-500">
                El usuario no esta autorizado para el ingreso al sistema.
              </small>
            )}
            <div className="flex justify-center mt-[20px]">
              <Button
                variant="primary"
                className="w-[80%]"
                width="60%"
                action={handleSubmit(login)}
              >
                Ingresar
              </Button>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={8}
          sm={8}
          md={8}
          className="flex items-center justify-center pl-[40px]"
        >
          <img
            src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/auth-v2-login-illustration-light.c910569c.png"
            alt="muneca"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
