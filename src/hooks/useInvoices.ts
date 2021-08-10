import { useEffect, useState } from "react";

interface IInvoice {
  id: number;
  title: string;
}

const useInvoices = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [invoices, setInvoices] = useState<IInvoice[]>([]);

  useEffect(() => {
    // Promise based approach
    // fetch("http://localhost:5000/invoices")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setInvoices(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => setError(error.message));

    // Async-await IIFE approach
    // (async () => {
    //   try {
    //     const response = await fetch("http://localhost:5000/invoices");
    //     const data = await response.json();
    //     setInvoices(data);
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // })();

    const fetchInvoices = async () => {
      try {
        const response = await fetch("http://localhost:5000/invoices");
        const data = await response.json();
        setInvoices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  return { loading, invoices, error };
};

export default useInvoices;
