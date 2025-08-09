import React from 'react'
import "./contacts-main.css"
import ContactsList from './ContactsList'


const contacts = [
    {
        id: 1,
        name: "Ana López",
        profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
        isOnline: true,
        last_conection: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: '¿Qué tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'Sí, ¿y tú?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:14',
                id: 5,
                texto: 'Bien también',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:15',
                id: 6,
                texto: '😊',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: "Carlos Ruiz",
        profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
        isOnline: false,
        last_conection: "07:30",
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'Sí, por suerte. ¿Vos?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:14',
                id: 5,
                texto: 'Bien. ¿Tenés ganas de salir mañana?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:15',
                id: 6,
                texto: 'Podría ser. ¿A dónde?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:16',
                id: 7,
                texto: 'Pensaba en ir al parque o a tomar algo.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:17',
                id: 8,
                texto: 'Me gusta la idea del parque. Hace mucho no vamos.',
                status: 'visto'
            }
        ]
    },
    {
        id: 3,
        name: "María Ortiz",
        profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
        isOnline: true,
        last_conection: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'Sí, más o menos. Muchas cosas en la cabeza.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:14',
                id: 5,
                texto: '¿Querés hablar de eso?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:15',
                id: 6,
                texto: 'Sí, me vendría bien.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:16',
                id: 7,
                texto: 'Acá estoy. Contame.',
                status: 'visto'
            },
            
        ]
    },
    {
        id: 4,
        name: "Pedrito",
        profileImg: "https://randomuser.me/api/portraits/men/2.jpg",
        isOnline: false,
        last_conection: "09:15",
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'Sí, un poco cansado nada mas',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:14',
                id: 5,
                texto: '¿Terminaste el trabajo?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:15',
                id: 6,
                texto: 'Me falta la conclusión. ¿Y vos?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:16',
                id: 7,
                texto: 'Yo lo terminé recién.',
                status: 'visto'
            },
        ]
    },
    {
        id: 5,
        name: "Laura ",
        profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
        isOnline: false,
        last_conection: "09:45",
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'Podría estar mejor...',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:14',
                id: 5,
                texto: '¿Qué pasó?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:15',
                id: 6,
                texto: 'Me molestó lo que dijiste hoy.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:16',
                id: 7,
                texto: 'No era mi intención herirte.',
                status: 'visto'
            },
            
        ]
    },
    {
        id: 6,
        name: "Javii",
        profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
        isOnline: true,
        last_conection: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'Sí, solo estaba pensando en viejos tiempos.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:14',
                id: 5,
                texto: '¿Como cuáles?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:15',
                id: 6,
                texto: 'Las salidas de verano, nuestras charlas.',
                status: 'visto'
            },
            
        ]
    },
    {
        id: 7,
        name: "Sofía Perez",
        profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
        isOnline: false,
        last_conection: "11:20",
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'Sí, acabo de ver un meme que me hizo llorar de la risa 😂',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:14',
                id: 5,
                texto: 'Pasamelo YA',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:15',
                id: 6,
                texto: '*envía meme*',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:16',
                id: 7,
                texto: 'JAJAJ 😂',
                status: 'visto'
            },
        ]
    },
];

const ContactsMain = () => {
    return (
        <div className='contacts-main'>
            <div className='contacts-main-header'>
                <div>
                    <h1>WhatsApp</h1>
                </div>
                <div>
                    <button title='Nuevo chat'><i className="bi bi-chat-square"></i></button>
                    <button title='Menu'><i className="bi bi-three-dots-vertical"></i></button>
                </div>

            </div>
            <div className='contacts-main-search'>
                <label htmlFor="buscarChat"></label>
                <button><i className="bi bi-search"></i></button>
                <input type="text" id="buscarChat" placeholder="Buscar un chat o iniciar uno nuevo" />
            </div>
            <div className='contacts-main-options-buttons'>
                <button>Todos</button>
                <button>No leidos</button>
                <button>Favoritos</button>
                <button>Grupos</button>
            </div>
            <div className='contacts-main-archived'>
                <div className='contacts-main-archived-left'>
                    <span><i className="bi bi-archive-fill"></i></span>
                    <h3>Archivados</h3>
                </div>
                <div className='contacts-main-archived-right'>
                    <span>1</span>
                </div>
            </div>
            <div className='contacts-main-contacts'>
                <ContactsList contacts={contacts} />
            </div>
            <div>

            </div>
        </div>
    )
}

export default ContactsMain
