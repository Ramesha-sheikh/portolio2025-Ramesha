type Props = {
  href: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<Props> = ({
  href,
  targetBlank = false,
  outline = false,
  className = "",
  children,
}) => {
  return (
    <a
      role="button"
      href={href}
      target={targetBlank ? "_blank" : "_self"}
      rel={targetBlank ? "noopener noreferrer" : undefined}
      className={`relative inline-flex items-center justify-center px-5 py-2 rounded-xl font-medium transition-all duration-300 ease-out 
        ${
          outline
            ? "border border-marrsgreen dark:border-carrigreen text-marrsgreen dark:text-carrigreen hover:bg-marrsgreen hover:text-cardlight dark:hover:bg-carrigreen dark:hover:text-carddark"
            : "bg-marrsgreen dark:bg-carrigreen text-bglight dark:text-bgdark hover:scale-105 active:scale-95 hover:shadow-lg hover:bg-gradient-to-r hover:from-marrsgreen hover:to-marrslight dark:hover:from-carrigreen dark:hover:to-carrilight"
        }
        focus-visible:outline focus-visible:outline-2 outline-offset-2 outline-marrsgreen dark:outline-carrigreen
        ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
