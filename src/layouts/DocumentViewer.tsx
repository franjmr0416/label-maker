import { PDFViewer } from '@react-pdf/renderer'
import NewDocument from './NewDocument'
import { useSetAtom } from 'jotai'
import { isVisibleDocViewer } from '../jotai/jotai'

const DocumentViewer = () => {
  const showDocViewer = useSetAtom(isVisibleDocViewer)

  return (
    <div className='z-10 absolute w-full h-screen top-0 flex justify-center items-center bg-ctm-dark-gray/60'>
      <div className=''>
        <div className='flex justify-end p-2'>
          <button
            onClick={() => showDocViewer(false)}
            className='font-primary bg-ctm-primary hover:bg-ctm-secondary px-8 py-1 text-[#fff] rounded-lg shadow-sm shadow-ctm-light-primary'
          >
            CERRAR
          </button>
        </div>
        <PDFViewer style={{ width: '80vw', height: '85vh' }}>
          <NewDocument />
        </PDFViewer>
      </div>
    </div>
  )
}

export default DocumentViewer
