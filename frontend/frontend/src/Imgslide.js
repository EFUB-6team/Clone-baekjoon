import React from "react";
import styled from "styled-components";

const Welcome = styled.div`
    text-align:center;
    margin-top:60px;
    margin-bottom:60px;
    color:#555;
`

function Imgslide() {
    const imgstyle = {
        width:'1170px',
        height: '60vh',
        objectFit: 'cover',
        filter: 'brightness(0.8',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    return (
        <div style={{textAlign:'center'}}>
            <img style={imgstyle} src="https://d2gd6pc034wcta.cloudfront.net/contest/42/e04ed392bc207f9f89d461842d85aa8006b607b1.jpg"></img>
            <Welcome>
                <h2 style={{fontWeight:'normal'}}>Baekjoon Online Judge</h2>
                <p style={{fontSize:'13px'}}>프로그래밍 문제를 풀고 온라인으로 채점받을 수 있는 곳입니다.</p>
            </Welcome>
        </div>
    );
}

export default Imgslide;