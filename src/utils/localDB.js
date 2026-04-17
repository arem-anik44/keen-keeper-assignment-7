
const getData = () => {
  const data = localStorage.getItem("interactions");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};


const saveData = (newItem) => {
  const data = getData();
  data.push(newItem);
  localStorage.setItem("interactions", JSON.stringify(data));
};

export { getData, saveData };