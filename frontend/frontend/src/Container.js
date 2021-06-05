import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import active from "./assets/blue.png";
import notactive from "./assets/gray.png";

const Wrapper = styled.div`
padding-top:40px;
padding-bottom: 40px;
display: flex;
flex-direction: row;
justify-content: center;
font-size: 13px;    

a:link{
    color : var(--content);
    text-decoration: none;
}
a:visited{
    text-decoration: none;
    color : var(--content);
}
a:hover  {
    text-decoration: underline;
}
`

const Context = styled.div`
display: flex;
flex-direction: column;
padding:15px;
`

const Title = styled.div`
margin-top:10px;
margin-bottom: 25px;
h2{
    margin: 0px;
    width: fit-content;
    padding: 5px;
    border-bottom: 2px solid;
    border-color: var(--point);
}    
`

const Card = styled.div`
width:255px;
height: auto;
padding-top: 10px;
padding-left: 10px;
margin-bottom: 10px;
background-color : #F7F7F7;
flex-wrap: wrap;

a {
color: #333333;
text-decoration: none;
    :hover {
    text-decoration: underline;
    }
}
.triangle{
width:15px;
height:15px;
background : url(${notactive});
background-size : 100%;
margin: 0px;
display: inline-block;
margin-left: 240px;
}

:hover{
    .triangle {
    width:15px;
    height:15px;
    background : url(${active});
    background-size : 100%;
    }
    
} 
`

function Container() {
    //문제 순위
    const [rankdata, setRankdata] = useState();
    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/problem/sort/rank`);
            setRankdata(response.data); //데이터 저장
        } catch (e) {
            console.log("error");
        }
    }, []);

    return (

        <Wrapper>
            <Context>
            <Title><h2><a href="">새로운 글</a></h2></Title>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
            </Context>

            <Context>
            <Title><h2><a href="">새로운 글</a></h2></Title>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
            </Context>

            <Context>
            <Title><h2><a href="">새로운 글</a></h2></Title>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
                <Card>
                    <a href="">21925번 짝수 팰린드롬</a>
                    <div class="triangle"></div>
                </Card>
            </Context>
        
            <Context>
                <Title><h2><a href=''>문제 순위</a></h2></Title>
                {rankdata?.map((item, i) => {
                    if (i < 7)
                        return (
                            <Card>
                                <a href="" style={{ position: 'absolute', color: '#333', fontSize: '15px', margin: '10px', textDecoration: 'none' }}>
                                    {item.id}번 {item.title}
                                </a>
                                <img src={notactive} />
                            </Card>
                        )
                }
                )}
            </Context>

            <Context>

            </Context>
        </Wrapper>
    );

}

export default Container;