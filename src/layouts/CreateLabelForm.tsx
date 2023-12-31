import { useFormik } from 'formik'
import FormControl from '../components/FormControl'
import FormGroup from '../components/FormGroup'
import { MdPictureAsPdf } from 'react-icons/md'
import { useSetAtom } from 'jotai'
import { isVisibleDocViewer, labelContent } from '../jotai/jotai'

const CreateLabelForm = () => {
  const showDocViewer = useSetAtom(isVisibleDocViewer)
  const setLabelContent = useSetAtom(labelContent)

  const formik = useFormik({
    initialValues: {
      nombre: 'francisco reforzado',
      descripcion: 'Saborizante en pasta sabor queso asadero reforzado.',
      codigo_producto: 'MAEPS00062',
      lote: 'DD251022/156',
      fecha_fabricacion: '2022-10-25',
      fecha_caducidad: '2023-10-25',
      dosis: '0.12',
      info_empresa:
        'Alimentinna S. DE R.L. DE C.V. Antonio García Cubas 1200, Alfredo Vazquez Bonfil, 38010 Celaya, Gto. Tel. (461) 279-7264',
      recomendaciones:
        'Almacenar en lugar seco y fresco a una temperatura no mayor a 25°C.',
      peso: 50,
      tipo: 'muestra',
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2))
      setLabelContent(values)
      showDocViewer(true)
    },
  })
  return (
    <form
      onSubmit={formik.handleSubmit}
      className='w-full flex flex-col items-center min-h-screen p-8'
    >
      <h2 className='font-bold text-2xl text-ctm-secondary'>
        Información de etiqueta
      </h2>
      <div className='flex flex-col w-fit gap-4 p-8'>
        <FormGroup title='Información producto'>
          <FormControl
            label='Nombre producto'
            name='nombre'
            type='text'
            value={formik.values.nombre}
            onChange={formik.handleChange}
          />
          <FormControl
            label='Descripción'
            name='descripcion'
            type='text'
            value={formik.values.descripcion}
            onChange={formik.handleChange}
          />
          <FormControl
            label='Código de producto'
            name='codigo_producto'
            type='text'
            value={formik.values.codigo_producto}
            onChange={formik.handleChange}
          />
          <FormControl
            label='Dosis (%)'
            name='dosis'
            type='text'
            value={formik.values.dosis}
            onChange={formik.handleChange}
          />
        </FormGroup>
        <FormGroup title='Trazabilidad'>
          <FormControl
            label='Lote'
            name='lote'
            type='text'
            value={formik.values.lote}
            onChange={formik.handleChange}
          />
          <FormControl
            label='Fecha de fabricación'
            name='fecha_fabricacion'
            type='date'
            value={formik.values.fecha_fabricacion}
            onChange={formik.handleChange}
          />
          <FormControl
            label='Fecha de caducidad'
            name='fecha_caducidad'
            type='date'
            value={formik.values.fecha_caducidad}
            onChange={formik.handleChange}
          />
        </FormGroup>
        <FormGroup title='Presentación'>
          <FormControl
            label='Peso (g)'
            name='peso'
            type='number'
            value={formik.values.peso}
            onChange={formik.handleChange}
          />
          <FormControl
            label='Tipo'
            name='tipo'
            type='text'
            value={formik.values.tipo}
            onChange={formik.handleChange}
          />
          <FormControl
            label='Recomendaciones'
            name='recomendaciones'
            type='text'
            value={formik.values.recomendaciones}
            onChange={formik.handleChange}
          />
        </FormGroup>
        <FormGroup title='Info. adicional'>
          <FormControl
            label='Info. Empresa'
            name='info_empresa'
            type='text'
            value={formik.values.info_empresa}
            onChange={formik.handleChange}
          />
        </FormGroup>
      </div>
      <button
        type='submit'
        className='w-fit shadow-lg bg-ctm-primary hover:bg-ctm-secondary text-[#fff] px-8 py-2 rounded-lg text-lg font-medium flex gap-1 items-center'
      >
        <MdPictureAsPdf className='text-2xl' />
        Crear etiqueta
      </button>
    </form>
  )
}

export default CreateLabelForm
