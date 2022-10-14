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
function Projects() {
  return (
    <Frontend>
    <Main>
          <main className='center'>
            <div className='conteudo-single'>
              <h3 id="projects">Projects</h3>
              <p>
                kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
              </p>
            </div>
          </main>
    </Main>
    </Frontend>
  )
}

export default Projects;
