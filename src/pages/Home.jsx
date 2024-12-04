// importando components do bootstrap
import React from "react";
import CardAnimal from "../components/CardAnimal";
import Container from "react-bootstrap/Container";


// Importação de componentes
import NavBarra from "../components/NavBarra";

// Importando o hook useState para monitorar a mudança das variáveis
import { useState, useEffect } from "react";
import { alignPropType } from "react-bootstrap/esm/types";

// Url da api
const url = "http://localhost:5000/animal"

const Home = () => {
    //Lista com produtos
    const [animal, setAnimal] = useState([])
    //UseEffect pra puxar os dados da api
    useEffect(()=>{
      async function fetchData(){
        try{
            const req = await fetch(url)
            const prods = await req.json()
            console.log(prods)
            setAnimal(prods)
        }
        catch(erro){
          console.log(erro.message)
        }
      }
      fetchData()
    }, [animal])
  
  return (
    <div>
      <NavBarra />
      <h1 style={{color:"Black"}}>
        
        Lista de Animais
      
      </h1>
      <Container>
        <div className="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-start flex-wrap">


          {/* Card com informações variáveis */}
          {animal.map((prod) => (
            <CardAnimal
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              raca={prod.raca}
              vacina={prod.vacina}
              categoria={prod.categoria}
              imagemUrl={prod.imagemUrl}
            
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;