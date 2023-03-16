let assetTime = {};

const beforeSave = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      assetTime.value = "123";
      resolve(assetTime);
    }, 2000);
  });
};
const handleSave = async () => {
  await beforeSave();
  console.log("后面的代码");
};

handleSave();
