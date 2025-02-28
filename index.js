currentNameNum = 1;

function randomInt(max, min = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newRoom(){
  numOfDoors = randomInt(4);
  x = randomInt(4)
  doorsLeft = numOfDoors;
  if (doorsLeft == 0);{
    leftPath = ["L", false, ""];
    rightPath = ["R", false, ""];
    topPath = ["T", false, ""];
    bottomPath = ["B", false, ""];
  }
  elif (doorsLeft == 1);{
    leftPath = ["L", false, ""];
    rightPath = ["R", false, ""];
    topPath = ["T", false, ""];
    bottomPath = ["B", false, ""];
  }
  room = [currentNameNum, numOfDoors, leftPath, rightPath, topPath, bottomPath]
  currentNameNum++
  return room
}

startRoom = [0, 4, ["L", true, newRoom()], ["R", true, newRoom()], ["T", true, newRoom()], ["B", true, newRoom()]];
dungeon = [startRoom]
console.log(dungeon)

let currentNameNum = 0;
export class Creature {
  name = -1;
  speed = 0;
  alive = true;
  food = 0;
  livedDays = 0;
  constructor(
    initSpeed,
    initHeight,
    initCarryStrenth = randomInt(3),
    initLiveDays = randomInt(6, 3),
    initThief = [randomTFWeight(100,50), randomInt(100)]
  ) {
    this.name = currentNameNum + 1;
    currentNameNum++;
    this.speed = initSpeed;
    this.height = initHeight;
    this.carryStrenth = initCarryStrenth;
    this.lifeTime = initLiveDays;
    this.thief = initThief
  }
  feed() {
    if (checkTreesForFood()) {
      this.food += getFood(this.carryStrenth, this.height);
    }
  }

  steal() {
    if (this.thief[0] == true && this.food == 0){
      if (checkCreaturesForFood()) {
        this.food += getFood(this.carryStrenth, this.height);
      }
    }
  }


  dieOrReproduce() {
    this.livedDays++;
    if (this.lifeTime > this.livedDays) {
      if (this.food >= 1) {
        this.food--;
        if (this.food > 0) {
          born(this.food, "Creature", this.speed, this.height);
          this.food = 0;
        }
      } else {
        this.alive = false;
      }
    } else {
      this.alive = false;
    }
  }
}