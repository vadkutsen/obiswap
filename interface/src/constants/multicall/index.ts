import { ChainId } from 'obiswap'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../obscuro_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.STANDALONE]: '0xF8cef78E923919054037a1D03662bBD884fF4edf',
  [ChainId.MOONROCK]: multicall,
  [ChainId.MOONBASE]: multicall,
  [ChainId.MOONSHADOW]: multicall,
  [ChainId.OBSCUROTESTNET]: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
