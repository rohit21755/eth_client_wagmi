import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/RFyN7nf_2i2V3FPY87cgn2gBkYw2v0Wc"),
    // [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/RFyN7nf_2i2V3FPY87cgn2gBkYw2v0Wc"),
  },
})