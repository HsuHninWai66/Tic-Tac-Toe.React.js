import { useState } from 'react';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function User({ count, onClick }){
  return (
    <div>
      <button onClick={onClick}>Increment</button>
      <p>Count: {count}</p>

    </div>
  );
}

// export function ShoppingList() {
//   const listItems = products.map(product =>
//     <li 
//       key={product.id}
//       style={{color: product.isFruit ? 'magenta' : 'pink'}}>
//       {product.title}
//     </li>
//   );

//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <ul>{listItems}</ul>
//       <h1>Counters that update seperately</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </>
//   );
 
// }

export default User;