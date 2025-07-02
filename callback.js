function ordercofee(callback)
{
    setTimeout(()=>{callback("=cofee is reay");}, 2000);
    
}
ordercofee((cofee)=>{console.log(cofee);});
