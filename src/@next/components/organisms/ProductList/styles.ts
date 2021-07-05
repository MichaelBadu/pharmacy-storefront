import { media, styled } from "@styles";

export const List = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, 255px);;
  grid-gap: 2rem;

  ${media.mediumScreen`
    grid-template-columns: repeat(auto-fit, 255px);;
    grid-gap: 1.5rem;
  `}

  ${media.smallScreen`
    grid-template-columns: repeat(auto-fit, 255px);;
    grid-gap: 1rem;
  `}
`;

export const Loader = styled.div`
  text-align: center;
  margin: 2.5rem 0;
`;
