import './App.css';
import { useState } from 'react';
import { Row, Divider } from 'antd';
import foodsJSON from './foods.json';
import SearchBar from './components/SearchBar';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [search, setSearch] = useState('');

  const filteredFoods = foods.filter((food) => {
    const searchCheck = food.name.toLowerCase().includes(search.toLowerCase());

    return searchCheck;
  });
  //  setFoods(filteredFoods);

  const handelDelete = (foodToDelete) => {
    foods.filter((food) => {
      if (food.name !== foodToDelete) {
        return true;
      }
    });
    setFoods(filteredFoods);
  };

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <Divider>Food List</Divider>
      <h1>Food List</h1>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.map((food) => {
          return (
            <FoodBox
              handelDelete={handelDelete}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
