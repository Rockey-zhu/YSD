let myAjax = function (url,data) {
  return new Promise(function (reslove, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.status === 200 && xhr.readyState === 4) {
        let json = JSON.parse(xhr.responseText);
        reslove(json);
      } else if (xhr.status !== 200 && xhr.readyState == 4) {
        reject("error");
      }
    };
  });
};
