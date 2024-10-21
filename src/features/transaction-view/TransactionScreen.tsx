import {
  UserRejectsError,
  useTonConnectUI,
  useTonWallet,
  type SendTransactionRequest,
} from '@tonconnect/ui-react';
import {useState} from 'react';
import {useBalance} from '~/hook';
import {Header} from '~/shared';
import styles from './styles.module.scss';

type Props = {
  onBackRedirect: VoidFunction;
};
export const TransactionScreen = ({onBackRedirect}: Props) => {
  const wallet = useTonWallet();
  const {address, balance, isLoading} = useBalance();

  const [tonConnectUI] = useTonConnectUI();

  const [amount, setAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  console.log(isAmountValid);

  const handleSendTransaction = async () => {
    if (!wallet) {
      console.warn('Wallet not exist');
      return;
    }

    const transaction: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 60,
      messages: [
        {
          address,
          amount: amount,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAddress(recipientAddress)) {
      setIsAddressValid(false);
      return;
    }
    setIsAddressValid(true);
    if (balance !== null && parseFloat(amount) > balance) {
      setIsAmountValid(false);
      return;
    }
    handleSendTransaction();
  };

  return (
    <div>
      <Header>
        <button onClick={onBackRedirect}>Back</button>
      </Header>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <div>
            <input
              type='number'
              placeholder='Amount'
              value={amount}
              min={0}
              onChange={(e) => {
                let value = +e.currentTarget.value;
                if (value < 1) {
                  value = 0;
                }
                setAmount(value.toString());
              }}
            />
            {!isAmountValid && <p style={{color: 'red'}}>Balance to low</p>}
          </div>
          <div>
            <input
              type='text'
              placeholder='Address'
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
            />
            {!isAddressValid && <p style={{color: 'red'}}>Invalid wallet address</p>}
          </div>
          <button className={styles.button} type='submit'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

const validateAddress = (address: string) => {
  const addressRegex = /^UQ[a-zA-Z0-9_-]{46}$/;
  return addressRegex.test(address);
};
