import './ListaSupensa.css'

const ListaSuspensa = (props) => {
    console.log(props.items)


    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa