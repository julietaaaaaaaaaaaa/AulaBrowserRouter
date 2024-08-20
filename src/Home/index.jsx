import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home(){
    const [listadeBolos, setBolos] = useState([
        {
            id: 1,
            item: "bolo de morango",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYePBpwDeuRD_mpzGEvRi_kZa0LfLHYukrg&s",
            preco: "R$68,00",
            peso:"2kg",
            formato:"redondo"
        },

        {
            id: 2,
            item: "bolo de chocolate",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_S6hEdOhEOZC_vh5dU660IkR3msCqttEUOg&s",
            preco: "R$72,00",
            peso:"2kg",
            formato:"redondo"
        },

        {
            id: 3,
            item: "bolo 4 leite",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYBr9IcXAaTyKPt7KHBzOc1-OcEsPqm-AEg&s",
            preco: "R$120,00",
            peso:"2kg",
            formato:"redondo"
        },
        {
            id: 4,
            item: "bolo de uva",
            imagem: "",
            preco: "R$180,00",
            peso:"2kg",
            formato:"redondo"
        },
        {
        id: 5,
        item: "bolo ninho",
        imagem: "",
        preco: "R$100,00",
        peso:"3kg",
        formato:"redondo"
        },

        
    ]);

    return(
    <>
        <Header/>
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
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sabornamesa.com.br%2Fbolos%2Fbolo-de-chocolate-decorado&psig=AOvVaw3nrYggpUuRmRfygfWc7PCd&ust=1724271349501000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCfir-xhIgDFQAAAAAdAAAAABAE" alt="" />
                    </div>
                    <div>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.receitasnestle.com.br%2Freceitas%2Fbolo-pelado-naked-cake-com-morangos&psig=AOvVaw3PjB_7LZxkNVzkJDQuN42V&ust=1724271446117000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDp4-mxhIgDFQAAAAAdAAAAABAJ" alt=""/>
                    </div>
                    <div>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-premium%2Fum-bolo-rosa-com-glace-branco-e-glace-rosa_43287473.htm&psig=AOvVaw3rRPRcQPhKJMuII0JHKWBq&ust=1724272894427000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjytZ-3hIgDFQAAAAAdAAAAABAK" alt=""/>
                </div>
                </Carousel>
        </>
     


    );
}