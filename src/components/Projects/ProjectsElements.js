import styled from "styled-components";
export const ProjectsContainer=styled.div`
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background: #010606;
    padding-top: 80px;
    @media screen and (max-width: 768px){
        height: 1300px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const ProjectsWrapper=styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 21px;
    padding: 0 24px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 24px;
    }
`;

export const ProjectsCard=styled.div`
    background: #F7F6F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectsIcon=styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ProjectsH1=styled.h1`
    font-size: 2.5rem;
    color: #F7F6F2;
    margin-bottom: 64px;
    margin-top: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const ProjectsH2=styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #11324D;
`;

export const ProjectsP=styled.p`
    font-size: 1rem;
    text-align: center;
    color: #11324D;
`;