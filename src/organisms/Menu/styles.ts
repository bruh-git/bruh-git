import styled from 'styled-components';

export const MenuList = styled.ul`
  margin-left: auto;
  display: flex;
  flex-flow: row nowrap;
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #17a4d0;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      a {color: #fff;}
      padding: 18px 20px;
    }
  }
`;

export const ItemList = styled.li`
  display: inline-block;
  margin-right: 25px;
  font-weight: 500;
  &:hover {
    a {
      color: #17a4d0;
    }
  }
  a {
    color: #1e255e;
    transition: color 0.25s ease;
  }
`;