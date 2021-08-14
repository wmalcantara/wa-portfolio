import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useErrors from '../../hooks/useErrors';

import { isEmailValid } from '../../utils/isEmailValid';

import FormGroup from './components/FormGroup';
import Input from './components/Input';
import Textarea from './components/Textarea';

import { ContactFormContainer, ContactFormContent, Form, Message } from './styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = (name && email && errors.length === 0)

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Preencha com seu nome completo' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Preencha com um e-mail válido' })
    } else {
      removeError('email');
    }
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);

    if (!event.target.value) {
      setError({ field: 'message', message: 'Preencha com uma mensagem' })
    } else {
      removeError('message')
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log({ name, email, message })
    emailjs.sendForm('service_5loz08t', 'template_6ur8p2v', event.target, 'user_FA7mVfVemsrU5YZaCsAxG')
      .then((result) => {
        toast.info("🎉 Enviado com sucesso!");
        setFormSuccess(true);
      }, (error) => {
        toast.error("❌ Ops, houve um erro!");
        setFormError(true);
      });

  }

  if (formSuccess) {
    return (
      <Message>
        <h3>Mensagem enviada com sucesso!</h3>
        <p>Entrarei em contato com você dentro de 24 horas.</p>
        <button onClick={() => setFormSuccess(false)}>
          Enviar nova mensagem
        </button>
        <ToastContainer />
      </Message>
    )
  }

  if (formError) {
    return (
      <Message>
        <h3>Houve algum erro!</h3>
        <p>Logo será reparado, enquanto isso confira minhas redes sociais.</p>
        <button onClick={() => setFormError(false)}>
          Enviar nova mensagem
        </button>
        <ToastContainer />
      </Message>
    )
  }

  return (
    <ContactFormContainer>
      <ContactFormContent>
        <p>Espero que tenha gostado do meu portfolio, se gostou das minhas
          habilidades você pode entrar em contato comigo, ficarei feliz em
          respondê-lo.</p>

        <Form onSubmit={handleSubmit}>

          <FormGroup error={getErrorMessageByFieldName('name')}>
            <Input
              type='text'
              label='Seu nome'
              name='name'
              onChange={handleNameChange}
              value={name}
              error={getErrorMessageByFieldName('name')}
            />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('email')}>
            <Input
              type='text'
              label='Seu e-mail'
              name='email'
              onChange={handleEmailChange}
              value={email}
              error={getErrorMessageByFieldName('email')}
            />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('message')}>
            <Textarea
              type='text'
              label='Sua mensagem'
              name='message'
              onChange={handleMessageChange}
              value={message}
              error={getErrorMessageByFieldName('message')}
            />
          </FormGroup>

          <button type='submit' disabled={!isFormValid}>Enviar!</button>
        </Form>
      </ContactFormContent>
    </ContactFormContainer>
  );
}
