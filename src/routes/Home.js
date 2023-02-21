import Header from 'components/Header';
import TodosLogic from 'components/TodosLogic';

const Home = () => (
  <div className="container">
    <div className="list">
      <Header />
      <TodosLogic />
    </div>
  </div>
);
export default Home;
