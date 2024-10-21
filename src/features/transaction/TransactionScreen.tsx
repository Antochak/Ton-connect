import {
  UserRejectsError,
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
  type SendTransactionRequest,
} from '@tonconnect/ui-react';
import {useRouter} from 'next/router';
import {useState} from 'react';
import styles from './styles.module.scss';

type Props = {
  balance: number | null;
};

export const TransactionScreen = ({balance}: Props) => {
  const router = useRouter();
  const address = useTonAddress();
  const wallet = useTonWallet();
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const [amount, setAmount] = useState<string>('');
  const [recipientAddress, setRecipientAddress] = useState<string>('');

  const handleSendTransaction = async () => {
    if (!wallet) {
      console.log('Wallet not exist');
      return;
    }

    const transaction: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 60,
      messages: [
        {
          address,
          amount: '20000',
          stateInit: wallet?.account.walletStateInit,
        },
      ],
    };

    try {
      await tonConnectUI.sendTransaction(transaction);
      console.log('Success!');
    } catch (error) {
      if (error instanceof UserRejectsError) {
        console.warn('Transaction was canceled by user.');
      } else {
        console.error('Transaction error:', error);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type='number'
        placeholder='Количество TON'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type='text'
        placeholder='Адрес получателя'
        value={recipientAddress}
        onChange={(e) => setRecipientAddress(e.target.value)}
      />
      <button onClick={handleSendTransaction}>Send transaction</button>
    </div>
  );
};
