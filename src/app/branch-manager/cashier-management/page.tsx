/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Cashier = {
  cashierID: string;
  cashierName: string;
  branch: string;
  action: string;
};

const columns: ColumnDef<Cashier>[] = [
  {
    accessorKey: "cashierID",
    header: "cashier id",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "cashierID"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("cashierID")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "cashierName",
    header: "cashier name",
  },
  {
    accessorKey: "branch",
    header: "branch",
  },
  {
    accessorKey: 'action',
    header: 'action',
    cell: ({ row }) => (
      <div className="flex gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => {
            // Handle the edit action
            console.log('Edit:', row.original);
          }}
        >
          EDIT
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => {
            // Handle the delete action
            console.log('Delete:', row.original);
          }}
        >
          DELETE
        </button>
      </div>
    ),
  },
  
];

const data: Cashier[] = [
  {
    cashierID: "001",
    cashierName: "John Doe",
    branch: "Branch 1",
    action: "    EDIT   DELETE    ",
  },
  {
    cashierID: "002",
    cashierName: "aMarie Doe",
    branch: "Branch 2",
    action: "    EDIT   DELETE    ",
  },
  {
    cashierID: "003",
    cashierName: "Jane Doe",
    branch: "Branch 3",
    action: "    EDIT   DELETE    ",
  },
  {
    cashierID: "004",
    cashierName: "Doe",
    branch: "Branch 4",
    action: "    EDIT   DELETE    ",
  },
  {
    cashierID: "005",
    cashierName: "John Doe",
    branch: "Branch 5",
    action: "    EDIT   DELETE    ",
  },
  {
    cashierID: "006",
    cashierName: "Marie Doe",
    branch: "Branch 6",
    action: "    EDIT   DELETE    ",
  },
  {
    cashierID: "007",
    cashierName: "Jane Doe",
    branch: "Branch 7",
    action: "    EDIT   DELETE    ",
  },
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Stock / Store" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
