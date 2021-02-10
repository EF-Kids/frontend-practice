const doSomething = async (result) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(result ?? Math.floor(Date.now() / 1000) % 2 === 1);
    }, 2000);
  });

export default doSomething;
