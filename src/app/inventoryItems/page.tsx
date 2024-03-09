/** @format */
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";

const cardData: CardProps[] = [
  {
    label: "Tea",
    amount: "RS.450",
    discription: "green tea",
    icon: ShoppingCartIcon,
    image: '/images/width1960.jpg',
    
  },
    {
      label: "Cocacola",
      amount: "RS.850",
      discription: "sugar free cocacola",
      icon: ShoppingCartIcon,
      image: '/images/width1960.jpg',
    },
    {
      label: "sprite",
      amount: "RS.600",
      discription: "cool sprite",
      icon: ShoppingCartIcon,
      image: '/images/width1960.jpg',
    },
    {
      label: "soap",
      amount: "RS.500",
      discription: "white soap",
      icon: ShoppingCartIcon,
      image: '/images/width1960.jpg',
    },
    {
      label: "ice Cream",
      amount: "RS.500",
      discription: "white soap",
      icon: ShoppingCartIcon,
      image: '/images/width1960.jpg',
    },
    {
      label: "Shampoo",
      amount: "RS.500",
      discription: "white soap",
      icon: ShoppingCartIcon,
      image: '/images/width1960.jpg',
    },
    {
      label: "Biscuit",
      amount: "RS.500",
      discription: "white soap",
      icon: ShoppingCartIcon,
      image: '/images/width1960.jpg',
    },
    {
      label: "Oil",
      amount: "RS.500",
      discription: "white soap",
      icon: ShoppingCartIcon,
      image: '/images/width1960.jpg',
    },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
        
      <PageTitle title="Inventory Items" />
      <Button style={{ width: "200px" }}>Add new Items</Button>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
           
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
            image={d.image}
          />
        ))}
      </section>
    </div>
  );
}
