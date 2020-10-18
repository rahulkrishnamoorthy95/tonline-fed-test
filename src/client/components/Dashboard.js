import React, { useEffect, useState } from 'react';
import Card from './Card';
import Viewmore from './Viewmore';
import Loading from './Loading';

function Dashboard() {

    const [cardDetails, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const mapResponseToUI = (response = []) => {
        let result = [];
        const getDate = (dateObj) => {
            let dateString = new Date(dateObj);
            dateString = `${dateString.toLocaleString('default', { month: 'long' })} ${dateString.getDate()}, ${dateString.getFullYear()}`;
            return dateString;
        };
        response.forEach((element, key) => {
            const _UIModel = {};
            const { name, gender, location, email, dob, phone, cell, picture } = element;
            _UIModel.id = key;
            _UIModel.name = name?.first ? `${name.first} ${name.last}` : '';
            _UIModel.gender = gender || '';
            _UIModel.location = location ? `${location.city}, ${location.state}, ${location.country}` : '';
            _UIModel.postcode = location?.postcode;
            _UIModel.email = email || '';
            _UIModel.age = dob?.age || '';
            _UIModel.dob = dob?.date ?  getDate(dob.date): null;
            _UIModel.phone = phone || cell;
            _UIModel.picture = picture?.large || picture?.medium;
            result.push(_UIModel);
        });
        return result;
    }

    const fetchCards = (totalCount) => {
        setIsLoading(true);
        let requestUrl = 'https://randomuser.me/api/';
        if (totalCount) requestUrl = `${requestUrl}?results=${totalCount}`;
        fetch(requestUrl)
        .then(res => res.json())
        .then(response => {
            const result = mapResponseToUI(response.results);
            setDetails([...cardDetails, ...result]);
            setIsLoading(false);
        })
        .catch(error => console.log(error));
    }

    const onViewMoreClick = () => {
        fetchCards(5);
    }

    useEffect(() => {
        fetchCards();
    },[]);


    if (cardDetails.length < 1) {
        return <Loading isLoading={isLoading} />;
    }

    return (
        <section id="content">
            <div className="row">
                {cardDetails.length > 0 && <Card data={cardDetails}/>}
            </div>
            <Viewmore callback={onViewMoreClick} hidden={cardDetails.length < 1}/>
            <div className="total">
                {cardDetails.length > 0 && <span>Total cards: {cardDetails.length}</span>}
            </div>
        </section>
    );

}

export default Dashboard;
