import { Modal } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import './sign-up.scss';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export interface SignUpProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SignUp(props: SignUpProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  const onSubmit = async (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (token) => {
        await axios.post('http://localhost:3333/user/create', {
          uid: token.user.uid,
          email: data.email,
          password: data.password,
        });
        props.setOpen(false);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  const validateConfirmPassword = (value: any) => {
    if (value !== password) {
      return false;
    }
    return true;
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const errorClass = (control: string) => {
    return errors[control] ? 'border-red-500' : '';
  };

  const handleSignIn = () => {
    searchParams.set('abrir', 'ingresar');
    setSearchParams(searchParams);
  };
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="relative bg-white rounded-lg shadow">
                <section className="flex items-start justify-between p-4 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Registrarse
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={handleClose}
                  >
                    <FaTimes className="w-5 h-5" />
                    <span className="sr-only">Close modal</span>
                  </button>
                </section>
                <section className="p-6 space-y-6">
                  <div className="grid gap-6 mb-6 grid-cols-1">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Correo
                      </label>
                      <input
                        type="text"
                        id="email"
                        className={`${errorClass(
                          'email'
                        )} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="usuario@email.com"
                        {...register('email', { required: true })}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Contraseña
                        </label>
                        <input
                          type="password"
                          id="password"
                          className={`${errorClass(
                            'password'
                          )} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                          placeholder="******"
                          {...register('password', {
                            required: true,
                            minLength: 6,
                          })}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Confirmar contraseña
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className={`${errorClass(
                            'confirmPassword'
                          )} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                          placeholder="******"
                          {...register('confirmPassword', {
                            required: true,
                            validate: validateConfirmPassword,
                            minLength: 6,
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex justify-between items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                  <button
                    data-modal-hide="defaultModal"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Registrar
                  </button>
                  <button
                    onClick={handleSignIn}
                    className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg"
                  >
                    ¿Ya tienes una cuenta?
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default SignUp;
