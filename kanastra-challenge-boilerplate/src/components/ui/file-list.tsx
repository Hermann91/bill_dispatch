import { useFileContext } from "./file";
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from "./table";

const FileList = () => {
  const { state } = useFileContext();

  const handleSendAnotherFile = () => {
    
    window.location.href = '/';
  };


  return (
    <div className="mt-8">
      <Table>
        <TableCaption>List of Uploaded Files</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Size (bytes)</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.fileList.map((file, index) => (
            <TableRow key={index}>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{file.size} bytes</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-center">
        <button onClick={handleSendAnotherFile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar outro arquivo
        </button>
      </div>
    </div>
  );
};

export { FileList };
