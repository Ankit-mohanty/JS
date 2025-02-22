//! Old style getter and setter


function User1(userName, email){
    this.name = userName;
    this.email = email;

    Object.defineProperty(this,'email',{
        get:function(){
            return  `${this._email}ankit`;
        },
        set:function(value){
            this._email=value
        }
    })}


    const us2 =new User1("ankit","ank@fg")
    console.log(us2.email);