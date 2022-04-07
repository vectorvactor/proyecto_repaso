import MiPrimerComponenteClase from '../components/MiPrimerComponenteClase'
import MiPrimerComponente from '../components/MiPrimerComponente'

const MenuElems = [
    {
        path: "/",
        defaultRoute:true,
        text: "Inicio",
        componentSite: <MiPrimerComponente />
    },
    {
        path: "/juana",
        defaultRoute:false,
        text: "Juana",
        componentSite: <MiPrimerComponenteClase nombre="Juana" apellido="Martinez" color="red" />
    },
    {
        path: "/pepe",
        defaultRoute:false,
        text: "Pepe",
        componentSite: <MiPrimerComponenteClase nombre="Pepe" apellido="Perez" color="green" />
    },
    {
        path: "/paco",
        defaultRoute:false,
        text: "Paco",
        componentSite: <MiPrimerComponenteClase nombre="Paco" apellido="Perez" color="blue" />
    },
    {
        path: "/luisa",
        defaultRoute:false,
        text: "Luisa",
        componentSite: <MiPrimerComponenteClase nombre="Luisa" apellido="Dominguez" color="green" />
    }
];

export default MenuElems;