import {
    AiFillInstagram,
    AiFillYoutube,
    AiFillGithub,
  AiFillTwitterCircle
  } from "react-icons/ai";
import '../../style/Footer.css'
  const Footer = () => {
    return (
      <footer>
        <div>
          <h2>MBA Burger Wala</h2>
          <p>We are trying to give you the best teast possible.</p>
          <br />
          <em>We give attention to genuine feedback</em>
  
          <strong>All right received @mbaburgerwala</strong>
        </div>
  
        <aside>
          <h4>Follow Us</h4>
  
          <a href="https://twitter.com" target="blank"><AiFillTwitterCircle/></a>
          <a href="https://youtube.com" target="blank"><AiFillYoutube/></a>
          <a href="https://github.com"  target="blank"><AiFillGithub/></a>
          <a href="https://instagram.com" target="blank"><AiFillInstagram/></a>
        </aside>
      </footer>
    );
  };
  
  export default Footer;