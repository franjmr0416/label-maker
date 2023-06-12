import { useFormik } from 'formik'
import FormControl from '../components/FormControl'
import FormGroup from '../components/FormGroup'

const CreateLabelForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      descripcion: '',
      codigo_producto: '',
      lote: '',
      fecha_fabricacion: '',
      fecha_caducidad: '',
      dosis: '',
      info_empresa: '',
      recomendaciones: '',
      peso: 1,
      tipo: 'muestra',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
            label='Dosis'
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
        className='w-fit shadow-lg bg-ctm-primary hover:bg-ctm-secondary text-[#fff] px-8 py-2 rounded-lg text-lg font-medium'
      >
        Crear etiqueta
      </button>
    </form>
  )
}

export default CreateLabelForm
