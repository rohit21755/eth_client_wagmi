import { http, createConfig, injected } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
      connectors: [
        injected(),
      ],
	  transports: {
	    [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/RFyN7nf_2i2V3FPY87cgn2gBkYw2v0Wc"),
  },
})