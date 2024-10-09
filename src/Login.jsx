import PropTypes from 'prop-types';

function Login({ h1Text, h1Class, handleSubmit, errorMessage }) {
    return (
        <div className="flex justify-center items-center h-full"> 
            <form
                className="bg-gray-800 bg-opacity-85 p-6 rounded shadow-md w-96 relative z-10"
                onSubmit={handleSubmit}
            >
                <h1 className={h1Class}>{h1Text}</h1>
                <div className="mb-4"> 
                    <label htmlFor="username" className="block text-gray-300">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="bg-transparent mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div className="mb-4"> 
                    <label htmlFor="password" className="block text-gray-300">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="bg-transparent mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                {/* Muestra el mensaje de error si hay uno */}
                {errorMessage && (
                    <div className="text-red-500 mb-4">{errorMessage}</div>
                )}
                <button
                    type="submit"
                    className="w-28 bg-blue-950 text-white p-2 rounded-full hover:bg-blue-700 border-2 border-white float-right"
                >
                    Login
              
                </button>
                <div>
                    <input 
                        type="checkbox" 
                        id="mantener" 
                        name="mantener" 
                        className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
                    />
                    <label htmlFor="mantener" className="text-gray-300">
                        Recordarme
                    </label>
                </div>
            </form>
        </div>
    );
}

// Validación de Props
Login.propTypes = {
    h1Text: PropTypes.string.isRequired,
    h1Class: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
};

export default Login;


