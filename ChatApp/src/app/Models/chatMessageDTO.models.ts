export class chatMessageDTO{
  user:string;
  message:string;

  constructor(user:string,message:string){
    this.user=user;
    this.message=message;
  }
}
