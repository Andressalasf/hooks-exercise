import { startTransition, useOptimistic, useRef, useState } from "react";
import { Link } from "react-router-dom";

const UseOptimisticExample = () => {
    const deliverMessage = async (message) => {
        await new Promise((res) => setTimeout(res, 1000));
        return message;
    }
    const Thread = ({messages, sendMessageAction}) => {
        const formaRef = useRef();
        const formaAction = (formaData) => {
            addOptimisticMessage(formaData.get("message"));
            formaRef.current.reset();
            startTransition(async () => {
                await sendMessageAction(formaData);
            });
        }
        const [optimisticMessages, addOptimisticMessage] = useOptimistic(
            messages,
            (state, newMessage) => [
                {
                    text: newMessage,
                    sending: true
                },
                ...state,
            ]
        );
        return(
            <>
                <form action={formaAction} ref={formaRef}>
                    <input type="text" name="message" placeholder="Hello!" 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"/>
                    <button type="submit" className="bg-gray-500 hover:bg-blue-600 text-white px-10 py-2 rounded">Send</button>
                </form>
                {optimisticMessages.map((message, index) => (
                    <div key={index}>
                    {message.text}
                    {!!message.sending && <small> (Enviando...)</small>}
                    </div>
                ))}
            </>
        );
    }
    const [messages, setMessages] = useState([
        {text: "¡Hola!", sending: false, key: 1}
    ]);
    const sendMessageAction = async (formaData) => {
        const sentMessage = await deliverMessage(formaData.get("message"));
        startTransition(() => {
            setMessages((messages) => [{text: sentMessage}, ...messages]);
        })
    }
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
                    <h1 className="text-3xl font-bold mb-3 text-gray-800">useOptimistic Hook</h1>
                        <p className="text-gray-700 mb-3">
                            <strong>Descripción:</strong> useOptimistic es un Hook que permite actualizar la interfaz de usuario / UI de manera optimista.
                        </p>
                        <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                            <code>const [optimisticState, setOptimistic] = useOptimistic(value, reducer?);</code>
                        </div>
                </div>
                <div className="bg-white rounded shadow p-6 border border-gray-200">
                    <div className="bg-white rounded shadow p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Lista optimista
                    </h2>
                    <h3>
                        Los elementos son mostrados primero, mientras son enviados.
                    </h3>
                    </div>
                    <div className="bg-white rounded shadow p-6 border border-gray-200">
                        <Thread messages={messages} sendMessageAction={sendMessageAction} />
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <Link
                        to="/playground"
                        className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded"
                    >
                        ← Volver al Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UseOptimisticExample;