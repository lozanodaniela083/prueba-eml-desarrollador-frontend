import { Dialog, Transition } from "@headlessui/react";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { Fragment, useEffect } from "react";
import Input from "./Input";
/** Components */
import useComponents from "./components";

const EditUser = ({show, closeModal, saveData, data_edit}) => {
  /** Components */
  const { Button } = useComponents();
  const { control, handleSubmit, isValid, setValue } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setValue("name", data_edit.name)
    setValue("last_name", data_edit.last_name)
    setValue("phone", data_edit.phone)
    setValue("email", data_edit.email)
    setValue("id", data_edit.id)
  }, [data_edit])

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-[30px] text-center sm:mt-0 w-full sm:mx-4 sm:text-left">
                      <Dialog.Title
                        as="h2"
                        className="text-xl font-medium mb-[20px] leading-6 text-gray-900"
                      >
                        Editar Usuario {data_edit.name} {data_edit.last_name}
                      </Dialog.Title>
                      <Grid container>
                        <Grid item lg={12} sm={12} xs={12}>
                          <Input
                            type="text"
                            label="Nombres"
                            name="name"
                            control={control}
                            rules={{
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                              validate: {
                                onlyLetters(text) {
                                  let regex = /^[a-zA-Z\s]*$/;
                                  if (!regex.test(text)) {
                                    setValue("name", text.slice(0, -1));
                                  }
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12}>
                          <Input
                            type="text"
                            label="Apellidos"
                            name="last_name"
                            control={control}
                            rules={{
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                              validate: {
                                onlyLetters(text) {
                                  let regex = /^[a-zA-Z\s]*$/;
                                  if (!regex.test(text)) {
                                    setValue("last_name", text.slice(0, -1));
                                  }
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12}>
                          <Input
                            type="text"
                            label="Telefono"
                            name="phone"
                            control={control}
                            rules={{
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                              validate: {
                                onlyNumbers(text) {
                                  let regex = /^[a-zA-Z\s]*$/;
                                  console.log(regex.test(text));
                                  if (regex.test(text)) {
                                    setValue("phone", text.slice(0, -1));
                                  }
                                },
                              },
                              maxLength: {
                                value: 11,
                                message:
                                  "Debes ingresar maximo 11 caracteres en este campo.",
                              },
                              minLength: {
                                value: 7,
                                message:
                                  "Debes ingresar minimo 7 caracteres en este campo.",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12}>
                          <Input
                            type="email"
                            label="Correo electronico"
                            name="email"
                            control={control}
                            rules={{
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                              pattern: {
                                value:
                                  // eslint-disable-next-line
                                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message:
                                  "Debes ingresar un correo electronico valido.",
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Button
                    action={handleSubmit(saveData)}
                    variant="primary"
                    disabled={!isValid}
                  >
                    Guardar
                  </Button>
                  <Button action={closeModal} variant="secondary">
                    Cerrar
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditUser;
