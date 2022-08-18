import styled from 'styled-components';
import LogoGit from '../assets/25231.png';
import LogoInsta from '../assets/instagram.png';
import LogoLink from '../assets/174857.png';

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
            <div className='conteudo-single'>
              <h3 id="projects">Projects</h3>
              <p>
                kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
              </p>
            </div>
            <div className='conteudo-single'>
              <h3 id="contact">Contact</h3>
              <a href="https://www.instagram.com/bruh_cardoso06/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank" alt=""/></a>

              <a href="https://www.linkedin.com/in/brunac-cardoso/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt=""/></a>

              <a href="https://twitter.com/Bruh_cardoso06?t=PfsMdXZTLCgonOAcgrXykg&s=08/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank" alt=""/></a>

              <a href="mailto:brunac.cardososilva@gmail.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" alt=""/></a> 

              <nav class="social-media">
              <a target="_blank" href="https://github.com/bruh-git" rel="noreferrer"><img src={LogoGit} alt="Logo Github" width="40" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/brunac-cardoso/" rel="noreferrer"><img src={LogoLink}alt="Logo Linkedin" width="40" /></a>
                <a target="_blank" href="https://www.instagram.com/bruh_cardoso06/" rel="noreferrer"><img src={LogoInsta} alt="Logo Instagram" width="40" /></a>
              </nav>
            </div>
          </main>
    </Main>
  )
}

export default Conteudo;
