import React from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { usePokemons } from './hooks/usePokemons.hook';

import './styles.css';
import { Loading } from './components';

const FetchExample: React.FC = () => {
  const {
    pokemons,
    loading,
    error,
    page,
    totalPages,
    nextUrl,
    prevUrl,
    handlePageChange,
  } = usePokemons(20);

  const pagesToShow = 5;

  const startPage = Math.max(1, page - pagesToShow);
  const endPage = Math.min(totalPages, page + pagesToShow);

  return (
    <div style={{ overflow: 'auto', height: '80vh' }}>
      <h1>Pokemons</h1>
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <Loading />
        </div>
      )}
      {error && <p>{error}</p>}
      {pokemons.length > 0 && (
        <>
          <div style={{ overflow: 'auto', height: '80%' }} className="my-2">
            <Table responsive size="sm" hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>URL</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {pokemons.map((pokemon) => (
                  <tr key={pokemon.name}>
                    <th scope="row">
                      <td>{pokemon.name}</td>
                    </th>

                    <td>
                      <a href={pokemon.url} target="blank">
                        {pokemon.url}
                      </a>
                    </td>
                    <td>
                      <img height={50} src={pokemon.image} alt={pokemon.name} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <Pagination size="sm" aria-label="Page navigation example">
            <PaginationItem disabled={!prevUrl}>
              <PaginationLink first onClick={() => handlePageChange(1)} />
            </PaginationItem>

            <PaginationItem disabled={!prevUrl}>
              <PaginationLink
                previous
                onClick={() => handlePageChange(page - 1)}
              />
            </PaginationItem>

            {[...Array(endPage - startPage + 1)].map((_, i) => (
              <PaginationItem key={i} active={startPage + i === page}>
                <PaginationLink onClick={() => handlePageChange(startPage + i)}>
                  {startPage + i}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem disabled={!nextUrl}>
              <PaginationLink next onClick={() => handlePageChange(page + 1)} />
            </PaginationItem>

            <PaginationItem disabled={!nextUrl}>
              <PaginationLink
                last
                onClick={() => handlePageChange(totalPages)}
              />
            </PaginationItem>
          </Pagination>
        </>
      )}
    </div>
  );
};

export default FetchExample;
