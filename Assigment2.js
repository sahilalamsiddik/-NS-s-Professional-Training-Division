// 1. Callback to Promise


function getData() {
  return new Promise((resolve,reject) => {
    resolve("_Promise message_")
  });
}

getData().then(msg => console.log(msg))





// 2. Async function simulating a network request



async function networkRequest() {
  console.log("Request started...")

  const result = await new Promise((resolve,reject) => {
    resolve("Network response received")
  });

  console.log(result)
}

networkRequest()
