import Header from "../components/Header";
import Footer from "../components/Footer";
import "../globals.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";
import ListarProdutos from "../components/ListarProdutos";

export default function Home(){
    const [listadeProdutosdoHome, setHome] = useState([
        {
            id: 1,
            item: "Tênis Authentic",
            imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h77/ha9/h00/h00/12094949294110/1002000450004U-02-BASEIMAGE-Lores.jpg",
            preco: "R$299,99",
            cor:"azul",
            tamanho:["Tamanhos: 35, 36, 37, 38"]},
    

        {
            id: 2,
            item: "Tênis Authentic Pesto",
            imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h91/hc5/h00/h00/12093993320478/1002000370193U-02-BASEIMAGE-Lores.jpg",
            preco: "R$299,99",
            cor:"verde",
            tamanho:["Tamanhos: 35, 36, 37, 38"]},
    

    

        {
            id: 3,
            item: "Tênis Authentic Plataforma ",
            imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h78/hcd/h00/h00/11696977379358/1002000520013U-02-BASEIMAGE-Lores.jpg",
            preco: "R$399,99",
            cor:"xadrez",
            tamanho:["Tamanhos: 35, 36, 37, 38"]},
    
    
        {
            id: 4,
            item: "Tênis Authentic",
            imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h49/h3e/h00/h00/12080931864606/1002000450003U-02-BASEIMAGE-Lores.jpg",
            preco: "R$ 299,99",
            cor:"Preto",
            tamanho:["Tamanhos: 35, 36, 37, 38"]},
    
        {
        id: 5,
        item: "Tênis Authentic White",
        imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/he1/had/h00/h00/12093968285726/1002000450141U-02-BASEIMAGE-Lores.jpg",
        preco: "R$ 299,99",
        cor:"Creme",
        tamanho:["Tamanhos: 35, 36, 37, 38"]},
    
{
    id:6,
    item:"Tênis Authentic Foxglove",
    imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/h87/hc9/h00/h00/12094001020958/1002000370191U-02-BASEIMAGE-Lores.jpg",
    preco:"R$ 299,99",
    cor:"rosa",
    tamanho:["Tamanhos: 35, 36, 37, 38"]},
    
    ]);
    return(
    <>
        <Header/>
        <div className="home">
        
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
                    <img className="imgcarousel"src="https://secure-static.vans.com.br/medias/sys_master/vans/vans/h52/h35/h00/h00/12131097346078/Upland-hero-01.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img className="imgcarousel"src="https://gkpb.com.br/wp-content/uploads/2023/08/vans-classicos.png" alt="Slide 2"/>
                </div>
                
                
        </Carousel>
        </div>
        <ListarProdutos produtos={listadeProdutosdoHome}/>
        <Footer/>
</>
    );
}