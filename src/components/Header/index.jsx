import styled from "styled-components";
import bg from "../../assets/bg-image.png";
import logoimg from "../../assets/Logo.png"



export default function Header (){

  const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 300px;
    background-image: url(${bg});
  `

  const Logo = styled.div`
    width: 100px;
    hieght: 200px;
  `
  const MainTitle = styled.h1`
    font-size: 80px;
    font-family: "Serenity";
    color: rgb(149, 191, 70);
    line-height: 1.889;
    align-content: flex-end;
  `

  const TagLine = styled.h2`
    font-size: 26px;
    font-family: "Serenity";
    color: rgb(149, 191, 70);
    align-content: flex-start;
    margin-top: 0px;

  `

  return (
    <MainContainer>
      <Logo>
        <img src={logoimg}/>
      </Logo>
      <MainTitle>
        The Shoppies
      </MainTitle>
      <TagLine>
        Nominate. Save. Share.
      </TagLine>
    </MainContainer>
  )
}