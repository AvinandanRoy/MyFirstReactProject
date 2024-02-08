import '../assets/CSS/App.css'

const Navigation =()=>{
    return(
        <div>
            <nav className="nav-bar">
        <div className="logo">
          <img src="../public/brand_logonikeLogo.png" alt="Logo"/>
        </div>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className= "loginBtn">Login</button>
      </nav>
        </div>
    );
}

export default Navigation;