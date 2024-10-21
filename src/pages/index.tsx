import {useTonAddress, useTonConnectUI, useTonWallet} from '@tonconnect/ui-react';
import {useState} from 'react';
import {HomeView, TransactionScreen} from '~/features';
import {ScreenViewEnum} from '~/shared';

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState<ScreenViewEnum>(ScreenViewEnum.HOME);

  const ComponentMap = {
    [ScreenViewEnum.HOME]: (
      <HomeView onTransactionRedirect={() => setCurrentScreen(ScreenViewEnum.TRANSACTION)} />
    ),
    [ScreenViewEnum.TRANSACTION]: (
      <TransactionScreen onBackRedirect={() => setCurrentScreen(ScreenViewEnum.HOME)} />
    ),
  };

  return <div>{ComponentMap[currentScreen]}</div>;
}
