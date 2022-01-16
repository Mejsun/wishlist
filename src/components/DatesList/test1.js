import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";

function FileUpload (){
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() =>{
    if(images.length < 1) return;
    const newImageURLs =[];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onUpload(e){
   setImages([...e.target.files])
    console.log(imageURLs)
  }

  function deleteFile(i){
    const image = [...imageURLs]
    console.log(images[i])
    if (window.confirm('This item will be deleted!')) {image.splice(i,1)}
    else{return images}
    setImageURLs(image)}
    

    return (
      <div className="fileupload">
        <InputGroup>
          <input type="file" name="file" id="images" accept="image/*" multiple onChange={onUpload}
            className="form-control shadow-none" 
          />
        <Button variant="outline-secondary" id="button-addon2" type='submit'  className='shadow-none'> <i className="fas fa-plus"></i></Button>
        </InputGroup>
        <div className="uploadPreview">
          {imageURLs.map((imageSrc,i) =>
              <div className="uploadedImg">
              <img src={imageSrc} alt="images"/>    
              <button type='button' onClick={()=>{deleteFile(i)}}   className='btn delete'> <i className='fas fa-trash'></i></button>       
              </div>   
              )}
        </div>
      </div>
      )
    }
    
    export default FileUpload;
    
    
    /*
  
    */