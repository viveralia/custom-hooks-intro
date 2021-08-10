import { NextPage } from "next";

import useInvoices from "../hooks/useInvoices";

// 1. Los hooks siempre son lo primero que se llama
// 2. Los hooks nunca se pueden llamar condicionalmente
const InvoicesPage: NextPage = () => {
  const { error, invoices, loading } = useInvoices();

  return (
    <div>
      <h1>Invoices</h1>
      {invoices.map((invoice) => (
        <article key={invoice.title}>
          <p>{invoice.id}</p>
          <h2>{invoice.title}</h2>
        </article>
      ))}
      {loading && <span>...</span>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default InvoicesPage;
