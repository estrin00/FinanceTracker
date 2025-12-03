import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

function TransactionsList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch("http://127.0.0.1:8000/transactions");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Fetching error: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions!</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t.id}>
              <strong>{t.title}</strong> — {t.amount}€ — {t.category} — {t.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionsList;
