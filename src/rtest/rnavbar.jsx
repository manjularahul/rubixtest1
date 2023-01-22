import '../RSTYLES/Rnavbar.css';
const Rnavbar = () => {
    return ( 
        <div className="navbar">
            <div className="Rimage">
              <img width="250" src="/image/rubix.png" alt="" />
            </div>
            <div className="nav_links">
            <ul>
                <li> <a href="https://rubixe.com/">HOME</a>   </li>
                <li>  <a href="https://rubixe.com/services/"> SERVICES</a>  </li>
                <li> <a href="https://rubixe.com/products/"> PRODUCTS</a>   </li>
                <li>  <a href="https://rubixe.com/ai-intership-projects/"> AI INTERNSHIP</a>  </li>
                <li> <a href="https://rubixe.com/career/"> CAREER</a>   </li>
                <li>  <a href="https://rubixe.com/blog/"> BLOG</a>  </li>
                <li>   <a href="https://rubixe.com/about/"> ABOUT</a> </li>
                <li>   <a href="https://rubixe.com/contact-us/"> CONTACT US</a> </li>
            </ul>

            </div>

        </div>
     );
}
 
export default Rnavbar;