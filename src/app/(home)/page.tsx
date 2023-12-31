import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTile from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner src="/banner-home-01.png" alt="50% de desconto" />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTile>Ofertas</SectionTile>
        <ProductList products={deals} />
      </div>

      <PromoBanner src="/banner-home-02.png" alt="50% de desconto em mouses" />

      <div>
        <SectionTile>Teclados</SectionTile>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner src="/banner-home-03.png" alt="50% de desconto em mouses" />

      <div>
        <SectionTile>Mouses</SectionTile>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
