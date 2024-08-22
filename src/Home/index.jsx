import Header from "../components/Header";
import Footer from "../components/Footer";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";
import ListarProdutos from "../components/ListarProdutos";

export default function Home(){
    const [listadeProdutosdoHome, setHome] = useState([
        {
            id: 1,
            item: "bolo de morango",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMogKhxCoIvuqDXN6vkYoV02fTrJ5cCXZO4bfdol_GTH7cyfTZvK-xX5n6ACMd5KWqqg&usqp=CAU",
            preco: "R$68,00",
            peso:"2kg",
            formato:"redondo"
        },

        {
            id: 2,
            item: "bolo de chocolate",
            imagem: "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/11/bolo_morango.jpg",
            preco: "R$72,00",
            peso:"2kg",
            formato:"redondo"
        },

        {
            id: 3,
            item: "bolo 4 leite",
            imagem: "https://www.ecompletocdn.com.br/i/fp/1178/1521958_3_1692800584.jpg",
            preco: "R$120,00",
            peso:"2kg",
            formato:"redondo"
        },
        {
            id: 4,
            item: "bolo de uva",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHHnygrr9wYRQAKjbxvKGBSjEiTmtbf27lg&s",
            preco: "R$180,00",
            peso:"2kg",
            formato:"redondo"
        },
        {
        id: 5,
        item: "bolo ninho",
        imagem: "https://receitatodahora.com.br/wp-content/uploads/2018/09/creme-de-leite-ninho-1.jpg",
        preco: "R$100,00",
        peso:"3kg",
        formato:"redondo"
        }

        
    ]);

    return(
    <>
        <Header/>
        <div className="home">
        <h1>Bolos da Julieta</h1>

        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
             >
        
                <div>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sabornamesa.com.br%2Fbolos%2Fbolo-de-chocolate-decorado&psig=AOvVaw3nrYggpUuRmRfygfWc7PCd&ust=1724271349501000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCfir-xhIgDFQAAAAAdAAAAABAE" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.receitasnestle.com.br%2Freceitas%2Fbolo-pelado-naked-cake-com-morangos&psig=AOvVaw3PjB_7LZxkNVzkJDQuN42V&ust=1724271446117000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDp4-mxhIgDFQAAAAAdAAAAABAJ" alt="Slide 2"/>
                </div>
                <div>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-premium%2Fum-bolo-rosa-com-glace-branco-e-glace-rosa_43287473.htm&psig=AOvVaw3rRPRcQPhKJMuII0JHKWBq&ust=1724272894427000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjytZ-3hIgDFQAAAAAdAAAAABAK" alt="Slide 3"/>
                </div>
        </Carousel>
    
        
     </div>
<Footer/>
</>
    );
}