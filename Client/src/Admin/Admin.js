
import AdminMenu from './AdminMenu'
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import AdminProducts from './AdminProducts';
import AddProduct from './AddProduct';

function Admin() {
    return(
        <div className="admin__wrapper">
            <AdminMenu />
            <div className="admin__mainContent">
                <AddProduct />
            </div>

            <Router>
                <Routes>
                    <Route exact path="/products" element={<AdminProducts />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Admin