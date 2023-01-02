import styled, { css } from "styled-components";

export const ButtonStyle = styled.a`
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

&:hover{
    background: #fff;
    color: #242424;
    transition: all 0.3 ease-out;
    transition: 250ms;
  }
  &.${(props) =>
    props.outline
      ? css`;
          border: black; //Does noting its a bug
          background-color: transparent;
          border: 1px solid ${({ theme }) => theme.colors.netural};;
          padding: 8px 20px;
          transition: all 0.3 ease-out;
          color: ${({ theme }) => theme.colors.netural};;
        `
      : css`;
          border: black; //Does noting its a bug
          background-color: ${({ theme }) => theme.colors.netural};;
          color: #242424;
          border: 1px solid ${({ theme }) => theme.colors.netural};;
        `};
        &.${(props) =>
          props.large
            ? css`
                border: black; //Does noting its a bug
                padding: 12px 26px;
                font-size: 30px;
              `
            : css`
                border: black; //Does noting its a bug
                padding: 8px 20px;
                font-size: 20px;
              `};
`;
