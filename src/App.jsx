import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useConnect, useAccount, useDisconnect, useEnsAvatar, useEnsName, useReadContract } from 'wagmi'
import { config } from '../config'
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <WagmiProvider config={config}>
      <QueryClientProvider client={new QueryClient()}>
       <ConnectWallet />
   {/* <TotalBalance /> */}
      </QueryClientProvider>
      
    </WagmiProvider>

    </>
  )
}

function ConnectWallet() {
  const { connectors, connect } = useConnect()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

if (address) {
 
    return (
      <div>
        
        {address && <div>{address}</div>}
        <button onClick={() => disconnect()}>Disconnect</button>
        <TotalBalance />

      </div>
    )
  
}

  return connectors.map((connector) => (

    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

function TotalBalance() {
  
  const { data, isLoading, error } = useReadContract({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abi: [
      {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    ],
    functionName: 'balanceOf',
    args: ["0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f"]
  })

  return (
    <div>
        Balance  - {JSON.stringify(data?.toString())}
    </div>
  )
}

export default App
