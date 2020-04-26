import React, { createContext, useContext } from 'react';

const Context = createContext();

export const Provider = ({ store, children }) => {
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

const ConnectedComponent = ({
  mapStateToProps,
  mapDispatchToProps,
  component,
}) => {
  const { getState, dispatch } = useContext(Context);
  const state = getState();
  const props = {
    ...(mapStateToProps && mapStateToProps(state)),
    ...(mapDispatchToProps && mapDispatchToProps(dispatch)),
  };
  return component(props);
};

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Component) => {
    return () => (
      <ConnectedComponent
        mapStateToProps={mapStateToProps}
        mapDispatchToProps={mapDispatchToProps}
        component={Component}
      />
    );
  };
};
