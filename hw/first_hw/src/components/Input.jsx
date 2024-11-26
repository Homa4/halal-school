function Input(props){
   const { onChange } = props

    return(
        <input type="text" placeholder="Your full name" aria-label="Your full name" onChange={onChange}/>
    )
}

export default Input