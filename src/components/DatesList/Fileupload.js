import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";

function FileUpload ({updateFilesCb, ...otherProps}){
  const [files, setFiles] = useState({});
  
  function addNewFiles(newFiles) {
    for (let file of newFiles) {
      if (!otherProps.multiple) {return { file };} files[file.name] = file;}
    return { ...files };
  };

  function convertNestedObjectToArray (nestedObj){
  Object.keys(nestedObj).map((key) => nestedObj[key]);}

  function callUpdateFilesCb (files) {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);};

  function onUpload(e) {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  function deleteFile(fileName){
    if (window.confirm('This item will be deleted!')) {
      delete files[fileName];
      setFiles({...files});
      callUpdateFilesCb({...files})}
    else{return files}
  }
    

    return (
      <div className="fileupload">
        <InputGroup>
          <input type="file" name="file" id="images" accept="image/*" multiple onChange={onUpload} value=""
          {...otherProps}
            className="form-control shadow-none" 
          />
        </InputGroup>
        <div className="uploadPreview">
        {Object.keys(files).map((fileName, i) => {
            let file = files[fileName];
            return (
              <div key={fileName} className="uploadedImg">
                {(<img src={URL.createObjectURL(file)} alt={`file preview ${i}`}/>)}
                <Button type='button' variant="outline-none" id="button-addon2" onClick={()=>{deleteFile(fileName)}} className='btn delete shadow-none border-0'> 
                <i className='fas fa-trash'></i></Button>       
              </div>
            );
          })}
        </div>
      </div>
      )
    }
    
    export default FileUpload;