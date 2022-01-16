/*import React, { useRef, useState } from "react";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };
  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };
  const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const callUpdateFilesCb = (files) => {
  const filesAsArray = convertNestedObjectToArray(files);
  updateFilesCb(filesAsArray);
};
  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };
  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };
  return (
    <>
      <section>
        <label>{label}</label>
        <p>Drag and drop your files anywhere or</p>
        <button type="button" onClick={handleUploadBtnClick}>
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
        </button>
        <input
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </section>

      
      <article>
        <span>To Upload</span>
        <section>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <section key={fileName}>
                <div>
                  {isImageFile && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                  <div isImageFile={isImageFile}>
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <i className="fas fa-trash-alt" onClick={() => removeFile(fileName)} />
                    </aside>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </article>
    </>
  );
};

export default FileUpload;




---simplified
import React, {useState } from "react";

function FileUpload ({updateFilesCb,...otherProps}) {
  
  const [files, setFiles] = useState({});
  
  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
        if (!otherProps.multiple) {return { file };}
        files[file.name] = file;
    }
    return { ...files };
  };
  const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

function callUpdateFilesCb (files) {
  const filesAsArray = convertNestedObjectToArray(files);
  updateFilesCb(filesAsArray);
};
  function handleNewFileUpload (e) {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  return (
    <> 
        <input
          type="file"
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            return (
              <section key={fileName}>
                <div>{(<img
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                </div>
              </section>
            );
          })}
        
    </>
  );
};

export default FileUpload;
*/