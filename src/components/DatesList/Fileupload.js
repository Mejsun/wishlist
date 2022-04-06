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
      <div className="fileupload border rounded bg-light">
        <InputGroup>
          <input type="file" name="file" id="images" accept="image/*" multiple onChange={onUpload} value=""
          {...otherProps}
            className="form-control shadow-none" 
          />
        </InputGroup>
        <div>
        <section className="uploadPreview d-flex m-1 justify-content-center flex-wrap overflow-auto">
        {Object.keys(files).map((fileName, i) => {
            let file = files[fileName];
            return (
              <div key={fileName} className="uploadedImg d-flex justify-content-center rounded border m-1">
                {(<img src={URL.createObjectURL(file)} alt={`file preview ${i}`}/>)}
                <Button type='button' variant="outline-none" id="button-addon2" onClick={()=>{deleteFile(fileName)}} className='btn delete shadow-none border-0 text-secondary p-1'> 
                <i className='fas fa-trash'></i></Button>       
              </div>
            );
          }).reverse()}
        </section>
        </div>
          
      </div>
      )
    }
    
    export default FileUpload;