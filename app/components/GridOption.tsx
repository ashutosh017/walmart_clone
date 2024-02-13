import { cn } from "@/lib/utils";
import Image from "next/legacy/image";
import Link from "next/link";

type Props = {
  title: string;
  className?: string;
  image?: string;
};
function GridOption({ title, className, image }: Props) {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn("grid-option relative", className)}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="object-cover opacity-20 rounded-md"
        />
      )}
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
  );
}

export default GridOption;
