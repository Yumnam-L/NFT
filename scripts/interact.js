const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.attach(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  //MyNFT deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

  const tx = await myNFT.createNFT("http://localhost:3000/metadata/1.json");
  await tx.wait();

  console.log("NFT minted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
