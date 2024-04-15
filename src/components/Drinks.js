import React from 'react'

const Drinks = () => {

	const drinks =[
		{
			idDrink
			:	"11007",
			strDrink
			:	"Margarita",
			strDrinkAlternate
			:	null,
			strTags
			:	"IBA,ContemporaryClassic",
			strVideo
			:	null,
			strCategory
			:	"Ordinary Drink",
			strIBA
			:"Contemporary Classics",
			strAlcoholic
			:	"Alcoholic",
			strGlass
			:	"Cocktail glass",
			strInstructions  // 만드는 방법
			:		"Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
			
			strInstructionsES
			:	null,
			strInstructionsDE
			:	"Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
			strInstructionsFR
			:	null,
			strInstructionsIT
			:	"Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale. Avere cura di inumidire solo il bordo esterno e cospargere di sale. Il sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail. Shakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
			strInstructionsZH
			:		null,
			strInstructionsZH
			:		null,
			strDrinkThumb
			:	"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
			,strIngredient1
			:		"Tequila"
			,strIngredient2
			:		"Triple sec"
			,strIngredient3
			:		"Lime juice"
			,strIngredient4
			:		"Salt"
			,strIngredient5
			:		null
			,strIngredient6
			:		null
			,strIngredient7
			:		null
			,strIngredient8
			:		null
			,strIngredient9
			:		null
			,strIngredient10
			:		null
			,strIngredient11
			:		null
			,strIngredient12
			:		null
			,strIngredient13
			:
			null
			,strIngredient14
			:		null
			,strIngredient15
			:		null
			,strMeasure1
			:		"1 1/2 oz "
			,strMeasure2
			:		"1/2 oz "
			,strMeasure3
			:		"1 oz "
			,strMeasure4
			:		null
			,strMeasure5
			:		null
			,strMeasure6
			:		null
			,strMeasure7
			:		null
			,strMeasure8
			:		null
			,strMeasure9
			:		null
			,strMeasure10
			:		null
			,strMeasure11
			:		null
			,strMeasure12
			:
			null
			,strMeasure13
			:
			null
			,strMeasure14
			:		null
			,strMeasure15
			:		null
			,strImageSource
			:		"https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg"
			,strImageAttribution
			:		"Cocktailmarler"
			,strCreativeCommonsConfirmed  //저작권여부
			:	"Yes"
			,dateModified
			:	"2015-08-18 14:42:59"
		}
	];

	const result =[]

	drinks.forEach(drink =>{
		//음료이름
		const drinkName = drink.strDrink;

		// 해당 음료의 재료와 양 추출
		const ingredients =[]
		const measures =[]
		for (let i=1; i<=15; i++){
			const ingredient = drink[`strIngredient${i}`];
			const measure = drink[`strMeasure${i}`];
			if(ingredient && measure){
				ingredients.push(ingredient);
				measures.push(measure)
			}
		}

		// 재료와 양을 매칭하여 객체로 저장
		// const matchedIngredients ={};
		const matchedIngredients =[]
		ingredients.forEach((ingredient, index)=>{
			// matchedIngredients[ingredient] = measures[index]
			matchedIngredients.push([ingredient, measures[index]])
		});

		// 결과 배열에 추가
		result.push( { name:drinkName, solution: matchedIngredients})

	});

	console.log(result)

  return (
	<div>
		<div>{result.map((drink, index)=>(
			<div key={index}>
				<div>{drink.name}</div>
				<div>`성분, 수량:${drink.solution[0]} : ${drink.solution[1]}`</div>
			</div>
		))}</div>
	</div>
  )
}

export default Drinks