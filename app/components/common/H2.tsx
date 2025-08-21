import { Kantumruy_Pro } from "next/font/google";

const kantumruyPro = Kantumruy_Pro({
  subsets: ["latin"],
  weight: "600",
});

type Props = {
  children: string;
  styles: string;
};

const H2 = ({ children, styles }: Props) => {
  return (
    <h2 className="flex justify-center">
      <p
        data-text={children}
        className={`${styles} glow-text font-extrabold ${kantumruyPro.className} uppercase max-w-3xl`}
      >
        {children}
      </p>
    </h2>
  );
};

export default H2;
