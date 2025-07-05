try {
    let user;
    console.log(user.name);
}catch(error){
    console.error("Error message:", error.message);
}finally{
    console.log("cleanup code");
}