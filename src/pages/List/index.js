import { useEffect, useState } from 'react';
import api from '../../services/api';

import Item from '../../components/Item';

import * as S from './styles';

const List = () => {
  const [listCollaborator, setListCollaborator] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const limit = 10;

  const splitData = (items, max) => items.reduce((accumulator, item, index) => {
    const group = Math.floor(index / max);
    accumulator[group] = [...(accumulator[group] || []), item];
    return accumulator;
  }, []);

  useEffect(() => {
    api.get('/').then(({ data }) => {
      setTotalPage(Math.ceil(data.length / limit));
      setListCollaborator(data.slice(0, limit));
      setTotalData(splitData(data, limit));
    });
  }, []);

  const previousPage = () => {
    setListCollaborator(totalData[currentIndex - 1]);
    setCurrentIndex(currentIndex - 1);
  };

  const nextPage = () => {
    setListCollaborator(totalData[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <S.Container>
      <S.Actions>
        <button type="button" disabled={currentIndex <= 0} onClick={() => previousPage()}>Anterior</button>
        <button type="button" disabled={(currentIndex + 1) >= totalPage} onClick={() => nextPage()}>Próxima</button>
      </S.Actions>
      <S.Content>
        {listCollaborator.map((collaborator) => (
          <Item
            name={collaborator.name}
            company={collaborator.company}
            role={collaborator.role}
            avatar={collaborator.avatar}
          />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default List;
