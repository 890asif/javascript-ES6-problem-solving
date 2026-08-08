const applyBonusPoints = (users, bonus) =>{
   
    return users.map(user => ({
        ...user,
    points: user.points + bonus
    }))

}
const users = [{ name: "Rafi", points: 20 }], bonus = 5

console.log(applyBonusPoints(users, bonus))