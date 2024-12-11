
import { Link } from "react-router-dom";
import ImgHome from "./../../assets/home.png";
import "./HomeButton.css";
function HomeButton() {
  return (
    <div>
      
      <Link to="/">
      <img src={ImgHome} alt='Home' className='home-img'/>
      </Link>
    </div>
  )
}

export default HomeButton