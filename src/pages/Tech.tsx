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
    display: flex;
    font-size: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    color: #1e255e;
    padding: 100px;
  }
  .conteudo-single p{
    display: flex;
    font-size: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    color: #1e255e;
    margin-top: 20px;
  }
  .tech-stack{
    display: flex;
    margin-top: 20px;
    padding: 14px;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

  .tech-stack img: hover{
    transform: scale(1.1);
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
              <div className='tech-stack'>
                <img alt="bruh-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                <img alt="bruh-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
                <img alt="bruh-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                <img alt="bruh-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                <img alt="bruh-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                <img alt="bruh-GIT" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <img alt="bruh-GITHUB" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <img alt="bruh-LINUX" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                <img alt="bruh-Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                <img alt="bruh-C" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                <img alt="bruh-DOCKER" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
                <img alt="bruh-NODE" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <img alt="bruh-MYSQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                <img alt="bruh-MONGODB" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
              </div>
            </div>
        </main>
      </Main>
    </Frontend>
  )
}

export default Conteudo;
