import graphql from 'graphql-request'

const { request } = graphql

async function ShipsInCSV() {

  const ships = await getShipsFromApi()

  const shipsInCSV = ships
    .reduce((csvComplete, ship) =>{
      csvComplete += ship.nome+','+ship.missao+'\n'
      return csvComplete
    }, 'nome,missao\n')

  return shipsInCSV

}

async function getShipsFromApi() {
  const query = 
    `{
       ships {
         name
         active
         missions {
           flight
           name
         }
       }
     }`

  const { ships } = await request(process.env.SPACEX_URL, query)
  
  return formatData(ships);
}

function formatData(ships) {
  
  const shipsFormated = ships
    .filter((ship) => ship.active === true)
    .map((ship) => {
      let newShip = {
        nome: ship.name,
          missao: ship.missions[ship.missions.length -1].name
      }
      return newShip  
    })

  return shipsFormated;  
  
}

export {
  ShipsInCSV,
  getShipsFromApi
}
