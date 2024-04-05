import{ createContext, useContext, ReactNode } from "react";
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Persistor } from "redux-persist/es/types"; 


type FileContextState = {
  isLoading: boolean;
  file: {
    name: string;
    type: string;
    size: number;
  } | null;
  fileList: {
    name: string;
    type: string;
    size: number;
  }[];
};

const FileContextInitialValues = {
  isLoading: false,
  file: null,
  fileList: []
};

enum FileActionsType {
  UPLOAD_FILE = "UPLOAD_FILE"
}

type ReducerAction<T, P> = {
  type: T;
  payload?: Partial<P>;
};


type FileAction = ReducerAction<
  FileActionsType,
  Partial<FileContextState>
>;

type FileDispatch = ({ type, payload }: FileAction) => void;

type FileContextType = {
  state: FileContextState;
  dispatch: FileDispatch;
};

type FileProviderProps = { children: ReactNode };

const FileContext = createContext<FileContextType>({
  state: {
    isLoading: false,
    file: null,
    fileList: []
  },
  dispatch: () => {}
});

const FileReducer = (
  state: FileContextState = FileContextInitialValues,
  action: FileAction,
): FileContextState => {
  switch (action.type) {
    case FileActionsType.UPLOAD_FILE: {
      const { file } = action.payload || {};
      if (!file) {
        return state;
      }

      return {
        ...state,
        file: {
          name: file.name,
          type: file.type,
          size: file.size,
        },
        fileList: [...state.fileList, {
          name: file.name,
          type: file.type,
          size: file.size,
        }],
      };
    }
    default: {
      return state;
    }
  }
};





// Reducer persistido
const persistedReducer = persistReducer(
  {
    key: 'fileStorage', // Chave usada para armazenar os dados no localStorage
    storage, // O storage que você importou acima
  },
  FileReducer
);

// Criar uma store com o reducer persistido
const store = createStore(persistedReducer);

// Crie um persistor usando persistStore
const persistor: Persistor = persistStore(store);

// Provedor de contexto com Redux Persist
export const FileProvider = ({ children }: FileProviderProps) => {
  return (
    <FileContext.Provider value={{ state: store.getState(), dispatch: store.dispatch }}>
      {children}
    </FileContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFileContext = () => {
  const context = useContext(FileContext);

  if (context === undefined)
    throw new Error("useFileContext must be used within a FileProvider");

  return context;
};

export { FileActionsType, persistor };
