import Header from "../components/Header";
import Footer from "../components/Footer";
export default function ListarProdutos({produtos}) {
    return(
        <div>
           {
        produtos.map((bolo) =>
                    <div key={bolo.id}>
                        <p>{bolo.item}</p>
                        <p>{bolo.preco}</p>
                        <p>{bolo.peso}</p>
                        {formato.map((format)=>
                        <p>{format}</p>)}
                        <img src={bolo.imagem} />
                    </div>
                )
            }
             {
            produtos.map((bolo) =>
                        <div key={bolo.id}>
                            <p>{bolo.item}</p>
                            <p>{bolo.preco}</p>
                            <p>{bolo.peso}</p>
                           {formato.map((format)=>
                        <p>{format}</p>)}
                            <img src={bolo.imagem} />
                        </div>
                    )
                }
                {
            produtos.map((bolo) =>
                        <div key={bolo.id}>
                            <p>{bolo.item}</p>
                            <p>{bolo.preco}</p>
                            <p>{bolo.peso}</p>
                           {formato.map((format)=>
                        <p>{format}</p>)}
                            <img src={bolo.imagem} />
                        </div>
                    )
                }
            
        </div>

    )
     
}