import { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/Contacto.css';



const Contacto = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  } 

  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto</h2>
        <form className="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
          
        <p className="acciones"><input type="submit" value="Enviar"/></p>
        </form>
        {sending ? <p>Enviando...</p> :null}
        {msg ? <p>{msg}</p> :null}

        
      </div>
      <div className="datos">
        <h2>Otros medios de comunicación</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <li>Telefono: xxxxxxxxxx</li>
            <li>Email: xxxxxxxxxxxxx</li>
            <li>Facebook:</li>
            <li>X:</li>
            <li>Instagram:</li>
          </ul>
      </div>
    </main>
  );
}

export default Contacto;