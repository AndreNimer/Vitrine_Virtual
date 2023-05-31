import './Row2.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Row2() {
  const [peca, setPeca] = useState({});
  const { id } = useParams();

  const fetchPeca = async (_id) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${_id}`);
      setPeca(response.data);
    } catch (error) {
      console.log('error ProductDetails: ', error);
    }
  };

  useEffect(() => {
    fetchPeca(id);
  }, [id]);

  return (
    <div className='Row2-container'>
      <h1 className='Row2-header'>Detales do Produto</h1>
      <div className='Row2-cards'>
        <div className='img-conteiner'>
          <img
            className='img-card'
            src={peca.image}
            alt={peca.title}
          /> 
          <p>
              <span className='bold'>{peca.title}</span>
          </p>
        </div>
        <div className='descricao-conteiner'>
          
          
          <p><span className='bold'>Descrição: </span>{peca.description}</p>
          <p><span className='bold'>Category: </span> {peca.category}</p>
          <p>
            <span className='bold'>R$: </span> {peca.price}
          </p>
        </div>
      
      </div>
    </div>
  );
}

export default Row2;