import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FileUploader } from './src/components/ui/file-uploader';
import { FileList } from './src/components/ui/file-list';
import { FileProvider } from '@/components/ui/file';

const Router: React.FC = () => {
  return (
    <FileProvider> 
      <Routes>
        <Route path="/" element={<FileUploader />} />
        <Route path="/list" element={<FileList />} />
      </Routes>
    </FileProvider>
  );
};

export { Router };

