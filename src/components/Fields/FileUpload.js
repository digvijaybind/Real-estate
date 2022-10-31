import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload({
  disabled,
  label,
  required,
  filesList,
  multiple,
}) {
  const [files, setFiles] = useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    disabled: disabled,
  });

  useEffect(() => {
    if (acceptedFiles) {
      setFiles([...files, acceptedFiles && acceptedFiles]);
    }
  }, [acceptedFiles]);

  useEffect(() => {
    let list = [];
    files.forEach((data) => {
      if (data[0] !== undefined) {
        list.push(data[0]);
      }
    });
    filesList(list);
  }, [files]);

  return (
    <div className="dropzone-block">
      {label && (
        <label>
          {label} {required && <span className="requiredSymbol">*</span>}
        </label>
      )}
      <section className="dropzoneContainer">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} multiple={multiple ? multiple : false} />
          <p>{"Drag 'n' drop some files here, or click to select files"}</p>
        </div>
        {/* {files.length > 0 && (
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      )} */}
      </section>
    </div>
  );
}
