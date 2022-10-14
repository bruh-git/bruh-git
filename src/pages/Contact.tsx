import styled from 'styled-components';
import LogoLink from '../assets/174857.png';
import LogoGit from '../assets/25231.png';
import LogoInsta from '../assets/instagram.png';
import Frontend from '../templates/Frontend';
import Form from './Form';

const Main = styled.main`
  .center {
    margin: 0 auto;
    padding:0 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .conteudo-single {
    display: flex;
    font-size: 2rem;
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    color: #1e255e;
    padding: 50px;
    background: rgba( 255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 30px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  .container{
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 14px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
  
  .form{
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .input{
    margin-bottom: 14px;
    height: 34px;
    border-radius: 4px;
    padding: 0 8px;
    border: 1px solid #17a4d0;
  }

  .input:focus{
    outline: none !important;
    border:1px solid #17a4d0;
    box-shadow: 0 0 10px #719ECE;
  }
  
  .textarea{
    margin-bottom: 14px;
    border-radius: 4px;
    border: 1px solid #17a4d0;
    padding: 8px;
    height: 94px;
    resize: none;
  }

  .textarea:focus{
    outline: none !important;
    border:1px solid #17a4d0;
    box-shadow: 0 0 10px #719ECE;
  }
  
  .button{
    margin-top: 30px;
    color: #fff;
    height: 34px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    border: 1px solid #17a4d0;
    background-color: #17a4d0;
    box-shadow: 0px 7px 17px -7px #17a4d0;
    font-size: 14px;
    font-wight: 400px;
    font-size: 18px;
    transition: background-color, transform 0.8s;
  }

  .social-media{
    display: flex;
    margin-top: 20px;
    padding: 14px;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

  .social-media a: hover{
    transform: scale(1.1);
  }
  
  .button:hover{
    color: #17a4d0;
        background-color: #F8FDFF;
        box-shadow: 0px 7px 17px -7px #17a4d0;
  }
  @media screen and (max-width: 768px){
    .conteudo-single{width: 100%;}
  }
`
function Contact() {
  return (
    <Frontend>
      <Main>
        <main className='center'>
          <div className='conteudo-single'>
            <h3 id="contact">Contato</h3>
            <Form />
            <nav className="social-media">
              <a target="_blank" href="https://github.com/bruh-git" rel="noreferrer"><img src={LogoGit} alt="Logo Github" width="40" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/brunac-cardoso/" rel="noreferrer"><img src={LogoLink} alt="Logo Linkedin" width="40" /></a>
              <a target="_blank" href="https://www.instagram.com/bruhhccs/" rel="noreferrer"><img src={LogoInsta} alt="Logo Instagram" width="40" /></a>
            </nav>
          </div>
        </main>
      </Main>
    </Frontend>
  )
}

export default Contact;
