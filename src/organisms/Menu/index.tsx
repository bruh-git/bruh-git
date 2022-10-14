import { NavLink } from 'react-router-dom';
import * as S from './styles';

const Menu = ({ open }) => {
  return (
    <S.MenuList open={ open }>
      <S.ItemList className='home'><NavLink to="/">Home</NavLink></S.ItemList>
      <S.ItemList className='about'><NavLink to="/">About</NavLink></S.ItemList>
      <S.ItemList className='stack'><NavLink to="/tech">Tech Stack</NavLink></S.ItemList>
      <S.ItemList className='projects'><NavLink to="/projects">Projects</NavLink></S.ItemList>
      <S.ItemList className='contact'><NavLink to="/contact">Contact</NavLink></S.ItemList>
    </S.MenuList>
  );
}

export default Menu;