import clsx from "clsx";
import SocialButton from "./Footer/SocialButton";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      className={clsx(
        "relative left-0 bottom-0 h-20 bg-slate-700 w-full flex flex-col justify-center items-center text-white overflow-hidden"
      )}
    >
      <div className="flex gap-x-2">
        <SocialButton href="https://www.linkedin.com/in/tomasz-trela-b083882b5/">
          {faLinkedin}
        </SocialButton>
        <SocialButton href="https://github.com/Torexto">
          {faGithub}
        </SocialButton>
        <SocialButton href="https://www.facebook.com/Tomek.Trela.10">
          {faFacebook}
        </SocialButton>
      </div>
      <div>
        Website created by Tomasz Trela &copy;{new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
