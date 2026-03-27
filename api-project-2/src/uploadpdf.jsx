import { useState } from "react";
import axios from "axios";

function UploadPDF() {

  const [file, setFile] = useState(null);
  const [docId, setDocId] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadPDF = async () => {

    const formData = new FormData();
    formData.append("file", file);

    try {

      const res = await axios.post(
        "https://bom.tslimpact.com/tender/api/upload-pdf",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      console.log(res.data);

      setDocId(res.data.doc_id);   // important

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>

      <input type="file" onChange={handleFileChange} />

      <button onClick={uploadPDF}>
        Upload
      </button>

    </div>
  );
}

export default UploadPDF;