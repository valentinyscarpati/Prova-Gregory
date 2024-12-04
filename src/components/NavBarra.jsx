// importando components do bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavBarra = () => {
  const usuarioNome = localStorage.getItem("userName")

  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor: "#3e77b6"}} data-bs-theme="dark">
        <Container>
          {/* Icone mercado */}
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "40px", color: "white" }}
          >
            pet_supplies 
          </span>
          {/* Texto logo */}
          <Navbar.Brand href="/home"> ONG Animal </Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            {/* Paginas */}
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">Animais</Nav.Link>
              <Nav.Link href="/animal/cadastrar" style={{color:'white'}}>Cadastro</Nav.Link>
            </Nav>
            {/* Sair */}
            <Nav className="justify-content-end">
                <Navbar.Text style={{color:"white"}}>
                  Usuário: {usuarioNome}
                </Navbar.Text>

              <Nav.Link href="/login" style={{color:"white", textDecoration: "underline"}}>Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarra;