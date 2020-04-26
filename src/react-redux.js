import React, { createContext, useContext } from 'react';

const Context = createContext();

export const Provider = ({ store, children }) => {
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

const ConnectedComponent = ({ mapStateToProps, component }) => {
  const { getState } = useContext(Context);
  const state = getState();
  const props = mapStateToProps(state);
  return component(props);
};

export const connect = (mapStateToProps) => {
  return (Component) => {
    return () => (
      <ConnectedComponent
        mapStateToProps={mapStateToProps}
        component={Component}
      />
    );
  };
};
