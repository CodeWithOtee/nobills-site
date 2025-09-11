export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  images: string[];
  colors?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "black-shirt",
    slug: "black-shirt",
    title: "NOBILLS Tee — Black",
    price: 50,
    images: [
      "/logo.png",
      "/basicteeblack.png"
    ],
  },
  {
    id: "white-shirt",
    slug: "white-shirt",
    title: "NOBILLS Tee — White",
    price: 50,
    images: [
      "/product2white.png.png",
      "/basicteewhite.png"
    ],
  },
  {
    id: "bold-black",
    slug: "bold-black",
    title: "Bold Triple — Black",
    price: 60,
    images: [
      "/blacknobillsboldtripple.png",
      "/nobillsboldstripple.png"
    ],
  },
  {
    id: "logo-stack",
    slug: "logo-stack",
    title: "Logo Stack Tee",
    price: 60,
    images: [
      "/logo.png",
      "/logolayer3.png"
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
