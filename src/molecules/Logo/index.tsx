import LogoHero from '../../assets/codigo.png';
import Burger from '../../components/Burguer';

const Logo = () => {
  return (
    <>
      <div>
        <a target="_blank" href="https://github.com/bruh-git" rel="noreferrer">
          <img className='logo' src={LogoHero} alt='logo gitHub' />
        </a>
      </div>
      <Burger />
    </>
  );
}

export default Logo;