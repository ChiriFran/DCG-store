import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase/config'; // Asegúrate de importar tu configuración de firebase

const UploadLocalImages = () => {
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFilesChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleUpload = () => {
    images.forEach((image) => {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(prog);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const articleId = image.name.split('.')[0]; // Asume que el nombre del archivo es el ID del artículo
            const articleRef = doc(db, 'articles', articleId);
            updateDoc(articleRef, { imageUrl: downloadURL }).then(() => {
              console.log(`Document ${articleId} successfully updated with image URL!`);
            }).catch((error) => {
              console.error("Error updating document: ", error);
            });
          });
        }
      );
    });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFilesChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>Upload progress: {progress}%</p>
    </div>
  );
};

export default UploadLocalImages;
