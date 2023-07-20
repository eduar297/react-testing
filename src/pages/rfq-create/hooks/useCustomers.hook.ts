import { useState, useEffect } from 'react';
import { CustomerFormValues } from '../components/Customer/types';

const fetchCustomers = (): Promise<CustomerFormValues[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Acme Inc.',
          domain: 'acme.com',
          logo: 'https://acme.com/logo.png',
          address: '123 Main Street',
          city: 'New York',
          country: 'US',
          state: 'NY',
          zip: 10001,
          numberOfEmployees: 100,
          founded: 2000,
          website: 'https://acme.com',
          duns: 123456789,
          taxId: 987654321,
          legalBusinessName: 'Acme Incorporated',
          about: 'We make the best products in the world.',
        },
        {
          name: 'Widget Co.',
          domain: 'widget.co',
          logo: 'https://widget.co/logo.png',
          address: '456 High Street',
          city: 'London',
          country: 'GB',
          state: '',
          zip: 10001,
          numberOfEmployees: 50,
          founded: 2010,
          website: 'https://widget.co',
          duns: 123456789,
          taxId: 987654321,
          legalBusinessName: 'Widget Company Ltd.',
          about: 'We make the most innovative widgets in the market.',
        },
      ]);
    }, 1000);
  });
};

const useCustomers = (): {
  customers: CustomerFormValues[];
  loading: boolean;
  error: any;
} => {
  const [customers, setCustomers] = useState<CustomerFormValues[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    setCustomers([]);
    setError(null);
    fetchCustomers()
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { customers, loading, error };
};

export default useCustomers;
