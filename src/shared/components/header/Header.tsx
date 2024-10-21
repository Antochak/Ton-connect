import {TonConnectButton} from '@tonconnect/ui-react';
import type {ReactNode} from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const Header = ({children}: Props) => (
  <header className={styles.main}>
    <div className={styles.container}>
      {children}
      <TonConnectButton />
    </div>
  </header>
);
