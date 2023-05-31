import React, { useEffect, useState } from 'react';
import { getPecas } from '../Api';
import './Row.css';
import { Link } from 'react-router-dom';
function Row({ title, path}) {
    const [Pecas, setPecas] = useState([]);

    const fetchPecas = async (_path) => {
        try {
            const data = await getPecas(_path);
            setPecas(data);
            console.log(setPecas(data))
        } catch (error) {
            console.log('error Row: ', error);
        }
    };

    useEffect(() => {
        fetchPecas(path);
    }, [path]);

    let truncate = (str, n) => {
        return str?.length > n ? str?.substr(0, n - 1) + '...' : str;
    };

    return (
        <div className='Row-container'>
            <h1 className='Row-header'>{title}</h1>
            <div className='Row-cards'>
                {Pecas?.map((Peca) => {
                    return (
                        <div className='borda' key={Peca.id}>
                            <Link to={`/products/${Peca.id}`} className='textoconteudo'>
                                <img
                                    className={`Pecas-card`}
                                    src={Peca.image}
                                    alt={Peca.title}
                                />
                                <p>
                                    <span className='bold'>{truncate(Peca?.title, 20)}</span>
                                </p>
                                <p>
                                    <span className='bold'>R$:</span> {Peca.price}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Row;