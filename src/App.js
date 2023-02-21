import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programmer',      
      color: "#D9F7E9"
    },
    {
      id: uuidv4(),
      name: 'Front-End',      
      color: "#E8F8FF"
    },
    {
      id: uuidv4(),
      name: 'Data Science',      
      color: "#F0F8E2"
    },
    {
      id: uuidv4(),
      name: 'Devops',      
      color: "#FDE7E8"
    },
    {
      id: uuidv4(),
      name: 'UX and Design',      
      color: "#FAE9F5"
    },
    {
      id: uuidv4(),
      name: 'Mobile',      
      color: "#FFF5D9"
    },
    {
      id: uuidv4(),
      name: 'Innovation and Management',      
      color: "#FFEEDF"
    }
  ])

  const startLoad = [
    {
      name: 'João Dos Santos Silva',
      position: 'Developer',
      image: 'https://github.com/Jholsas.png',
      team: teams[1].name,
      favorite: false
    },
  ]

  const [employees, setEmployees] = useState(startLoad)

  function deleteEmployee(name, position) {
    setEmployees(employees.filter( employee => employee.name !== name ))
    console.log("Deleting Employee:", name," ", position)
  }

  function changeTeamColor(color, name) {    
    setTeams(teams.map(team => {            
      if (team.name === name) {
        team.color = color;
      } else{
        console.log('Team not found')
      }

      return team;
    }));
  }

  function createTeam(newTeam){
    setTeams([ ...teams,{...newTeam}])
  }

  function solveFavorite(name){    
    console.log(" SOLVE FAVORITE ")
    console.log(name)

    setEmployees(employees.map( employee =>{
        if(employee.name === name) employee.favorite = !employee.favorite;            
        return employee;
    }))
  }

  return (
    <section className="App">
      <Banner />
      <Form 
        createTeam={createTeam}
        teams={teams.map(team => team.name)} 
        onCreateEmployee={employee => setEmployees([...employees, employee])} 
      />            
      {teams.map(team =>        
        <Team
          onFavorite={solveFavorite}
          changeColor={changeTeamColor}
          key={team.name}
          name={team.name}          
          color={team.color}
          employees={employees.filter(employee => employee.team === team.name)}
          onDelete={deleteEmployee}
        />
      )}
      <Footer />
    </section>
  );
}

export default App;
