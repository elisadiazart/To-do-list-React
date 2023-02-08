const Form = () => {
    return <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Create a new to do..." />
    </form>
    </>
}

const handleSubmit = e => {
    e.preventDefault()
    
}

export default Form