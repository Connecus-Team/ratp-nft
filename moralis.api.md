
// Hiện lịch sử giao của đồng NFT với tokenid=?
curl -X 'GET' \
  'https://deep-index.moralis.io/api/v2/nft/0x8bEDFf6315e415d549384E4518219bCB0d2Cb832/18/transfers?chain=bsc%20testnet&format=decimal' \
  -H 'accept: application/json' \
  -H 'X-API-Key: IBamhboFk880TB2lwj9y0n98VDjJADXjhE4aOfeRq3t2FitHhyE4iyesgJuSiXGo'


// Hiện danh sách token sở hữu của người dùng với address
curl -X 'GET' \
  'https://deep-index.moralis.io/api/v2/0x02b7a12af1f6329475e697a33546f3a288650112/nft/0x8bEDFf6315e415d549384E4518219bCB0d2Cb832?chain=bsc%20testnet&format=decimal' \
  -H 'accept: application/json' \
  -H 'X-API-Key: IBamhboFk880TB2lwj9y0n98VDjJADXjhE4aOfeRq3t2FitHhyE4iyesgJuSiXGo'