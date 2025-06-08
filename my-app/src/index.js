// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const url = 'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg';
// const productPrice = 1000;
// const sale = 0.1

// const card = (
//   <>
//     <img src= {url} alt="Macbook" width='500'/>
//     <h2>Maacbook</h2>
//     <p>price: {productPrice-(productPrice*sale)}</p>
//     <button type="button">Buy</button>
//   </>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(card);


// const Mail = ({ unrealMessage }) => {
//   return(
//     <div>
//      <h2>Hello</h2>
//       {unrealMessage.lenght > 0 && (
//         <p>You have message</p>
//       )}
//     </div>
//   )
// }

// const Main = ({username, unrealMesage}) => {
//   return (
//     <div>
//       <h2>Hello</h2>
//       {unrealMesage.lenght > 0 ? (
//         <p>You have message</p>
//       ): (<p>you dont have a message</p>)}
//     </div>
//   )
// }

//const Main = ({username, unrealMesage}) => {
//  return (
//    <div>
//      <h2>Hello {username}</h2>
//      <p>
//        {unrealMesage.lenght > 0 
//       ? 'You have message'
//        : 'you dont have a message'
//        }
//      </p>
//    </div>
//  )
//}

//const favouriteBooks = [
// { id: "id-1", name: "JS for beginners" },
// { id: "id-2", name: "React basics" },
// { id: "id-3", name: "React Router overview" },
// { id: "id-4", name: "Redux in depth" },
//];

//const list = ({ books }) => {
//  return (
//    <ul>
//      {books.map(book => {
//        <li key={book.id}>{ book.name}</li>
//      })}
//    </ul>
//  )
//}

const Produkt = props => (
  <>
  <img src= {url} alt="Macbook" width='500'/>
  <h2>Maacbook</h2>
  <p>price: {productPrice-(productPrice*sale)}</p>
  <button type="button">Buy</button>
  </>
)