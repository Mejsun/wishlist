import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";

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
      <InputGroup>
        <input type="file" name="file" id="images" accept="image/*" multiple onChange={onUpload}
          className="form-control shadow-none" 
        />
      <Button variant="outline-secondary" id="button-addon2" type='submit' className='shadow-none'> <i className="fas fa-plus"></i></Button>
      </InputGroup>
      <div className="uploadPreview">
        <p>your pics below</p>
        {imagesURLs.map(imageSrc => <img src={imageSrc} alt="images" />)}
      </div>
    </div>
    )
}

export default FileUpload;