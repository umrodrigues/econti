import { IHeaderMenu } from "@/app/packages/types/header/HeaderMenu";

export const headerMenuMock: IHeaderMenu =  {
links: [
  {
    title: "Início",
    items: [
      { text: "Home", url: "/" },
    ]
  },
  {
    title: "Serviços",
    items: [
      { text: "Consultoria", url: "/services/consulting" },
      { text: "Desenvolvimento", url: "/development" }
    ]
  },
  {
    title: "Produtos",
    items: [
      { text: "Produto A", url: "/products/a" },
      { text: "Produto B", url: "/products/b" }
    ]
  },
]
};