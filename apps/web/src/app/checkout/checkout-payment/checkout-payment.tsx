import { environment } from '../../../environments/environment';
import './checkout-payment.scss';

/* eslint-disable-next-line */
export interface CheckoutPaymentProps {}

export function CheckoutPayment(props: CheckoutPaymentProps) {
  const paymentData = environment.accounts;

  const dataBanks = [
    {
      name: 'bcp',
      logo: 'https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/99/bf/50/99bf5013-561e-48a8-d2b6-b661ccc01d33/AppIcon-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp',
    },
    {
      name: 'bbva',
      logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/47/d8/16/47d81638-d57c-f517-3830-4485e4806c33/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp',
    },
    {
      name: 'interbank',
      logo: 'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/be/8e/5d/be8e5db7-f729-e7b4-14c5-87374c44ca7f/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/246x0w.webp',
    },

    {
      name: 'scotiabank',
      logo: 'https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/ff/34/0a/ff340af8-1863-216e-9fd2-d9bcf476a306/AppIcon_-0-1x_U007emarketing-0-5-0-85-220.png/246x0w.webp',
    },
  ];

  return (
    <div className="text-center p-5">
      <h1 className="text-3xl">Métodos de pago</h1>
      <div className="flex justify-center gap-4 mt-4">
        <div className="border-gray-300 border rounded p-2 w-full">
          <h2 className="text-xl font-bold mb-10 font-sans">Bancos</h2>
          <div>
            {dataBanks.map((bank, index) => (
              <div className=" w-full flex mt-3 justify-around">
                <img className="rounded-full" src={bank.logo} width={100} />
                <div className="font-sans align-middle self-center text-center">
                  <h1 className=" uppercase font-bold">{bank.name}</h1>
                  <div>{Object.values(paymentData.bank)[index]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-gray-300 border rounded p-2 w-full">
          <h2 className="text-xl font-sans font-bold">Otros metodos de pago</h2>
          <div className="flex justify-between gap-5 font-sans">
            <div className="w-full p-5">
              <h3>Yape</h3>
              <img src={paymentData.yape} />
            </div>
            <div className="w-full p-5">
              <h3>Plin</h3>
              <img src={paymentData.plin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPayment;
