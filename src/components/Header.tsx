import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <Image
        src="/logo.png"
        width={150}
        height={150}
        priority={true}
        alt="TL Refeições congeladas"
      />
    </header>
  );
};
