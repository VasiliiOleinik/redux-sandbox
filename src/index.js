
// state = текущее состояние
// action = действие, которое нужно совершить
// У action есть тип и в зависимости от типа  - совершаем определенное действие
const reducer = (state = 0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	}  else {
		return state;
	}
}

let state = reducer(undefined, {});

state = reducer(state, {type: 'INC'});
console.log(state);

state = reducer(state, {type: 'INC'});
console.log(state);