import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Ofertas(){
    const [listadeProdutosOfertas, setOfertas] = useState([
        {
            id: 1,
            item: "bolo de morango",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMogKhxCoIvuqDXN6vkYoV02fTrJ5cCXZO4bfdol_GTH7cyfTZvK-xX5n6ACMd5KWqqg&usqp=CAU",
            preco: "R$68,00",
            peso:"2kg",
            formato:["redondo, quadrado"]
        },

        {
            id: 2,
            item: "bolo de chocolate",
            imagem: "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/11/bolo_morango.jpg",
            preco: "R$72,00",
            peso:"2kg",
            formato:["redondo, quadrado"]
        },

        {
            id: 3,
            item: "bolo 4 leite",
            imagem: "https://www.ecompletocdn.com.br/i/fp/1178/1521958_3_1692800584.jpg",
            preco: "R$120,00",
            peso:"2kg",
            formato:["redondo, quadrado"]
        },
        {
            id: 4,
            item: "bolo de uva",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHHnygrr9wYRQAKjbxvKGBSjEiTmtbf27lg&s",
            preco: "R$180,00",
            peso:"2kg",
            formato:["redondo, quadrado"]
        },
        {
        id: 5,
        item: "bolo ninho",
        imagem: "https://receitatodahora.com.br/wp-content/uploads/2018/09/creme-de-leite-ninho-1.jpg",
        preco: "R$100,00",
        peso:"3kg",
        formato:["redondo", "quadrado"]
        },
        {id: 6,
            item: "bolo azul",
            imagem: "https://www.mundodasfestas.com.br/wp-content/uploads/2021/07/bolo-azul-00-1200x738.jpg",
            preco: "R$120,00",
            peso:"2kg",
            formato:["redondo", "quadrado"]},
        { id: 7,
            item: "bolo verde",
            imagem: "https://wiltondobrasil.com.br/wp-content/uploads/bolo-margarida.png",
             preco: "R$120,00", 
             peso:"2kg",
             formato:["redondo", "quadrado"]
            },
{id: 8, 
    item: "bolo roxo",
    imagem: "data:image/jpeg;base64,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", 
   preco: "R$120,00",
   peso:"2kg",
   formato:["redondo", "quadrado"]},
{id: 9, 
    item: "bolo de laranja", 
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvVSd6lmqtI8CFkJ5I8GF2ZxdEp98RtDWVA&s", 
  preco: "R$120,00",
  peso:"2kg", 
   formato:["redondo", "quadrado"]},
{id: 10,
    item: "bolo amarelo",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlCDCzMCUlkNIBEBO6E7WeatKFBj04Ul-Wg&s",
    preco:"R$180,00", 
    peso:"3kg", 
    formato:["redondo", "quadrado"]}

    ]);
    return(
        <>
        <Header/>
        <div className="ofertas">
        <h1>IMPERDIVELLLL!!!!</h1>
        
       
    
        </div>

        <Footer/>
        </>
    );
}




    