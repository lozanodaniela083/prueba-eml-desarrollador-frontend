import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useComponents from "./components";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import useApp from "./useApp";

const App = () => {
  /** controllers */
  const {
    users,
    openModal,
    openModalEdit,
    dataEdit,
    handleOpenModal,
    handleCloseModal,
    handleDeleteUser,
    handleCreateUser,
    handleCloseModalEdit,
    handleOpenModalEdit,
    handleEditUser,
  } = useApp();

  /** Components */
  const { Header } = useComponents();

  return (
    <div style={{ height: "calc(100vh)" }}>
      <Header />
      <Container>
        <Button
          variant="outlined"
          color="success"
          style={{ marginTop: 100, zIndex: 100, background: "#fff" }}
          onClick={handleOpenModal}
        >
          Crear usuario
        </Button>
        <TableContainer component={Paper} style={{ marginTop: 30 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellidos</TableCell>
                <TableCell>Correo Electronico</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell>Opciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length > 0 &&
                users.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row?.name}</TableCell>
                    <TableCell>{row?.last_name}</TableCell>
                    <TableCell>{row?.email}</TableCell>
                    <TableCell>{row?.phone}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginRight: 20 }}
                        onClick={() => handleOpenModalEdit(row)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDeleteUser(row.id)}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <CreateUser
        show={openModal}
        closeModal={handleCloseModal}
        saveData={handleCreateUser}
      />
      <EditUser
        show={openModalEdit}
        closeModal={handleCloseModalEdit}
        saveData={handleEditUser}
        data_edit={dataEdit}
      />
    </div>
  );
};

export default App;
