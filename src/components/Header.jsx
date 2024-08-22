import { Link } from "react-router-dom";

export default function Header() {
    return(
        <> 
        <nav>
            <ul className="nav-menu">
               <Link to="/">
                  <li > Home </li>
              </Link>
              <Link to="/ofertas">
                 <li> Ofertas </li>
              </Link>
              <Link to="/produtos">
                  <li> Produtos </li>
              </Link>
             </ul>
         </nav>
        </>
    )
}