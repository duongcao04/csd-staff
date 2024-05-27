function UseAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}

export default UseAuth;