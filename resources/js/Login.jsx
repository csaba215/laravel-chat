import { useSanctum } from "react-sanctum";

export default function Login() {
    const { authenticated, user, signIn } = useSanctum();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const remember = true;
        
        signIn(email, password, remember)
              .catch(() => window.alert("Incorrect email or password"));
    };

    return (
        <main className="flex w-screen h-screen items-center justify-center bg-blue-100">
                <form onSubmit={handleSubmit} className="flex flex-col bg-blue-300 py-14 px-14 rounded w-1/2 max-w-md shadow-xl">
                    <div className="flex flex-col pb-4 w-full">
                        <label htmlFor="email" className="w-full text-center text-white text-xl font-bold">Email</label>
                        <input name="email" type="text" placeholder="" className="shadow appearance-none border border-blue-400 rounded w-full mt-4 py-2 px-3 text-white bg-blue-400 leading-tight focus:outline-none focus:shadow-outline mt-2 text-lg"></input>
                    </div>
                    <div className="flex flex-col py-4 w-full">
                        <label htmlFor="password" className="w-full text-center text-white text-xl font-bold">Password</label>
                        <input type="password" name="password" placeholder="" className="shadow appearance-none border border-blue-400 rounded w-full mt-4 py-2 px-3 text-white bg-blue-400 leading-tight focus:outline-none focus:shadow-outline mt-2 text-lg"/>
                    </div>
                    <div className="flex mt-6 w-full">
                        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline mx-auto">Login</button>
                    </div>
                </form> 
        </main>
    );
}