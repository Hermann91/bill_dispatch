import  { ChangeEvent, useState } from "react";
import axios from 'axios'; // Importe o Axios
import { FileActionsType, useFileContext } from "./file";
import { useNavigate } from 'react-router-dom'; 

const FileUploader = () => {
  const { dispatch } = useFileContext(); 
  const [message, setMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false); 
  const navigate = useNavigate(); 

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const selectedFile = selectedFiles[0];
      dispatch({
        type: FileActionsType.UPLOAD_FILE,
        payload: { file: selectedFile }
      });
      
      
      const formData = new FormData();
      formData.append('file', selectedFile);
      axios.post('http://localhost:5002/api/v1/procesing-csv-file', formData);

      
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate('/list');
        }, 5000); // 5 segundos
    } else {
      setMessage('Selecione um arquivo');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Sistema de arquivos Kanastra's</h1>
      <div className="flex flex-col gap-6 items-center">
        <div className="relative">
          <label htmlFor="file" className="sr-only">
            Choose a file
          </label>
          <input
            id="file"
            type="file"
            accept="text/csv" 
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
          <div className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span>Choose a file</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8A1 1 0 0 1 2 6a1 1 0 0 1 0-1.414l8-8A1 1 0 0 1 10 2zm0 3a1 1 0 0 1 1 1v8.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 12.586V6a1 1 0 0 1 1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {showModal && ( 
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <p>Arquivo enviado. Processamento iniciado. Você será direcionado para a página de listagem.</p>
            </div>
          </div>
        )}
        {message && ( 
          <p className={`mt-4 text-${message.includes('Erro') ? 'red' : 'green'}-500`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export { FileUploader };
