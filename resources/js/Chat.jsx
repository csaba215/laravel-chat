import { useGetChatByGroupIdQuery } from './services/chat';

export default function Chat() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetChatByGroupIdQuery('1');
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  
  const userId = 1;
  const messageStyle = "bg-white rounded my-3 py-3 px-3 w-44";
  const userMessageStyle = "bg-white rounded my-3 py-3 ml-auto px-3 w-44";

  return (
    <div className='flex flex-col px-5 bg-gray-300 rounded mx-10 py-10 w-96'> 
      <div className='w-full'>
      {error ? (
        <div>Hiba történt az üzentek betöltése közben.</div>
      ) : isLoading ? (
        <div>Üzenetek betöltése...</div>
      ) : data ? (
        <div>
          <h3>{data?.messages.map((m,i) => {
            return (<div id={i} className={m.userid == userId ? userMessageStyle : messageStyle }>{m?.msg}</div>)
            })}</h3>
        </div>
      ) : null}
      </div>
      <textarea className='flex mt-10'></textarea>
      <button className='mt-4 px-5 bg-gray-400 text-white w-64 mx-auto'>Küldés</button>
    </div>
  )

}