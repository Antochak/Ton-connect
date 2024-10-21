import {TonConnectButton, useTonWallet} from '@tonconnect/ui-react';
import styles from './styles.module.scss';

type Props = {
  balance: number | null;
};

export const Header = ({balance}: Props) => {
  const wallet = useTonWallet();

  return (
    <header className={styles.main}>
      <div className={styles.container}>
        <p className={styles.text}>{wallet ? `Balance: ${balance} TON` : 'Welcome'}</p>
        <TonConnectButton />
      </div>
    </header>
  );
};
