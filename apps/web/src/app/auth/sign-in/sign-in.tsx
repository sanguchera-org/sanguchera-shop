import { Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import './sign-in.scss';
import {
  AuthError,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { tokenState } from '../../store/app/app.atom';
import { userState } from '../../store/user/user.atom';

interface SignInProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SignIn(props: SignInProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const setToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(handleSuccess)
      .catch(handleError);
  };

  const handleSuccess = async (response: UserCredential) => {
    //const token = await response.user.getIdToken();
    const token = response.user;
    setToken(await token.getIdToken());
    setUser(token);
    handleClose();
  };

  const handleError = (response: AuthError) => {
    switch (response.code) {
      case 'auth/user-not-found':
        alert('El usuario no esta registrado.');
        break;
      case 'auth/wrong-password':
        alert('La contraseña es incorrecta.');
        break;
      case 'auth/invalid-email':
        alert('El email es invalido.');
        break;
      case 'auth/too-many-requests':
        alert('Has superado el máximo de intentos.');
        break;
    }
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const errorClass = (control: string) => {
    return errors[control] ? 'border-red-500' : '';
  };

  const handleSignUp = () => {
    searchParams.set('abrir', 'registrar');
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
                    Ingresar
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
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
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
                  </div>
                </section>
                <section className="flex justify-between items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                  <button
                    data-modal-hide="defaultModal"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Ingresar
                  </button>
                  <button
                    type="button"
                    onClick={handleSignUp}
                    className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg"
                  >
                    ¿No tienes una cuenta?
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

export default SignIn;
