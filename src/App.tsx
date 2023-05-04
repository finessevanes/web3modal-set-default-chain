import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { Web3Button, useWeb3Modal, Web3Modal, useWeb3ModalTheme } from "@web3modal/react";

const chains = [polygon];
const projectId = import.meta.env.VITE_PROJECT_ID;

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  const { setDefaultChain } = useWeb3Modal();
  setDefaultChain(polygon);
  const { setTheme } = useWeb3ModalTheme()


  setTheme({
    themeMode: 'dark',
    themeVariables: {
      '--w3m-font-family': 'Roboto, sans-serif',
      '--w3m-z-index': '10',
      '--w3m-accent-color': '#69B578',
      '--w3m-accent-fill-color': '#000000',
      '--w3m-background-color': '#1C3A28',
      // '--w3m-background-image-url': 'url("https://openclipart.org/image/800px/337244")',
      // '--w3m-logo-image-url': 'url("https://www.clipartmax.com/png/small/232-2321364_barcelona-logo-for-dream-league-url-vector-and-clip-fc-barcelona-logo.png")',
      '--w3m-background-border-radius': '12px',
      '--w3m-container-border-radius': '24px',
      '--w3m-wallet-icon-border-radius': '2em',
      '--w3m-wallet-icon-large-border-radius': '3em',
      '--w3m-wallet-icon-small-border-radius': '1em',
      '--w3m-input-border-radius': '50%',
      '--w3m-notification-border-radius': '2rem',
      '--w3m-button-border-radius': '8px',
      '--w3m-secondary-button-border-radius': '8px',
      '--w3m-icon-button-border-radius': '50%',
      '--w3m-button-hover-highlight-border-radius': '2rem',
      '--w3m-text-big-bold-size': '2rem',
      '--w3m-text-big-bold-weight': 'bold',
      '--w3m-text-big-bold-line-height': '14px',
      '--w3m-text-big-bold-letter-spacing': '1px',
      '--w3m-text-big-bold-text-transform': 'uppercase',
      '--w3m-text-big-bold-font-family': 'Helvetica, sans-serif',
      '--w3m-text-medium-regular-size': '1rem',
      '--w3m-text-medium-regular-weight': 'normal',
      '--w3m-text-medium-regular-line-height': '14px',
      '--w3m-text-medium-regular-letter-spacing': '1px',
      '--w3m-text-medium-regular-text-transform': 'capitalize',
      '--w3m-text-medium-regular-font-family': 'Arial, sans-serif',
      '--w3m-text-small-regular-size': '0.75rem',
      '--w3m-text-small-regular-weight': 'normal',
      '--w3m-text-small-regular-line-height': '14px',
      '--w3m-text-small-regular-letter-spacing': '1px',
      '--w3m-text-small-regular-text-transform': 'capitalize',
      '--w3m-text-small-regular-font-family': 'Helvetica, sans-serif',
      '--w3m-text-small-thin-size': '0.65rem',
      '--w3m-text-small-thin-weight': 'lighter',
      '--w3m-text-small-thin-line-height': '0.8rem',
      '--w3m-text-small-thin-letter-spacing': '0.01em',
      '--w3m-text-small-thin-text-transform': 'none',
      '--w3m-text-small-thin-font-family': 'Arial, sans-serif',
      '--w3m-text-xsmall-bold-size': '0.5rem',
      '--w3m-text-xsmall-bold-weight': 'bold',
      '--w3m-text-xsmall-bold-line-height': '10px',
      '--w3m-text-xsmall-bold-letter-spacing': '-0.03em',
      '--w3m-text-xsmall-bold-text-transform': 'uppercase',
      // '--w3m-text-xsmall-bold-font-family      
    }
  })

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Web3Button />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
