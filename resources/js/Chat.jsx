import { useGetChatByGroupIdQuery } from './services/chat';

export default function Chat() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetChatByGroupIdQuery('1');

  const userId = 1;
  const messageStyle = "bg-white rounded my-3 py-3 px-3 w-44";
  const userMessageStyle = "bg-white rounded my-3 py-3 ml-auto px-3 w-44";
  const send = () => {

  };
  return (
    <div className='flex flex-col px-5 bg-gray-300 rounded mx-10 py-10 w-96 mt-4'> 
      <div className='w-full overflow-y-auto h-96'>
      {error ? (
        <div>Hiba történt az üzentek betöltése közben.</div>
      ) : isLoading ? (
        <div>Üzenetek betöltése...</div>
      ) : data ? (
        <div>
          <h3>{data?.data?.messages?.map((m,i) => {
              return (<div id={i} className={m.user_id == userId ? userMessageStyle : messageStyle }>{m?.message}</div>)
            })}</h3>
        </div>
      ) : null}
      </div>
      <textarea className='flex mt-10 resize-none'></textarea>
      <button className='mt-4 px-5 bg-gray-400 text-white w-64 mx-auto' onClick={send}>Küldés</button>
    </div>
  );
}