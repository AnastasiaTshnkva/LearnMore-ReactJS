import React from 'react';
import styled from 'styled-components';

const StyledListOfCardBundles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // background-color: ${props => props.theme.partBackgroundColor};
  margin-bottom: 20px;
  .bundle-box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 130px;
    background-color: ${props => props.theme.cardColor};
    margin: 10px;
    border: 3px solid ${props => props.theme.cardBorderColor};
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      &:hover {
        box-shadow: 0 0 5px ${props => props.theme.buttonHoverShadow};
      }
    }
    .description {
      display: block;
      text-align: center;
      font-size: 22px;
      line-height: 26px;
    }
  }
`

const ListOfCardBundles = () => {
    const bundlesData = [
        {id: '1', bundlesName: 'xcvbnm', description: 'fghjkl',},
        {id: '2', bundlesName: 'cvhjkl', description: 'fghjkl',},
        {id: '3', bundlesName: 'sdfghjkl;', description: 'fghjkl',},
        {id: '4', bundlesName: 'wertyuio', description: 'fghjkl',},
        {id: '5', bundlesName: 'wefghji', description: 'fghjkl',},
        {id: '6', bundlesName: 'wertyuio', description: 'fghjkl',},
        {id: '7', bundlesName: 'qwfghjkl fvghjk fghjk dfghjkl dfghjk', description: 'fghjkl',},
    ];


    return (
        <StyledListOfCardBundles>
            {bundlesData.map((data, index) => {
            return(
                <div key={index} className={'bundle-box'}>
                    <p className={'description'}>{data.bundlesName}</p>
                </div>
            )})}

        </StyledListOfCardBundles>


    )

}

export default ListOfCardBundles;
