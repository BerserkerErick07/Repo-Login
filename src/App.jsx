import { useState } from 'react';
import Login from './Login';

function App() {
    // Estado para el mensaje de error
    const [errorMessage, setErrorMessage] = useState('');

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulación de validación de la contraseña
        const isPasswordCorrect = false; // Forzamos la validación a ser incorrecta

        if (!isPasswordCorrect) {
            setErrorMessage('Contraseña incorrecta, comuniquese con el administrador si el problema persiste');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="relative w-full h-full overflow-hidden">
                <div 
                    className="absolute top-0 left-0 w-full h-full bg-center bg-cover" 
                    style={{ 
                        backgroundImage: "url('/Image/intento1.jpg')", 
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div className="relative flex justify-center items-center h-full z-10">
                    <Login 
                        h1Text="Iniciar Sesión" 
                        h1Class="text-3xl font-bold text-white text-center" 
                        handleSubmit={handleSubmit} 
                        errorMessage={errorMessage} 
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
;


