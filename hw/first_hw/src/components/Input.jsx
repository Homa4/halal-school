function Input(){
   const handleChange = () => {
    console.log('chaged')
   }
    return(
        <input type="text" placeholder="Your full name" aria-label="Your full name" onChange={handleChange}/>
    )
}

export default Input