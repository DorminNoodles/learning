import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

	console.log (props.ingredients);

	// let transformedIngredients = Object.keys(props.ingredients).map( key => {
	// 	var arr = [...Array(props.ingredients[key])];
	// 	var modifiay = arr.map((elem, i) => {
	// 		return <BurgerIngredient key={key + i} type={key} />;
	// 	})
	// 	return modifiay
	// }).reduce((accumlator, el) => {
	// 	return accumlator.concat(el)
	// })
	// var reduced = []
	// for (let elem of res) {
	// 	reduced.push(...elem)
	// }
	let transformedIngredients = Object.keys(props.ingredients)
	.map(igKey => {
		return [...Array(props.ingredients[igKey])].map( (el, index) => {
			return <BurgerIngredient key={igKey + index} type={igKey} />
		})
	}).reduce((accu, el) => {
		return accu.concat(el);
	}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients !</p>
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
