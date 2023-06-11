import { useFormik } from 'formik'
import FormControl from '../components/FormControl'

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
    <form onSubmit={formik.handleSubmit} className='w-full'>
      <h2 className='font-bold text-2xl'>Agrega los datos de la etiqueta</h2>
      <div className='flex flex-col gap-4 p-8'>
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
          label='Lote'
          name='lote'
          type='text'
          value={formik.values.lote}
          onChange={formik.handleChange}
        />
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
