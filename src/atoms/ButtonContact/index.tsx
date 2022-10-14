import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const ButtonContact = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };
  return(<S.Container onClick={ handleContact }>Contact Me</S.Container>);
}

export default ButtonContact;