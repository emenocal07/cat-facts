import { useEffect, useState } from 'react';
import Title from '../components/Title/Title';
import axios from 'axios';
import { Button, Col, Row, Spin } from 'antd';
import './MainPage.css'

const MainPage = () => {

    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFact()
    }, [])


    const getFact = () => {
        setLoading(true);
        axios.get('https://cat-fact.herokuapp.com/facts/random')
            .then(response => {
                setFact(response.data.text);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <Title />
            <Button className='button' onClick={() => getFact()} type='primary' ghost>Click me!</Button>
            {loading
                ?
                <div className='spinner'><Spin size="large" /> </div>
                :

                <Row >
                    <Col className='fact' span={12} offset={6}>
                        <p>{fact}</p>
                    </Col>
                </Row>}


        </>
    )
}

export default MainPage
