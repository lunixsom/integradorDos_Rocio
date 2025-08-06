const Form = () => {

    const [values, setValues] = useState({
        name: "",
        lastname: "",
        pass: ""
    })
    const [userName, setUserName] = useState("")
    const [errors, setErrors] = useState({
        name: "",
        lastname: "",
        pass: ""
    })

    useEffect(() => {
      setErrors({
        name: values.name.length <=3 && values.name ? "El nombre debe tener màs de 3 caracteres" : "",
        lastname: values.lastname.length <=3 && values.lastname ? "El apellido debe tener màs de 3 caracteres" : "",
        pass: values.pass.length <=7 && values.pass ? "Contraseña debe tener màs de 7 caracteres" : "",
      })
    }, [values])

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (values.pass) {
            setUserName(`${values.name} ${values.lastname}`)
        } else {
            alert("la password es obligatoria")
        }
    }

    return (
      <>
      <form id="formAltaProducto" onSubmit={handleSubmit}>
      <div className="form-section">
      <h3 className="section-title">Información Básica</h3>

      <div className="form-row">
        <div className="form-group">
        <label htmlFor="name">Nombre*</label>
        <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        required
        />
        {errors.name && <span className="error">{errors.name}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
        <label htmlFor="lastname">Apellido*</label>
        <input
        type="text"
        id="lastname"
        name="lastname"
        value={values.lastname}
        onChange={handleChange}
        required
        />
        {errors.lastname && <span className="error">{errors.lastname}</span>}
        </div>
        <div className="form-group">
        <label htmlFor="pass">Contraseña*</label>
        <input
        type="password"
        id="pass"
        name="pass"
        value={values.pass}
        onChange={handleChange}
        required
        />
        {errors.pass && <span className="error">{errors.pass}</span>}
        </div>
      </div>
      </div>

      <button type="submit" className="btn-1">Guardar Producto</button>
      {userName && <div className="success">Bienvenido, {userName}!</div>}
      </form>
      </>
    )
}

export default Form

