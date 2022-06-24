function AdminInput(props) {
    return(
        <div className="input__block">
            <div className="input__label">{ props.label }</div>
            <input
                onChange={(e) => {
                    props.setInput(e.target.value) 
                    props.showButtons(true)
                }} 
                value={ props.value }
                className="input" 
                placeholder={ props.placeholder } />
        </div>
    )
}

export default AdminInput
