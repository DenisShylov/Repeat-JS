const addImage = (imgSrc) => {
  const promise = new Promise((resolse, reject) => {
    const containerElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.src = imgSrc;
    imgElem.setAttribute('alt', 'My Photo');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolse({ width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () =>
      reject(new Error('Image load is failed'))
    );
  });
  return promise;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resultPromise = addImage(imgSrc);

resultPromise.then((value) => console.log(value));
resultPromise.catch((error) => console.log(error));

// callack function
// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const { width, height } = data;
//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };
