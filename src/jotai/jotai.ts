import { atom } from 'jotai'

const isVisibleDocViewer = atom(false)
const labelContent = atom({
  nombre: '',
  descripcion: '',
  codigo_producto: '',
  lote: '',
  fecha_fabricacion: '',
  fecha_caducidad: '',
  dosis: '',
  info_empresa: '',
  recomendaciones: '',
  peso: 0,
  tipo: '',
})

export { isVisibleDocViewer, labelContent }
