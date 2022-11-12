import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const useApp = () => {
  axios.defaults.baseURL = "http://127.0.0.1:8000/api";

  /** states */
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState(false);

  /**
   * esta funcion obtiene los usuarios registrados en la base de datos.
   * @return {void}
   */
  const getUsers = () => {
    axios
      .get("/get")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        alert("hubo un error al obtener los usuarios");
      });
  };

  /**
   * esta funcion abre el popup de crear usuario
   * @return {void}
   */
  const handleOpenModal = () => setOpenModal(true);

  /**
   * esta funcion abre el popup de editar usuario
   * @return {void}
   */
  const handleOpenModalEdit = (data) => {
    setDataEdit(data);
    setOpenModalEdit(true);
  };

  /**
   * esta funcion cierra el popup de crear usuario
   * @return {void}
   */
  const handleCloseModal = () => setOpenModal(false);

  /**
   * esta funcion cierra el popup de editar usuario
   * @return {void}
   */
  const handleCloseModalEdit = () => {
    setDataEdit([]);
    setOpenModalEdit(false);
  };

  /**
   * esta funcion envia la peticion para poder crear un nuevo usuario.
   * @param {any} user
   * @return {void}
   */
  const handleCreateUser = (user) => {
    axios
      .post("/create", { ...user, password: "password" })
      .then(() => {
        setOpenModal(false);
        Swal.fire({
          icon: "success",
          title: "Se creo existosamente el usuario!",
          html: `El usuario fue creado exitosamente.`,
        });
        getUsers();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  /**
   * esta funcion envia la peticion para poder crear un nuevo usuario.
   * @param {any} user
   * @return {void}
   */
  const handleEditUser = (user) => {
    axios
      .post("/edit", { ...user })
      .then(() => {
        setOpenModal(false);

        Swal.fire({
          icon: "success",
          title: "Se edito existosamente el usuario!",
          html: `El usuario <b>${
            users.find((item) => item.id === user.id).name
          } ${
            users.find((item) => item.id === user.id).last_name
          }</b> fue editado exitosamente.`,
        });
        getUsers();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  /**
   * Esta funcion elimina un usuario de la base de datos.
   * @param {number} id id del usuario
   * @return {void}
   */
  const handleDeleteUser = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Estas a punto de borrar este usuario!",
      html: `Estas seguro de eliminar al usuario <b>${
        users.find((item) => item.id === id).name
      } ${users.find((item) => item.id === id).last_name}</b>`,
      showConfirmButton: true,
      showCancelButton: true,
    }).then((response) => {
      if (response.isConfirmed) {
        axios
          .post("/delete", { id })
          .then((res) => {
            getUsers();
            Swal.fire({
              icon: "success",
              title: "Se elimino el usuario!",
              html: `El usuario <b>${
                users.find((item) => item.id === id).name
              } ${
                users.find((item) => item.id === id).last_name
              }</b> fue eliminado exitosamente.`,
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Ocurrio un problema al momento de eliminar el usuario!",
              html: `El usuario <b>${
                users.find((item) => item.id === id).name
              } ${
                users.find((item) => item.id === id).last_name
              }</b> no pudo ser eliminado exitosamente.`,
            });
          });
      }
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    openModal,
    openModalEdit,
    dataEdit,
    handleOpenModal,
    handleCloseModal,
    handleCreateUser,
    handleDeleteUser,
    handleOpenModalEdit,
    handleCloseModalEdit,
    handleEditUser,
  };
};

export default useApp;
