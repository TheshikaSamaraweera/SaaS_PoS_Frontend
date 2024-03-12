/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { SubNav } from "./sub-nav";

const cardData: CardProps[] = [
  {
    label: "Chocolate Fingers",
    amount: "Rs. 380.00",
    discription: "A delicious and timeless Sri Lankan favourite",
    icon: DollarSign,
  },
  {
    label: "Mentos Mint",
    amount: "Rs. 100.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Users,
  },
  {
    label: "Lemon Puff",
    amount: "Rs. 130.00",
    discription: "Chocolate biscuits filled with delicious chocolate cream",
    icon: CreditCard,
  },
  {
    label: "Magic Treats",
    amount: "Rs. 290.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Activity,
  },
  {
    label: "Jumbo Peanut",
    amount: "Rs. 420.00",
    discription: "A delicious and timeless Sri Lankan favourite",
    icon: Users,
  },
  {
    label: "Cream Cracker",
    amount: "Rs. 480.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: CreditCard,
  },
  {
    label: "Chocolate Cream",
    amount: "Rs. 405.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Activity,
  },
  {
    label: "Tikiri Marie",
    amount: "Rs. 330.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Users,
  },
  {
    label: "Sun Cracker",
    amount: "Rs. 110.00",
    discription: "A delicious and timeless Sri Lankan favourite",
    icon: CreditCard,
  },
  {
    label: "Magic Treats",
    amount: "Rs. 290.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Activity,
  },
  {
    label: "Mentos Mint",
    amount: "Rs. 100.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Users,
  },
  {
    label: "Jumbo Peanut",
    amount: "Rs. 420.00",
    discription: "A delicious and timeless Sri Lankan favourite",
    icon: CreditCard,
  },
  {
    label: "Cream Cracker",
    amount: "Rs. 480.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Activity,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Point of Sales" />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CardContent className="lg:col-span-1">
        </CardContent>
        <CardContent className="lg:col-span-2">
          <section>
            <SubNav />
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {cardData.map((d, i) => (
                <Card
                  key={i}
                  amount={d.amount}
                  discription={d.discription}
                  icon={d.icon}
                  label={d.label}
                />
              ))}
            </section>
          </section>
        </CardContent>
      </section>
    </div>
  );
}
