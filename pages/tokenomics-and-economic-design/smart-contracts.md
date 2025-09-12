# Smart Contracts

| Contract                     | Address                                    | Chain |
| ---------------------------- | ------------------------------------------ | ----- |
| OpenxAI (ERC20)              | 0xa66b448f97cbf58d12f00711c02bac2d9eac6f7f | Base  |
| OpenxAI Claimer              | 0x1D2A4145bf920E674D05C26DE57Aad5eAFF3772f | Base  |
| Tokenized Server V1 (ERC721) | 0x5d3a48B6f16Ba9a830b19B452d8DAA0409e0FE05 | Base  |
| GPU Credit Deposit           | 0x0DA956C8865633AC2E7f02d935EBa495Aae63598 | Base  |
| OpenxAI Token Vault          | 0xf0c25895632632047f170cf4dda0e41a8ba25789 | Base  |
| OpenxAI Opportunity Fund     | 0x2174Ee12b8f21Cf6BC04f6b06a9Fb7333C008492 | Base  |
| OpenxAI Vesting (1 year)     | 0x4f4ae633345b77baf651fbd948ae12c75b9fcb2a | Base  |
| OpenxAI Vesting (2 year)     | 0x24bd6fe22730876bc02bd91c85fb268c8b86c843 | Base  |
| OpenxAI Vesting (3 year)     | 0x2006ddd6338760918434fcd51f74832500660b91 | Base  |
| OpenxAI Vesting (4 year)     | 0x5fb9c6442da158dcdc66804f4cafb8bf1c42025a | Base  |
| OpenxAI Vesting (5 year)     | 0xaa15e4ee9f86744d2d3e4812e0f285d1817251d3 | Base  |
| OpenxAI Vesting (6 year)     | 0xec2e1a7d9c66cab82d9234cb199ae6df96ad9084 | Base  |
| OpenxAI Vesting (7 year)     | 0xdc72273eb7974a78eeff690c59f4288cc3a77f1f | Base  |
| OpenxAI Vesting (8 year)     | 0x0d62e1b68c1f2b2a21bb7e817714961d9152cbbc | Base  |

## [OpenxAI (ERC20)](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAI.sol)

The project token.   
[Audit](https://github.com/OpenxAI-Network/openxai-token/blob/main/audit%2FCyberscope.pdf)

## [OpenxAI Claimer](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAIClaimer.sol)

Contract that distributes OpenxAI tokens based on off-chain conditions.   
[Audit](https://github.com/OpenxAI-Network/openxai-token/blob/main/audit%2FCyberscope.pdf)

## [Tokenized Server V1 (ERC721)](https://github.com/OpenxAI-Network/tokenized-server/blob/main/src/OpenxAITokenizedServerV1.sol)

NFT that represents tokenized server ownership.

## [GPU Credit Deposit](https://github.com/OpenxAI-Network/tokenized-server/blob/main/src/OpenxAICreditDeposit.sol)

Contract that allows users to buy GPU credits.

## [OpenxAI Token Vault](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAINonCirculatingSupplyVault.sol)

Contract that will hold all unvested but non-circulating (undistributed) OpenxAI tokens.

## [OpenxAI Opportunity Fund](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAINonCirculatingSupplyVault.sol)

Tokens set aside for opportunities that aren't known or present at time of launch.

## [OpenxAI Vesting](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAINonCirculatingSupplyVesting.sol)

Contract that will release OpenxAI tokens according to the vesting schedule. These tokens are released into the OpenxAI Token Vault.   
[Audit](https://github.com/Plopmenz/vesting/blob/main/audits%2FCyberscope.pdf)