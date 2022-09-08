import React from 'react';
// import Card from './Cards';
import './Cards.css';

// function App() {
//   return (
//     <>
//     <div className='cards'>
//       <Card 
//         img="https://picsum.photos/id/1/150/150" 
//         name="urvi"
//         email="urvi143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/150/150" 
//         name="neelam"
//         email="neelam143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/id/1002/150/150" 
//         name="miral"
//         email="miral143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/id/10/150/150" 
//         name="dhruv"
//         email="dhruv143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/id/1003/150/150" 
//         name="kartik"
//         email="kartik143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/id/1001/150/150" 
//         name="anjali"
//         email="anjali143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/id/1006/150/150" 
//         name="priyanka"
//         email="priyanka143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/id/101/150/150" 
//         name="grena"
//         email="grena143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/id/1011/150/150" 
//         name="pratik"
//         email="pratik143@gmail.com"
//         number="1234567890"
//       />
//       <Card 
//         img="https://picsum.photos/id/1019/150/150" 
//         name="nidhi"
//         email="nidhi143@gmail.com"
//         number="1234567890"
//       />
//     </div>
//     </>
//   );
// }


function App() {
	const Userdata = [
		{
			"img":"https://picsum.photos/id/10/150/150" ,
      "name":"dhruv",
      "email":"dhruv143@gmail.com",
      "number":"1234567890"
		},
		{
      "img":"https://picsum.photos/id/1/150/150" ,
      "name":"urvi",
      "email":"urvi143@gmail.com",
      "number":"1234567890"
		},
		{
			"img":"https://picsum.photos/150/150" ,
      "name":"neelam",
      "email":"neelam143@gmail.com",
      "number":"1234567890"
    },
		{
			"img":"https://picsum.photos/id/1002/150/150" ,
      "name":"miral",
      "email":"miral143@gmail.com",
      "number":"1234567890"
		},
		{
			"img":"https://picsum.photos/id/1003/150/150" ,
      "name":"kartik",
      "email":"kartik143@gmail.com",
      "number":"1234567890"
		},
    {
      "img":"https://picsum.photos/id/1001/150/150" ,
      "name":"anjali",
      "email":"anjali143@gmail.com",
      "number":"1234567890"
    },
    {
      "img":"https://picsum.photos/id/1006/150/150" ,
      "name":"priyanka",
      "email":"priyanka143@gmail.com",
      "number":"1234567890"
    },
    {
      "img":"https://picsum.photos/id/101/150/150" ,
      "name":"grena",
      "email":"grena143@gmail.com",
      "number":"1234567890"
    },
    {
      "img":"https://picsum.photos/id/1011/150/150" ,
      "name":"pratik",
      "email":"pratik143@gmail.com",
      "number":"1234567890"
    },
    {
      "img":"https://picsum.photos/id/1019/150/150" ,
      "name":"nidhi",
      "email":"nidhi143@gmail.com",
      "number":"1234567890"
    }];

	  return (
		  Userdata.map(
      (element) => {
        return(
          <>
          <div className='cards'>
           <div className='card'>
            <div className="info">
              <img src={element.img} className="img"/><br/>
              <label className="name">Username:{element.name}</label><br/>
              <label className="email">E-mail:{element.email}</label><br/>
              <label className="number">Ph_No:{element.number}</label>
            </div>
           </div>
          </div>
          </>
        );
      }
      )
    );
  }

export default App;



