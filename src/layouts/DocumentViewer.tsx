import { PDFViewer } from '@react-pdf/renderer'
import NewDocument from './NewDocument'
import { useSetAtom } from 'jotai'
import { isVisibleDocViewer } from '../jotai/jotai'

const DocumentViewer = () => {
  const showDocViewer = useSetAtom(isVisibleDocViewer)

  return (
    <div className='z-10 absolute w-full h-screen top-0 flex justify-center items-center bg-ctm-dark-gray/60'>
      <div className=''>
        <div>
          <button onClick={() => showDocViewer(false)}>Cerrar</button>
        </div>
        <PDFViewer style={{ width: '80vw', height: '85vh' }}>
          <NewDocument />
        </PDFViewer>
      </div>
    </div>
  )
}

export default DocumentViewer
