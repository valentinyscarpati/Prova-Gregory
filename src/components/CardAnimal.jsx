import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardAnimal = (props) => {
  // Funcao pra deletar um produto
  const handleDelete = async (e) => {
    const req = await fetch(`http://localhost:5000/animal/${props.id}`, {
      method: "DELETE",
    });
    const res = await req.json();
    console.log(res);
    alert(`Animal ${res.nome} removido`);
  };

  return (
    <div>
      <Card style={{ width: "16rem", height: "30rem" }}>
        {/* Imagem do Card */}
        <Card.Img variant="top" src={props.imagemUrl} height="200px" />

        <Card.Body>
          {/* Título do card com nome do produto */}
          <Card.Title>{props.nome}</Card.Title>
          {/* Subtitulo no card com preco do produto */}
          <Card.Text>
            <b> Vacinado? </b> <br></br> {props.vacina}
          </Card.Text>
          <Card.Text>
            <b> Raça: </b> <br></br> {props.raca}
          </Card.Text>
          <Card.Text>
            <b> Tipo: </b> <br></br> {props.categoria}
          </Card.Text>

          <Card.Link href={`/animal/editar/${props.id}`}>
          <button type="button" class="btn btn-outline-warning">Editar</button>
          </Card.Link>

          <Card.Link href="/home">
          <button type="button" class="btn btn-outline-danger"onClick={handleDelete}>
              Excluir
            </button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardAnimal;
