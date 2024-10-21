import {useTonAddress} from '@tonconnect/ui-react';
import {useEffect, useState} from 'react';
import {fetchTonBalance} from '~/api';

export const useBalance = () => {
  const address = useTonAddress();
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (address) {
      const getBalance = async () => {
        try {
          setIsLoading(true);
          const balance = await fetchTonBalance(address);
          setBalance(balance);
        } catch (error) {
          console.error('Something went wrong:', error);
        } finally {
          setIsLoading(false);
        }
      };

      getBalance();
    }
  }, [address]);

  return {address, balance, isLoading};
};
