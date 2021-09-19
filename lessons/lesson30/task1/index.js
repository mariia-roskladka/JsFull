const addImage = (imgSrc) => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement("img");
        imgElem.setAttribute("alt", "My photo");
        imgElem.src = imgSrc;
        const containerElem = document.querySelector(".page");
        containerElem.append(imgElem);

        const onImageLoaded = () => {
            resolve({ width: imgElem.width, height: imgElem.height });
        };

        imgElem.addEventListener("load", onImageLoaded);
        imgElem.addEventListener("error", () =>
            reject(new Error("Image load is failed..."))
        );
    });
    return p;
};

const imgSrc =
    "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";
// "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigsstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

const result = addImage(imgSrc);

console.log(result);
result.then((data) => console.log(data));

result.then((data) => {
    const sizeElem = document.querySelector(".image-size");
    sizeElem.textContent = `${data.width} x ${data.height}`;
});