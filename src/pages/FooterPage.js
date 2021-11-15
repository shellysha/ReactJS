import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { BiCopyright } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
function Footer() {
  return (
    <>
      <section className="footer">
        <div class="social">
          <a href="http://www.linkedin.com/in/shellysh/" target="_blank">
            <BsLinkedin class="in"></BsLinkedin>
          </a>
          <a href="http://www.facebook.com/shelly.shamay" target="_blank">
            <BsFacebook class="fb"></BsFacebook>
          </a>
          <a href="mailto:shellyshamay@gmail.com" target="_blank">
            <GrMail class="ml"></GrMail>
          </a>
        </div>
        <div>
          <BiCopyright class="copyright"></BiCopyright>
          Shelly Shamay 2021-2022
        </div>
      </section>
    </>
  );
}
export default Footer;
