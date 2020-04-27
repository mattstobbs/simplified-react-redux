import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const Provider = ({ store, children }) => {
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

const ConnectedComponent = ({
  mapStateToProps,
  mapDispatchToProps,
  component,
}) => {
  const { getState, dispatch, subscribe } = useContext(Context);
  const state = getState();

  let stateProps = {};
  if (mapStateToProps) {
    stateProps = mapStateToProps(state);
  }
  const props = {
    ...stateProps,
    ...(mapDispatchToProps && mapDispatchToProps(dispatch)),
  };

  const [currentProps, setCurrentProps] = useState(props);

  useEffect(() => {
    const updateProps = () => {
      if (mapStateToProps) {
        const newStateProps = mapStateToProps(getState());

        if (JSON.stringify(newStateProps) !== JSON.stringify(stateProps)) {
          setCurrentProps({
            ...currentProps,
            ...newStateProps,
          });
        }
      }
    };

    const unsubscribe = subscribe(updateProps);

    return unsubscribe;
  });

  return component(currentProps);
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

export const useStore = () => {
  const store = useContext(Context);
  return store;
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};

export const useSelector = (selector) => {
  const { getState } = useContext(Context);
  const state = getState();
  const value = selector(state);
  return value;
};
