import { Link } from "react-router-dom";

export default function Header() {
    return(
        <> 
        <nav className="menu">
            <div >
            <ul >
               <Link to="/">
                  <li className="HeaderHome" > Home </li>
              </Link>
              <Link to="/ofertas">
                 <li className="HeaderOfertas"> Ofertas </li>
              </Link>
              <Link to="/produtos">
                  <li className="HeaderProdutos"> Produtos </li>
              </Link>
             </ul>
             </div>
         </nav>
        </>
    )
}