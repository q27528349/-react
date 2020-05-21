import styled from 'styled-components';
import logopic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
z-index:1;
position:relative;
height:58px;
border-bottom:1px soild #f0f0f0;
`

export const Logo = styled.a`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background-image:url(${logopic});
background-size:contain;
`
export const Nav = styled.div`
width:1440px;
height:100%;
margin:0 auto;
padding-right:70px;
box-sizing:border-box;
`

export const NavItem = styled.div`
line-height:58px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a
}`
export const NavSeacth = styled.input.attrs({
    placeholder: '搜索'
})`
width:160px;
height:38px;
padding:0 35px 0 20px;
margin-top:9px;
margin-left:20px;
box-sizing:border-box;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;
&::placeholder{
    color:#999;
}
&.focused{
    width:300px;
}
&.slide-enter{

transition:all .2s ease-out;
}
&.slide-enter-active{
width:300px;
}
&.slide-exit{
transition:all .2s ease-out;
}
&.slide-exit-active{
width:160px;
}`


export const Addtion = styled.div`
position:absolute;
right:0;
top:0;
height:56px;`

export const Button = styled.div`
float:right;
margin-top:9px;
line-height:38px;
margin-right:20px;
padding:0 20px;
border-radius:19px;
border:1px solid #ec6149;
&.reg{
    color:#ec6149;
}
&.writting{
    color:#fff;
    background:#ec6149
}
`
export const SearchWrapper = styled.div`
float:left;
position:relative;
`
export const SearchInfo = styled.div`
position:absolute;
left:0px;
top:56px;
width:285px;
padding:0 24px;
box-shadow:0 0 8px rgba(0,0,0,.2);
background:white;`

export const SearchInfoTitie = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;`

export const SearchInfoSwtich = styled.div`
float:right;
font-size:14px;
cursor: pointer;`

export const SearchInfoItem = styled.a`
display:block;
float:left;
line-height:20px;
margin-right:10px;
margin-bottom:10px;
padding:0 5px;
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;`

export const SearchInfoList= styled.div`
overflow:hidden;`