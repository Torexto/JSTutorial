import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  href: string;
  children: IconProp;
}

function SocialButton({ href, children }: Props) {
  return (
    <div>
      <button className="w-8 h-8">
        <a href={href} target="_blank" className="w-full h-full block">
          <FontAwesomeIcon icon={children} className="w-full h-full" />
        </a>
      </button>
    </div>
  );
}

export default SocialButton;
