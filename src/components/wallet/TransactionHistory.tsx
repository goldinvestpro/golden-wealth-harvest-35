import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const realTransactions = [
  {
    id: 1,
    date: "2024-03-20",
    description: "Monthly Subscription",
    amount: 29.99,
    status: "completed",
  },
  {
    id: 2,
    date: "2024-03-19",
    description: "Premium Plan Upgrade",
    amount: 99.99,
    status: "completed",
  },
  {
    id: 3,
    date: "2024-03-18",
    description: "Refund - Basic Plan",
    amount: -19.99,
    status: "refunded",
  },
  {
    id: 4,
    date: "2024-03-17",
    description: "Annual Subscription",
    amount: 299.99,
    status: "completed",
  },
  {
    id: 5,
    date: "2024-03-16",
    description: "Add-on Purchase",
    amount: 9.99,
    status: "completed",
  },
];

const demoTransactions = [
  {
    id: 1,
    date: "2024-03-20",
    description: "Demo Subscription",
    amount: 9.99,
    status: "completed",
  },
  {
    id: 2,
    date: "2024-03-19",
    description: "Demo Plan Upgrade",
    amount: 19.99,
    status: "completed",
  },
  {
    id: 3,
    date: "2024-03-18",
    description: "Demo Refund",
    amount: -4.99,
    status: "refunded",
  },
];

interface TransactionHistoryProps {
  isDemoAccount?: boolean;
}

export function TransactionHistory({ isDemoAccount = false }: TransactionHistoryProps) {
  const transactions = isDemoAccount ? demoTransactions : realTransactions;

  return (
    <div className="rounded-lg border bg-navy-500 border-white/10 overflow-x-auto">
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Transaction History</h2>
        <div className="min-w-[600px]">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-white/5 border-white/10">
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Description</TableHead>
                <TableHead className="text-white text-right">Amount</TableHead>
                <TableHead className="text-white">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="hover:bg-white/5 border-white/10">
                  <TableCell className="text-gray-300">
                    {new Date(transaction.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-gray-300">{transaction.description}</TableCell>
                  <TableCell className={`text-right ${
                    transaction.amount < 0 ? 'text-red-400' : 'text-green-400'
                  }`}>
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100/10 text-green-400' 
                        : 'bg-red-100/10 text-red-400'
                    }`}>
                      {transaction.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="p-4 border-t border-white/10 overflow-x-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="hidden sm:block">
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem className="hidden sm:block">
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem className="hidden sm:block">
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}