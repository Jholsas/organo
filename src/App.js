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
      color: "#FFE15D"
    },
    {
      id: uuidv4(),
      name: 'Front-End',      
      color: "#F49D1A"
    },
    {
      id: uuidv4(),
      name: 'Data Science',      
      color: "#DC3535"
    },
    {
      id: uuidv4(),
      name: 'Devops',      
      color: "#B01E68"
    },
    {
      id: uuidv4(),
      name: 'UX and Design',      
      color: "#DB6EBF"
    },
    {
      id: uuidv4(),
      name: 'Mobile',      
      color: "#FFBA05"
    },
    {
      id: uuidv4(),
      name: 'Innovation and Management',      
      color: "#FF8A29"
    }
  ])

  const startLoad = [
    {
      id: uuidv4(),
      name: 'JOAO SILVA',
      position: 'DEVELOPER',
      image: 'https://github.com/Jholsas.png',
      team: teams[0].name,
      favorite: true
    },
    {
      id: uuidv4(),
      name: 'FERNANDO MOLADO',
      position: 'DEVELOPER',
      image: 'https://github.com/fermolanoc.png',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JOANY NERES',
      position: 'DEVELOPER',
      image: 'https://github.com/JoanyNeres.png',
      team: teams[0].name,
      favorite: false
    },    
    {
      id: uuidv4(),
      name: 'MONICA HILLMAN',
      position: 'DEVELOPER',
      image: 'https://github.com/MonicaHillman.png',
      team: teams[0].name,
      favorite: false
    },    
    {
      id: uuidv4(),
      name: 'JOAO SILVA',
      position: 'DEVELOPER',
      image: 'https://github.com/Jholsas.png',
      team: teams[1].name,
      favorite: true
    },
    {
      id: uuidv4(),
      name: 'FERNANDO MOLADO',
      position: 'DEVELOPER',
      image: 'https://github.com/fermolanoc.png',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JOANY NERES',
      position: 'DEVELOPER',
      image: 'https://github.com/JoanyNeres.png',
      team: teams[1].name,
      favorite: false
    },
    { id: uuidv4(),
      name: 'MONICA HILLMAN',
      position: 'DEVELOPER',
      image: 'https://github.com/MonicaHillman.png',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JOAO SILVA',
      position: 'DEVELOPER',
      image: 'https://github.com/Jholsas.png',
      team: teams[2].name,
      favorite: true
    },
    {
      id: uuidv4(),
      name: 'FERNANDO MOLADO',
      position: 'DEVELOPER',
      image: 'https://github.com/fermolanoc.png',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JOANY NERES',
      position: 'DEVELOPER',
      image: 'https://github.com/JoanyNeres.png',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'MONICA HILLMAN',
      position: 'DEVELOPER',
      image: 'https://github.com/MonicaHillman.png',
      team: teams[2].name,
      favorite: false
    },

    {
      id: uuidv4(),
      name: 'JOAO SILVA',
      position: 'DEVELOPER',
      image: 'https://github.com/Jholsas.png',
      team: teams[3].name,
      favorite: true
    },
    {
      id: uuidv4(),
      name: 'FERNANDO MOLADO',
      position: 'DEVELOPER',
      image: 'https://github.com/fermolanoc.png',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JOANY NERES',
      position: 'DEVELOPER',
      image: 'https://github.com/JoanyNeres.png',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'MONICA HILLMAN',
      position: 'DEVELOPER',
      image: 'https://github.com/MonicaHillman.png',
      team: teams[3].name,
      favorite: false
    },
  ]

  const [employees, setEmployees] = useState(startLoad)

  function deleteEmployee(id, name, position) {
    
    setEmployees(employees.filter( employee => employee.id !== id ))
    console.log("Deleting Employee:", id, " ",name," ", position)
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

  function solveFavorite(id, name){    
    console.log(" SOLVE FAVORITE ")
    console.log(id, ' ',name)

    setEmployees(employees.map( employee =>{
        if(employee.id === id) employee.favorite = !employee.favorite;            
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
          key={team.id}
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
