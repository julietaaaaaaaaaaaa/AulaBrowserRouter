import Header from "../components/Header";
import Footer from "../components/Footer";
export default function ListarProdutos({produtos}) {
    return(
        <div>
           <div className="objetos">
        {

                produtos.map((objeto) =>
                    <div className="card"  key={objeto.id}>
                        <img className="img-card" src={objeto.imagem} />
                        <p className="paragrafoitem">{objeto.item}</p>
                        <p className="paragrafoitem">{objeto.preco}</p>
                        <p className="paragrafoitem">{objeto.cor}</p>
                        <p className="paragrafoitem">{objeto.tamanho}</p>
                        <button className="botaoComprar" onClick={() => adicionarOBJETOPedido(objeto)}> Comprar </button>
                        </div>
    
                )
            }
     </div>
     </div>




    )
     
}