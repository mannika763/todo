import './items.css'

function Items({items, onSelect,id}){

    
    return (
        <>
        <div className="items">
        <li onClick={()=>{onSelect(id)}}> {items}</li>
        </div>
        </>
    )
}
export default Items;