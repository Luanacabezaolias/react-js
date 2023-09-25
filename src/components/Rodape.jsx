import {} from 'react'
import { FaBeer } from 'react-icons/fa';
import style from '../css/Rodape.module.css'


function Ropade (){
  return(
    <section className={style} >
    <h3>@2023-todos os direitos reservados</h3>
    <FaBeer/>
    </section>
  )
}
export default Ropade