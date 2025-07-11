const thingsInMyRoom = [
  'random elephant', 
  'random elephant', 
  'random elephant', 
  'random elephant'
];

const isEverythingInMyRoomARandomElephant = thingsInMyRoom.every(
  (item) => item === 'random elephant'
);

console.log (isEverythingInMyRoomARandomElephant);
