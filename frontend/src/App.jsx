import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';
import './App.css'


function App() {
  const TeamMembers=[
    {
      id:1,
      name:"Shiva",
      title:"Software engineer"
    },
    
    {
      id:2,
      name:"parvati",
      title:"Software devoloper"
    }

  ]
  return (
    <div>
      {TeamMembers.map((member)=>(
        <div>
          {<TeamMemberCard member={member}/>}
        </div>
      ))}
    </div>
  )
}

export default App
