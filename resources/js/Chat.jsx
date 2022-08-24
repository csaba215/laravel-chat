import { useGetChatByGroupIdQuery } from './services/chat';

export default function Chat() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetChatByGroupIdQuery('1');
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.test}</h3>
        </>
      ) : null}
    </div>
  )
}