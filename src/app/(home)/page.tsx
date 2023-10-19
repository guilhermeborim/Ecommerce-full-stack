import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-home-01.png"
        alt="50% de desconto"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />
      <div className="mt-8">
        <Categories />
      </div>

      <div className="mt-8">
        <div className="mb-3 pl-5 font-bold uppercase">Ofertas</div>
        <ProductList products={deals} />
      </div>
      <Image
        src="/banner-home-02.png"
        alt="50% de desconto em mouses"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />
    </div>
  );
}
