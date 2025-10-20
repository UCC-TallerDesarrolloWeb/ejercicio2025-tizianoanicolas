import '@styles/Activities.scss'
import { activities } from '@data/activities.js';
import Card from '@components/card.jsx';  

const Activities = () => 
{


const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const handleInscription = (activitynombre) => {
alert(`Inscripto en la actividad: ${activitynombre}`);
}

    return (
    <div className="activities-container">
  {activities.map((activity, index) => 
<div className="activity-card" key={index}>
    <h3>{activity.nombre}</h3>
    <p>{activity.descripcion}</p>
    <ul>
        {activity.horarios.map((horario, idx) => (
            <li key={idx}>
                Dia: {diasSemana[horario.dia]} - hora de inicio: {horario["hora-inicio"]} - hora de fin: {horario["hora-fin"]}
            </li>
        ))}
    </ul>
    {isLoggedIn && (<button onClick={() => handleInscription(activity.nombre)}>Inscribir</button>)}
    
</div>
)}
    </div>
)}
    



export default Activities;