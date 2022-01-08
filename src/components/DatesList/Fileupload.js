import React, { useState, useRef } from "react";
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel
} from "./file-upload.styles";



function FileUpload ({label,
    updateFilesCb,
    maxFileSizeInBytes = 50000,
    ...otherProps})  {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});

    const addNewFiles = (newFiles)=> {
      for (let file of newFiles){
        if(file.size<=maxFileSizeInBytes){
          if(!otherProps.multiple){return {file};}
          files[file.name]=file;
        }}return {...files}}
    
    const callUpdateFilesCb = (files) => {
      const filesAsArray = (nestedObj) =>
        Object.keys(nestedObj).map((key) => nestedObj[key]);
        updateFilesCb(filesAsArray);
      };

    function handleNewFileUpload (e){
      const { files: newFiles } = e.target;
      if (newFiles.length) {
        let updatedFiles = addNewFiles(newFiles);
        setFiles(updatedFiles);
        callUpdateFilesCb(updatedFiles);
    }}

    function uploadBtnClick (){fileInputField.current.click();}
    
    function removeFile (fileName) {
      delete files[fileName];
      setFiles({ ...files });
      callUpdateFilesCb({ ...files });
    };
  return (
    <>
    <FileUploadContainer>
      <InputLabel>{label}</InputLabel>
      <DragDropText>Drag and drop your files anywhere or</DragDropText>
      <UploadFileBtn type="button" onClick={uploadBtnClick}>
        <i className="fas fa-file-upload" />
        <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
      </UploadFileBtn>
      <FormField 
        type="file" 
        ref={fileInputField} 
        onChange={handleNewFileUpload}
        title=""
        value=""
        {...otherProps}
      />
    </FileUploadContainer>

    <FilePreviewContainer>
        <span>To Upload</span>
        <PreviewList>
      {Object.keys(files).map((fileName, index)=>{
        let file = files[fileName];
        let isImageFile = file.type.split('/')[0] === 'image'
        return (
          <PreviewContainer key={fileName}>
          <div>
            {isImageFile && (<ImagePreview src= {URL.createObjectURL(file)} alt={`file preview ${index}`}/>)}
            <FileMetaData isImageFile={isImageFile}>
              <span>{file.name}</span>
              <aside> <RemoveFileIcon className="fas fa-trash" onClick={() => removeFile(fileName)}/> </aside>
              </FileMetaData>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
    </>
  );
}

export default FileUpload;