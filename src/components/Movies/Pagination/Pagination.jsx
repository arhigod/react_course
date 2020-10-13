import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPage } from '../../../store/actions';
import Button from '../../Button';
import { ArrowheadLeftOutline } from '@styled-icons/evaicons-outline/ArrowheadLeftOutline';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { ArrowheadRightOutline } from '@styled-icons/evaicons-outline/ArrowheadRightOutline';

const doubleArrowLeftIcon = <ArrowheadLeftOutline size='35' />;
const arrowLeftIcon = <ArrowIosBackOutline size='35' />;
const arrowRightIcon = <ArrowIosForwardOutline size='35' />;
const doubleArrowRightIcon = <ArrowheadRightOutline size='35' />;

import './Pagination.css';

const Pagination = ({ currentPage, totalAmount, setPage }) => {
    const pageAmount = Math.ceil(totalAmount / 12);

    const onClick = useCallback(({ currentTarget }) => {
        let nextPage = +currentTarget.getAttribute('data-data');
        nextPage = nextPage < 1 ? 1 : nextPage > pageAmount ? pageAmount : nextPage;

        if (nextPage !== currentPage) {
            setPage(nextPage);
        }
    }, [currentPage, pageAmount, setPage]);

    return (
        <>
            {
                totalAmount > 12 ?
                    <div className='movies_pagination'>
                        <Button onClick={onClick} icon={doubleArrowLeftIcon} type='transparent' data='1' />
                        <Button onClick={onClick} icon={arrowLeftIcon} type='transparent' data={currentPage - 1} />
                        <Button onClick={onClick} text={currentPage - 2} type='reject' className={currentPage < 3 ? 'dummy' : ''} data={currentPage - 2} />
                        <Button onClick={onClick} text={currentPage - 1} type='reject' className={currentPage < 2 ? 'dummy' : ''} data={currentPage - 1} />
                        <Button onClick={onClick} text={currentPage} data={currentPage} />
                        <Button onClick={onClick} text={currentPage + 1} type='reject' className={currentPage > pageAmount - 1 ? 'dummy' : ''} data={currentPage + 1} />
                        <Button onClick={onClick} text={currentPage + 2} type='reject' className={currentPage > pageAmount - 2 ? 'dummy' : ''} data={currentPage + 2} />
                        <Button onClick={onClick} icon={arrowRightIcon} type='transparent' data={currentPage + 1} />
                        <Button onClick={onClick} icon={doubleArrowRightIcon} type='transparent' data={pageAmount} />
                    </div> :
                    null
            }
        </>
    );
};

const mapStateToProps = (state) => ({
    currentPage: state.currentPage,
    totalAmount: state.totalAmount
});
const mapDispatchToProps = dispatch => ({
    setPage: (page) => dispatch(setPage(page))
});

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalAmount: PropTypes.number,
    setPage: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
