import { Formik, Form } from 'formik';
import { useTasks } from '../context/TaskContext'

function Login() {

  const { createUser } = useTasks()

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={ async (values, actions) => {
          await createUser(values)
          navigate("/")
        }}
      >
      {({handleChange, handleSubmit, values, isSubmitting}) => (
        <Form onSubmit={handleSubmit} className="bg-slate-100 rounded-md p-6 w-full max-w-xl flex flex-col mx-auto">
          <label className='text-xl font-semibold mb-2'>Title</label>
          <input className='rounded-md p-2 border border-zinc-400 mb-6' type="text" name='title' placeholder='aqui va el titulo' value={values.title} onChange={handleChange} />

          <label className='text-xl font-semibold mb-2'>Password</label>
          <input className='rounded-md p-2 border border-zinc-400 mb-6' type="password" name='password' placeholder='aqui va la contraseña' value={values.password} onChange={handleChange} />
          
          <button className='bg-slate-500 text-white font-bold border border-zinc-400 rounded-md py-2 px-4 w-fit mx-auto' type="submit" disabled={isSubmitting} >{isSubmitting ? "saving..." : "Save"}</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default Login