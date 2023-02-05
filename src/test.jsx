import React from 'react'



function Test() {
    const dataCollection = [
        {
          type:'sandwiches',
          
          content:['shs','akjshd','alskdj']
        }, {
            type:'sandwiches',
          
            content:['shs','akjshd','alskdj']
        }, {
            type:'sandwiches',
          
            content:['shs','akjshd','alskdj']
        }
      ];
    
      console.log(dataCollection[0].content)
      return (
        <div className="App">
          <div>My Item List</div>
{dataCollection.map((item) => 
          <ul>
            {item.type}
            {item.content.map((cont)=>
            <li>{cont}</li>)}
          </ul>
              )}
        </div>
      );
}

export default Test
