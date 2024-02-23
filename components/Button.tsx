import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

function Button({ type, title, icon, variant }: ButtonProps) {
  return (
    <button
      className={`flexCenter gap-2 ${variant} rounded-full border `}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}

export default Button;
