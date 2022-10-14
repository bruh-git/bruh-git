import Frontend from '../templates/Frontend';
import styled from 'styled-components';

const Main = styled.main`
  .center {
    max-width: 960px;
    margin: 0 auto;
    padding:0 2%;
    display: flex;
    flex-wrap: wrap;
  }
  .conteudo-single {
    flex-direction: column;
    margin-top: 100px;
    padding: 15px;
    font-size: 2rem;
  }
  @media screen and (max-width: 768px){
    .conteudo-single{width: 100%;}
  }
`
function Conteudo() {
  return (
    <Frontend>
    <Main>
          <main className='center'>
            <div className='conteudo-single'>
              <h3 id="stack">My Tech Stack</h3>
              <p>Technologies I’ve been working with recently</p>
              <img align="center" alt="bruh-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
              <img align="center" alt="bruh-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"/>
              <img align="center" alt="bruh-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
              <img align="center" alt="bruh-Redux" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"/>
              <img align="center" alt="bruh-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
              <img align="center" alt="bruh-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
              <img align="center" alt="bruh-GIT" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
              <img align="center" alt="bruh-GITHUB" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/>
              <img align="center" alt="bruh-LINUX" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"/>
              <img align="center" alt="bruh-VS-CODE" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"/>
              <img align="center" alt="bruh-boot" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"/>
            </div>
          </main>
    </Main>
    </Frontend>
  )
}

export default Conteudo;
