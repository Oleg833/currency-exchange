import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';
import { Rates } from 'pages/Rates';
import { useEffect } from 'react';
import { fetchUserCurrency } from 'redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCurrency } from 'redux/selectors';
import { addBaseCurrency } from 'redux/slice';

export const App = () => {
  const dispatch = useDispatch();
  const currency = useSelector(selectBaseCurrency);

  useEffect(() => {
    if (currency) return;
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;

      dispatch(fetchUserCurrency(crd));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      dispatch(addBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch, currency]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
