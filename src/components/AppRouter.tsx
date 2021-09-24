import {useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../utils/routes";
import {CHILD_ROUTE, VOLSHEBNIK_ROUTE} from "../utils/consts";

const AppRouter = () => {

    const [userType, setUserType] = useState<boolean>(false)

    return (
        <div>
            <button onClick={() => setUserType(!userType)}>Change User Type</button>
            {userType ?
                (
                    <Switch>
                        {privateRoutes.map(({path, Component}) =>
                            <Route key={path} path={path} component={Component} exact={true}/>
                        )}
                        <Redirect to={VOLSHEBNIK_ROUTE}/>
                    </Switch>
                )
                :
                (
                    <Switch>
                        {publicRoutes.map(({path, Component}) =>
                            <Route key={path} path={path} component={Component} exact={true}/>
                        )}
                        <Redirect to={CHILD_ROUTE}/>
                    </Switch>
                )}

        </div>)
};

export default AppRouter;