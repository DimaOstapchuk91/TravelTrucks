import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCamperById } from '../../redux/campers/operations.js';
import { selectOneCamper } from '../../redux/campers/selectors.js';

const CamperPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataCamper = useSelector(selectOneCamper);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, []);
  console.log(id);
  return <div>CamperPage</div>;
};
export default CamperPage;
