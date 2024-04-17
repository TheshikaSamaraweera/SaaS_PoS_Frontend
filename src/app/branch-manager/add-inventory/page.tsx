"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import PageTitle from "@/components/PageTitle";
import { CardContent } from "@/components/Card";
import axios from "axios";

const formSchema = z.object({
  itemID: z.string(),
  itemName: z.string(),
  quantity: z.string(),
  supply: z.string(),
  date: z.string(),
  unitPrice: z.string(),
  sellPrice: z.string(),
  description: z.string(),
  category: z.string(),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemID: "",
      itemName: "",
      quantity: "",
      supply: "",
      date: "",
      unitPrice: "",
      sellPrice: "",
      description: "",
      category: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/inventory",
        values
      );
      console.log("Inventory created:", response.data);
      alert(`${values.itemName} added to inventory successfully!`);
    } catch (error) {
      console.error("Error creating inventory:", error);
      alert("Error adding item to inventory!");
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Add new item" />
      <section>
        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <CardContent className="lg:col-span-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Insert Image"
                className="w-64 h-64 mb-4"
              />
              <p className="text-gray-600 text-center">
                Click or drag image to upload
              </p>
            </div>
          </CardContent>

          <CardContent className="lg:col-span-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="max-w-md w-full flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="itemID"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Item id</FormLabel>
                        <FormControl>
                          <Input placeholder="Item Code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="itemName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Item Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Item Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Quantity</FormLabel>
                        <FormControl>
                          <Input placeholder="Quantity" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="supply"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Supply</FormLabel>
                        <FormControl>
                          <Input placeholder="Supply" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Date</FormLabel>
                        <FormControl>
                          <Input placeholder="Date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="unitPrice"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Unit Price</FormLabel>
                        <FormControl>
                          <Input placeholder="Unit Price" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="sellPrice"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Sell Price</FormLabel>
                        <FormControl>
                          <Input placeholder="Sell Price" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-bold">Category</FormLabel>
                        <FormControl>
                          <Input placeholder="Snacks / BabyProducts / Fashion / Stationary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button type="submit" className="w-full font-bold">
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </main>
      </section>
    </div>
  );
}
