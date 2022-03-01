import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Categories from './components/Categories';
import { connect } from 'react-redux';

function App(props) {
  const handleClick = e => {
    e.preventDefault();
    console.log(e.target.id);
  };
  console.log(props.allCategories.active);
  return (
    <>
      <Header />
      <Products />
      {props.allCategories.categories.map((item, idx) => (
        <div
          onClick={handleClick}
          id={item.name}
          value={item.name}
          name={item.name}
        >
          {item.name}
        </div>
      ))}
      <Categories />

      <Footer />
    </>
  );
}

const mapStateToProps = state => {
  return {
    allCategories: state.categories,
  };
};
const mapDispatchToProps = dispatch => ({
  increment: category =>
    dispatch({ type: 'SET_ACTIVE_CATEGORY', payload: category }),
  reset: () => dispatch({ type: 'REST_ACTIVE' }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);