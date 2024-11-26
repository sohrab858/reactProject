function Header (){
    const isLogin = true;

    
    return (
        <header>
           {/* {isLogin ? (<>
           <button>Dashboard</button>
           <button>buy</button>
           </>):
        <button>Login</button>} */}

        {isLogin && <button>Cart</button>}
        </header>
            );

}

export default Header;