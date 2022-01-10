import React, { useEffect, useState } from "react";


//{HTMLInputElement.file.lastModified}

function FileUpload (){
  const [images, setImages] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);

  useEffect(() =>{
    if(images.length<1) return;
    const newImageURLs =[];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    setImagesURLs(newImageURLs);
  }, [images]);

  function onUpload(e){
    setImages([...e.target.files])
  }


  return (
    <div className="fileupload">
      <div className="uploadInput">
        <label>Upload your files</label>
        <input type="file" name="file" id="images" accept="image/*" multiple onChange={onUpload}/>
      </div>
      <div className="uploadButton">
        <button type="submit">Submit</button>
      </div>
      <div className="uploadPreview">
        <p>your pics below</p>
        {imagesURLs.map(imageSrc => <img src={imageSrc} alt="images" />)}
      </div>
    </div>
    )
}

export default FileUpload;