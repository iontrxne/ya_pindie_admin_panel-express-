const fs = require("fs").promises;

//Читаем файл с данными об играх
const readData = async (url) => {
  try {
    const data = await fs.readFile(url, "utf-8");
    const jsonString = JSON.parse(data);
    return jsonString;
  } catch (error) {
    console.log(error);
  }
};

//Записываем изменения в файле с данными об играх
const writeData = async (url, data) => {
  const json = JSON.stringify(data);
  await fs.writeFile(url, json);
};

module.exports = { readData, writeData };