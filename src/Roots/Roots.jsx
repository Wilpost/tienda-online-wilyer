import { Route, Routes } from 'react-router'
import { Login, SignUp } from '../Pages/Form'
import { Home } from '../Pages/Home'
import { ElectronicsPage } from '../Pages/Electronica'
import { Clothes } from '../Pages/RopaHombre'
import { StakePage } from '../Pages/StakePage'

// 1. Definir las rutas de la app utilizando el componente Route
// 2. Y envolverlo con el componente padre Routes
// 3. Dentro de Route defino las rutas y el elemento o componente que se va a renderizar en esa ruta

// 4. Puedo crear una ruta dinamica usando el mismo componente de Route, y en path definir la ruta pero esta vez que sea dinamica por ejemplo: contacts/:ID --> De esta forma se definen las rutas dinamicas

// 5. Para poder acceder al valor de la ruta se utiliza un hook de React Route llamado useParams, el cual devuelve un objeto con el valor de de la ruta dinamica

// 6. Puedo definir rutas hijas usando las semantica HTML padre e hijo, en este caso para definir una ruta hija debo envolver una nueva ruta con el componente Route, antes envolvimos la lista de rutas de la app en general, pero esta vez definimos rutas hijas de una ruta en concreto, envolvemos un nuevo Route dentro del Route que queremos agregar la ruta hija

export function Roots () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/electronics' element={<ElectronicsPage />} />
      <Route path='/skate' element={<StakePage />} />
      <Route path='/clothesMen' element={<Clothes />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  )
}
