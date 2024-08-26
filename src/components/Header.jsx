import { Link } from "react-router-dom";

export default function Header() {
    return(
        <> 
        <nav>
            <div className="menu">
            <ul className="headerHeader">
               <Link className="homelink" to="/">
                  <li className="HeaderHome" > Home </li>
              </Link>
              <Link className="ofertaslink"  to="/ofertas">
                 <li className="HeaderOfertas"> Ofertas </li>
              </Link>
              <Link className="produtoslink" to="/produtos">
                  <li className="HeaderProdutos"> Produtos </li>
              </Link>
             </ul>
             </div>
            
         </nav>
        </>
    )
}