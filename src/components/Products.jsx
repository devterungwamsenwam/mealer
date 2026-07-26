
// how to embed an image inside src
import xyz from "../assets/hero.png" 

const Products = ({products}) => {

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* loop over array of products object */}
                        {
                            products.map(function(pro){
                                return (
                                    <tr key={pro.id}>
                                        <td>{pro.id}</td>
                                        <td>{pro.name}</td>
                                        <td>{pro.price}</td>
                                        <td>
                                            {/* how to use an imported image */}
                                            <img src={xyz} alt="chopchop logo"  style={{maxWidth:"50px"}} />
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products