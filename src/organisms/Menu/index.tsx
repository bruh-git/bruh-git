import * as S from './styles';

const Menu = ({ open }) => {
  return (
    <S.MenuList open={ open }>
      <S.ItemList className='home'><a href="#">Home</a></S.ItemList>
      <S.ItemList className='about'><a href="#about">About</a></S.ItemList>
      <S.ItemList className='stack'><a href="#stack">Tech Stack</a></S.ItemList>
      <S.ItemList className='projects'><a href="#projects">Projects</a></S.ItemList>
      <S.ItemList className='contact'><a href="#contact">Contact</a></S.ItemList>
    </S.MenuList>
  );
}

export default Menu;