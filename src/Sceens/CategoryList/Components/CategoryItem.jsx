import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import IcomoonReact from 'icomoon-react';
import iconSet from 'assets/Icons/selection.json';
import withModalContext from 'HOC/withModalContext';

const StyledCategoryItem = styled.div `
    
`

const CategoryItem = (props) => {

    console.log(props);


    return (
        <StyledCategoryItem>
            <div  className={'category__list-item'}>
                <Link to={props.link} className={'category__list-item__title'}
                      style={{ textDecoration: 'none' }}>{props.categoryName}</Link>
                <div className={'buttons-box'}>
                    <button type={'button'} className={'category__button'}>
                        <IcomoonReact iconSet={iconSet} color={'grey'} size={15} icon="pencil"/>
                    </button>
                    <button type={'button'} className={'category__button'}>
                        <IcomoonReact iconSet={iconSet} color={'grey'} size={15} icon="close"/>
                    </button>
                </div>
            </div>
        </StyledCategoryItem>
    );
};

CategoryItem.propTypes = {
    categoryID: PropTypes.any,
    link: PropTypes.string,
    categoryName: PropTypes.string,
}

export default CategoryItem;