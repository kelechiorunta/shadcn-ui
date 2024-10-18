// import { Payment, columns } from "./columns"
import { columns } from "@/components/Datatable Payments/PaymentColumns"
import { DataTable } from "@/components/Datatable Payments/PaymentDatatable"

async function getData(){
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
        id: "838ed52f",
        amount: 300,
        status: "pending",
        email: "kele@gmail.com",
      },
      {
        id: "729fd52f",
        amount: 100,
        status: "pending",
        email: "greg@gmail.com",
      },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
