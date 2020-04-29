import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import dataProvider from "./dataProvider";

const Teste = () => {
  // const type = "TESTE";
  // const resource = "users";
  // const params = {
  //   filter: {},
  //   pagination: { page: 1, perPage: 10 },
  //   sort: { field: "id", order: "ASC" },
  // };

  return (
    <div>
      <Button
        color="primary"
        variant="outlined"
        // onClick={() => props.dataProvider(type, resource, params)}
      >
        TESTE
      </Button>
    </div>
  );
};

const maptStateToProps = (state) => {
  return { ...state };
};

export default connect(maptStateToProps, {
  dataProvider,
})(Teste);
