import Frontend from '../templates/Frontend';
import * as S from './style';
import HeroHeaderImage from '../assets/computer-illustration.png'
import ButtonContact from '../atoms/ButtonContact';

function Main() {
  return (
    <>
        <Frontend>
          <S.Container>
            <div>
              <h1>Hi 👋, my name is Bruna, I am a software developer.</h1>
              <h6>I'm a full-service, full-stack web developer that creates an immersive user experience.</h6>
              <ButtonContact />
            </div>
            <S.ColumnImage>
              <img src={HeroHeaderImage} alt='computador'/>
            </S.ColumnImage>
          </S.Container>
        </Frontend>
      </>
  )
}

export default Main;
