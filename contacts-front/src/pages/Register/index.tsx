export const Register = () => {
    return (
        <main>
            <h2>Register</h2>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" />

                <label htmlFor="">Phone</label>
                <input type="text" />

                <label htmlFor="">Email</label>
                <input type="text" />
                
                <label htmlFor="">Password</label>
                <input type="text" />
                
                <button type="submit">Register</button>
            </form>
        </main>
    )
}