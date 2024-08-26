import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProdutos from "../components/ListarProdutos";
import { useState } from "react";
export default function Ofertas(){
const [listadePRODUTOS, setTodososprodutos] = useState([
    {
        id: 1,
        item: "Tênis Authentic",
        imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h77/ha9/h00/h00/12094949294110/1002000450004U-02-BASEIMAGE-Lores.jpg",
        preco: "R$299,99",
        cor:"azul",
        tamanho:["Tamanhos: 35, 36, 37 ,38"]},


    {
        id: 2,
        item: "Tênis Authentic Pesto",
        imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h91/hc5/h00/h00/12093993320478/1002000370193U-02-BASEIMAGE-Lores.jpg",
        preco: "R$299,99",
        cor:"verde",
        tamanho:["Tamanhos: 35, 36, 37 ,38"]},




    {
        id: 3,
        item: "Tênis Authentic Plataforma ",
        imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h78/hcd/h00/h00/11696977379358/1002000520013U-02-BASEIMAGE-Lores.jpg",
        preco: "R$399,99",
        cor:"xadrez",
        tamanho:["Tamanhos: 35, 36, 37 ,38"]},


    {
        id: 4,
        item: "Tênis Authentic",
        imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h49/h3e/h00/h00/12080931864606/1002000450003U-02-BASEIMAGE-Lores.jpg",
        preco: "R$ 299,99",
        cor:"Preto",
        tamanho:["Tamanhos: 35, 36, 37 ,38"]},

    {
    id: 5,
    item: "Tênis Authentic White",
    imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/he1/had/h00/h00/12093968285726/1002000450141U-02-BASEIMAGE-Lores.jpg",
    preco: "R$ 299,99",
    cor:"Creme",
    tamanho:["Tamanhos: 35, 36, 37 ,38"]},

{
id:6,
item:"Tênis Authentic Foxglove",
imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/h87/hc9/h00/h00/12094001020958/1002000370191U-02-BASEIMAGE-Lores.jpg",
preco:"R$ 299,99",
cor:"rosa",
tamanho:["Tamanhos: 35, 36, 37 ,38"]},

    
    { id: 7,
        item: "Tênis Knu Skool ",
        imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hab/h34/h00/h00/12126084628510/1001100550001U-01-BASEIMAGE-Lores.jpg",
         preco: "R$ 399,99", 
         tamanho:["Tamanhos: 35, 36, 37 ,38"]},


{id: 8, 
item: "Tênis Old Skool",
imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hd8/hcf/h00/h00/10896582770718/1002000850125U-02-BASEIMAGE-Lores.jpg", 
preco: "R$ 499,99",
cor:"xadrez",
tamanho:["Tamanhos: 35, 36, 37 ,38"]},


{id: 9, 
item: "Tênis Skate Ave 2.0", 
imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h7e/hf6/h00/h00/12094443716638/1003000160001U-01-BASEIMAGE-Lores.jpg", 
preco: "R$ 749,99",
cor:"roxo/rosa", 
tamanho:["Tamanhos: 35, 36, 37 ,38"]},

{id: 10,
item: "Tênis Hylane Black White",
imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hd4/h49/h00/h00/12093349756958/1003800500002U-01-BASEIMAGE-Lores.jpg",
preco:"R$ 649,99", 
cor:"branco e preto", 
tamanho:["Tamanhos: 35, 36, 37 ,38"]},

{id: 11,
    item: "Tênis Slip-On Starry ",
    imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hde/h26/h00/h00/12093891575838/1002000560095U-02-BASEIMAGE-Lores.jpg",
    preco:"R$ 449,99", 
    cor:"azul", 
    tamanho:["Tamanhos: 35, 36, 37 ,38"]},

    
       {id: 12,
        item: "Tênis Slip-On  ",
        imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h4c/hca/h00/h00/12094950801438/1002000560098U-02-BASEIMAGE-Lores.jpg",
        preco:"R$ 299,99", 
        cor:"verde", 
        tamanho:["Tamanhos: 35, 36, 37 ,38"]},


           {id: 13,
            item: "Tênis Slip-On FoxLove",
            imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h81/h77/h00/h00/12094947721246/1002000560104U-02-BASEIMAGE-Lores.jpg",
            preco:"R$ 299,99", 
            cor:"rosa", 
            tamanho:["Tamanhos: 35, 36, 37 ,38"]},


               {id: 14,
                item: "Tênis Old Skool Sf",
                imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hde/h7a/h00/h00/12094895849502/1003550770003U-02-BASEIMAGE-Lores.png",
                preco:"R$ 599,99", 
                cor:"amarelo", 
                tamanho:["Tamanhos: 35, 36, 37 ,38"]},

                {id: 15,
                    item: "Tênis Old Skool Oversized ",
                    imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hc1/h79/h00/h00/12093877846046/1002000850217U-02-BASEIMAGE-Lores.jpg",
                    preco:"R$ 449,99", 
                    cor:"vermelho", 
                    tamanho:["Tamanhos: 35, 36, 37 ,38"]}

]);
return(
    <>
    <div>
    <Header/>


    <ListarProdutos produtos={listadePRODUTOS}/>

     <Footer/>
    </div>
    </>
    
);
}