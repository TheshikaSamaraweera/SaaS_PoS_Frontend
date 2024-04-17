/** @format */
"use client";

import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";

type Cashier = {
  _id: string;
  cashierId: string;
  cashierFirstName: string;
  cashierLastName: string;
  cashierPhone: string;
  cashierBranch: string;
  action: string;
};

type Props = {};
export default function UsersPage({}: Props) {
  const [cashiers, setCashiers] = useState<Cashier[]>([]);
  const columns: ColumnDef<Cashier>[] = [
    {
      accessorKey: "cashierId",
      header: "Cashier id",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 items-center">
            <img
              className="h-10 w-10"
              src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
                "cashierId"
              )}`}
              alt="user-image"
            />
            <p>{row.getValue("cashierId")} </p>
          </div>
        );
      },
    },
    {
      accessorKey: "cashierFirstName",
      header: "First name",
    },
    {
      accessorKey: "cashierLastName",
      header: "Last name",
    },
    {
      accessorKey: "cashierPhone",
      header: "Phone number",
    },
    {
      accessorKey: "cashierBranch",
      header: "Branch",
    },

    {
      accessorKey: "action",
      header: "action",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => {
              console.log("Edit:", row.original);
            }}
          >
            EDIT
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            onClick={async () => {
              try {
                const response = await fetch(
                  `http://localhost:3000/cashier/${row.original._id}`,
                  {
                    method: "DELETE",
                  }
                );
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                setCashiers(
                  cashiers.filter(
                    (cashier: Cashier) =>
                      cashier.cashierId !== row.original.cashierId
                  )
                );
              } catch (error) {
                console.error("Error deleting cashier:", error);
              }
            }}
          >
            DELETE
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3000/cashier")
      .then((response) => response.json())
      .then((data) => setCashiers(data));
  }, []);

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Stock / Store" />
      <DataTable columns={columns} data={cashiers} />
    </div>
  );
}
