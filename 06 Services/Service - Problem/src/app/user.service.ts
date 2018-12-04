export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    activeCount=0;
    inactiveCount=0;
    userSetToInactive(id:number){
        this.activeCount++;
        console.log("Active Count:",this.activeCount);
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }
    onSetToActive(id:number){
        this.inactiveCount++;
        console.log("Inactive Count:",this.inactiveCount);
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}