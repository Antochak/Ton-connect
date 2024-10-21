import {TonConnectButton, useTonWallet} from '@tonconnect/ui-react';
import styles from './styles.module.scss';
import type {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export const Header = ({children}: Props) => {
  const wallet = useTonWallet();

  return (
    <header className={styles.main}>
      <div className={styles.container}>
        {children}
        <TonConnectButton />
      </div>
    </header>
  );
};
