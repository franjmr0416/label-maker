import CreateLabelForm from '../layouts/CreateLabelForm'
import DocumentViewer from '../layouts/DocumentViewer'
import { useAtomValue } from 'jotai'
import { isVisibleDocViewer } from '../jotai/jotai'

const CreateLabel = () => {
  const isOpenDocViewer = useAtomValue(isVisibleDocViewer)

  return (
    <div className='relative w-full'>
      <CreateLabelForm />
      {isOpenDocViewer ? <DocumentViewer /> : null}
    </div>
  )
}

export default CreateLabel
