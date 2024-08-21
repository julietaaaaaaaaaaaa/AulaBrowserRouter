import Header from "../components/Header";
import Footer from "../components/Footer";
import './globals.css';
const [listadeProdutos, setTodososprodutos] = useState([
    {id: 1,
        item: "bolo de morango",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMogKhxCoIvuqDXN6vkYoV02fTrJ5cCXZO4bfdol_GTH7cyfTZvK-xX5n6ACMd5KWqqg&usqp=CAU",
     preco: "R$68,00",
     peso:"2kg",
     formato:["redondo","quadrado"]}

    { id: 2,
         item: "bolo de chocolate",
         imagem: "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/11/bolo_morango.jpg",
        preco: "R$72,00",
         peso:"2kg",
         formato:["redondo","quadrado"]}
    {id: 3,
        item: "bolo 4 leite",
        imagem: "https://www.ecompletocdn.com.br/i/fp/1178/1521958_3_1692800584.jpg",
        preco: "R$120,00",
        peso:"2kg",
         formato:["redondo","quadrado"]}
    {id: 4,
        item: "bolo de uva",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHHnygrr9wYRQAKjbxvKGBSjEiTmtbf27lg&s",
        preco: "R$180,00",
        peso:"2kg",
        formato:["redondo","quadrado"]}
    {id: 5 ,
         item: "bolo ninho",
       imagem: "https://receitatodahora.com.br/wp-content/uploads/2018/09/creme-de-leite-ninho-1.jpg",
       preco: "R$100,00",
       peso:"3kg",
       formato:["redondo","quadrado"]},
    {id: 6,
        item: "",
        imagem: "",
        preco: "R$120,00",
        peso:"2kg",
        formato:["redondo","quadrado"]},
        { id: 7,
            item: "",
            imagem: "",
             preco: "R$120,00",
              peso:"2kg", 
              formato:["redondo","quadrado"]},
{id: 8, 
    item: "",
    imagem: "", 
     preco: "R$120,00",
     peso:"2kg", 
    formato:["redondo","quadrado"]},

{id: 9, 
    item: "", 
     imagem: "", 
   preco: "R$120,00",
   peso:"2kg",
   formato:["redondo","quadrado"]},

{id: 10,
    item: "",
    imagem: "", 
   preco: "R$120,00",
   peso:"2kg", 
   formato:["redondo","quadrado"]},

{id: 11,
    item: "",
    imagem: "",
    preco: "R$120,00",
   peso:"2kg",
   formato:["redondo","quadrado"]},

{ id: 12,
    item: "",
    imagem: "",
preco: "R$120,00",
peso:"2kg", 
formato:["redondo","quadrado"]},

{id: 13,
     item: "",
     imagem: "",
preco: "R$120,00",
 peso:"2kg", 
 formato:["redondo","quadrado"]},

{ id: 14,
     item: "", 
     imagem: "",
preco: "R$120,00", 
peso:"2kg",
formato:["redondo","quadrado"]},

{id: 15, 
    item: "",
    imagem: "", 
preco: "R$120,00",
 peso:"2kg",
 formato:["redondo","quadrado"]}
    ]);
return(
    <div>
    <Header/>


    </div>
)