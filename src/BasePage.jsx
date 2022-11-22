import SectionDescription from "./components/SectionDescription/SectionDescription";
import imgIndex from "./assets/img/index-img.png"
import { useState } from "react";
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import List from "./components/List/List.jsx"

function BasePage() {

  const [page, setPage] = useState(true)
  const [transicoes, setTransicoes] = useState([])
  const [filtro, setFiltro] = useState("Todos")

  const filtrandoTransicoes = filtro !== "Todos" ?
  transicoes.filter(element => element.opcao === filtro) :
  transicoes
  


  return (
    
      <>

        {
          page ? 
          <main className="home-main">
            <SectionDescription page={setPage}/>
    
            <section className="section-img">
              <figure>
                <img src={imgIndex} alt="cartão branco" />
              </figure>
            </section>
         
          </main>
          :
          <>
            <Header page={setPage}/>
            <Main setTransicoes={setTransicoes} transicoes={transicoes} setFiltro={setFiltro}>
              <List transicoes={transicoes} filtro={filtro} filtrandoTransicoes={filtrandoTransicoes}
              setTransicoes={setTransicoes}>
                
              </List>
            </Main>
            
          </>
  
        }

      </>
   
  );
}

export default BasePage;
