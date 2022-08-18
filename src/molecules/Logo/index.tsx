import LogoHero from '../../assets/25231.png';
import Burger from '../../components/Burguer';

const Logo = () => {
  return (
  <>
    <div>
      <img className='logo'src={LogoHero} alt='logo'/>
    </div>
    <Burger />
  </>
  );
}

export default Logo;