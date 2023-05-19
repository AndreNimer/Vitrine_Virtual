import React, {useEffect} from   'react'
import { getPecas } from '../Api';
import './Row.css'

function Row({title, path, isLarge}) {
    const [Pecas, setPecas] = React.useState([])

    const fetchPecas = async (_path) => {
       try{

        const data = await getPecas(_path);

        setPecas(data?.results)

       }catch(error) {
        console.log('error Row: ', error)
       }

    }

    useEffect( () => {

        fetchPecas(path)

    }, [path] )

    let truncate = (str, n) => {
      return str?.length > n ? str?.substr(0, n-1) + '...' : str;
    }


    return (
        <div className='row-container'>
            <h1 className='row-header'>{title}</h1>
            <div className='row-cards'>
              {Pecas?.map((Pecas) => {
                  return (
                    <div className='borda'>
                      <a href='./Row2'className='textoconteudo'>
                        <img
                            className={`Pecas-card` }
                            key={Pecas.id} 
                            src={Pecas.thumbnail} 
                            alt={Pecas.name}
                        >
                        </img>
                        <p><span className='bold'>{truncate(Pecas?.title, 55 )}</span></p>
                        <p><span className='bold'>R$:</span> {Pecas.price}</p>
                        <p><span className='bold'>Descriçao:</span> {Pecas.description}</p>
                      </a>
                    </div>
                  )
              })}
            </div>
        </div>
    )

}

export default Row;