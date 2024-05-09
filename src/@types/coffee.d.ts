interface Coffee {
	id: string;
	title: string;
	description: string;
	tags: CoffeeTags[];
	price: number;
	image: string;
}

type CoffeeTags =
	| "tradicional"
	| "gelado"
	| "com leite"
	| "especial"
	| "alcoólico";
