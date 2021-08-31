import "./style.css"
function Student ({name, age, country}){
    return (
        <div className="dev-name">
            <p>Dev: {name}</p>
            <p>Idade: {age}</p>
            <p>País: {country}</p>
        </div>
    )
}
export default Student;