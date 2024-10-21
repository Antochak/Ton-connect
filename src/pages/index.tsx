import {useTonAddress, useTonConnectUI} from '@tonconnect/ui-react';
import {useEffect, useState} from 'react';
import {fetchTonBalance} from '~/api/fetcher';
import {TransactionScreen} from '~/features/transaction';
import {Header} from '~/shared';

export default function HomePage() {
  const address = useTonAddress();
  const [balance, setBalance] = useState<number | null>(null);
  const [currentScreen, setCurrentScreen] = useState<'home' | 'transaction'>('home');
  const [tonConnectUi] = useTonConnectUI();

  const handleSwitchToTransaction = () => {
    setCurrentScreen('transaction');
  };

  const handleSwitchToInit = () => {
    setCurrentScreen('home');
  };

  useEffect(() => {
    if (address) {
      const getBalance = async () => {
        try {
          const balance = await fetchTonBalance(address);
          setBalance(balance);
        } catch (error) {
          console.error('Something went wrong:', error);
        }
      };

      getBalance();
    }
  }, [address]);
  return (
    <div>
      <Header balance={balance} />
      <div>
        {currentScreen === 'transaction' ? (
          <button onClick={() => setCurrentScreen('home')}>Back</button>
        ) : (
          <button onClick={() => setCurrentScreen('transaction')}>Transaction</button>
        )}
      </div>
      {currentScreen === 'transaction' ? (
        <TransactionScreen balance={balance} />
      ) : (
        <button onClick={() => tonConnectUi.openModal()}>
          Connect wallet to send the transaction
        </button>
      )}
    </div>
  );
}
