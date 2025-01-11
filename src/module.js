console.log("module inmported");

async function start() {
    await new Promise(resolve => setTimeout(resolve, 1000));
}

start();