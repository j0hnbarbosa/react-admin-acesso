import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import dataProvider from './dataProvider';

const Teste = (props) => {
  const [corEscolhida, setCorEscolhida] = useState('white');

  useEffect(() => {
    const asyncCorEscolhida = () => {
      const vlr = Math.floor(Math.random() * 3);
      // eslint-disable-next-line no-console
      console.log(vlr);
      if (vlr === 0) {
        setCorEscolhida('#ff9999');
      } else if (vlr === 1) {
        setCorEscolhida('#ffff99');
      } else if (vlr === 2) {
        setCorEscolhida('#adebad');
      }
    };
    asyncCorEscolhida();
  }, []);

  const type = 'TESTE';
  const resource = 'users';
  const params = {
    filter: {},
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'id', order: 'ASC' },
  };

  return (
    <div>
      <Paper style={{ background: corEscolhida }}>
        <div
          style={{ display: 'flex', justifyContent: 'center', padding: '25px' }}
        >
          HELLO!
        </div>
      </Paper>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => props.dataProvider(type, resource, params)}
      >
        TESTE
      </Button>
    </div>
  );
};

Teste.propTypes = {
  dataProvider: PropTypes.func.isRequired,
};

const maptStateToProps = (state) => ({ ...state });

export default connect(maptStateToProps, {
  dataProvider,
})(Teste);
