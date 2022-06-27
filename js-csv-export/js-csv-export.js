const exportToCsv = (data, fileName) => {
  let result = "";

  if (data && Array.isArray(data) && data.length) {
    data.forEach((row) => {
      const columns = Object.keys(row);
      columns.forEach((column) => {
        result += row[column] + ",";
      });

      result += "\r\n";
    });

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(result));
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  } else {
    console.warn("Source list is invalid!", "exportToCsv");
  }
};
