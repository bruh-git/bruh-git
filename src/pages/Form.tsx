import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(name === '' || email === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send('service_fd0zap4', 'template_mncs1ls', templateParams, 'my6VTH493bu_LwFF9').then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      console.log('FAILED...', err);
    });
  };

  return (
      <div className="container">
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
      
          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
  );
}

export default Form;