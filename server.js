function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log("Containers rule! commit 1");
    await sleep(5000);
  }
}

main();
